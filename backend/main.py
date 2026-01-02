import json
from typing import Union

from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from google import genai
from google.genai import types
import io
from dotenv import load_dotenv
import PyPDF2

load_dotenv()
# Initialize FastAPI app
app = FastAPI()

# Set up CORS middleware
app.add_middleware(
    CORSMiddleware,
    # Adjust the origins as needed
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Function to interact with the LLM and get the summary
def get_llm_summary(document_text: str):

    # Define the prompt for the LLM
    prompt = f"""
    You are an AI legal assistant named LegalEase. Your goal is to explain complex legal documents in simple terms.
    Analyze the following legal document. Provide a response in valid JSON format.
    The JSON object should have two keys: "overall_summary" and "sections".
    - "overall_summary": A brief, one-paragraph summary of the entire document, written at an 8th-grade reading level.
    - "sections": An array of objects, where each object represents a logical section of the document. Each object should have three keys:
        - "section_title": A clear, concise title for the section (e.g., "Lease Term and Rent").
        - "summary": A plain-language summary of what this section means for the user.
        - "risks": An array of strings, where each string is a potential risk or disadvantageous clause found in that section. If no risks are found, return an empty array [].

    Here is the document text:
    ---
    {document_text}
    --- 
    """

    # Call the Gemini API
    try:
        client = genai.Client()

        # Make the API call to generate content
        response = client.models.generate_content(
            model="gemini-2.5-flash", 
            config=types.GenerateContentConfig(
                system_instruction="You are a helpful legal assistant that provides JSON output"),
            contents=prompt
        )

        # Extract and return the JSON response
        return json.loads(response.text[7:-3])
        
    # Handle exceptions
    except Exception as e:
        print(f"Error calling Gemini,: {str(e)}")
        return {"error": "Failed to get summary from AI model."}

    
# API endpoint to summarize the document
@app.post("/summarize")
# Define the endpoint to accept either a file upload or text input
async def summarize_document(file: UploadFile = File(None), text: str = Form(None)):

    # Initialize an empty string to hold the document text
    document_text = ""

    # Extract text from the uploaded PDF file or use the provided text
    if file:
        # Read and extract text from the PDF file
        try:
            pdf_content = await file.read()
            pdf_reader = PyPDF2.PdfReader(io.BytesIO(pdf_content))
            for page in pdf_reader.pages:
                document_text += page.extract_text()
        # Handle exceptions during PDF processing
        except Exception as e:
            return {"error": f"Failed to process PDF: {str(e)}"}
    elif text:
        document_text = text
    # Handle the case where neither a file nor text is provided
    else:
        return {"error": "No document or text provided"}
    
    # Check if the extracted text is empty
    if not document_text.strip():
        return {"error": "Extracted text is empty"}
    
    # Add text chunking if document is too long: TO DO

    # Call the LLM to get the summary
    summary_data = get_llm_summary(document_text)

    # Return the summary data
    return summary_data