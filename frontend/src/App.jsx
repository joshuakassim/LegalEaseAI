import { useState } from 'react';
import { Header } from './components/Header';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { Footer } from './components/Footer';
import { UploadCard } from './components/UploadCard';
import { SummaryDisplay } from './components/SummaryDisplay';
import { ChatBox } from './components/ChatBox';
import { HistoryView } from './components/HistoryView';
import { AboutView } from './components/AboutView';
import axios from 'axios';

function App() {
  const [activeTab, setActiveTab] = useState('analyze');
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');
  const [summary, setSummary] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // File input change handler
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setText('');
  };

  // Text area change handler
  const handleTextChange = (event) => {
    setText(event.target.value);
    if (event.target.value) {
      setFile(null);
    }
  };

  // Form submission handler
  const handleSubmit = async () => {
    setIsLoading(true);
    setSummary(null);

    //
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    } else {
      formData.append('text', text);
    }

    // Make API call to backend
    try {
      const response = await axios.post(
        'http://localhost:8000/summarize',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setSummary(response.data);

      // Error handling
    } catch (error) {
      console.error('Error summarizing document:', error);
      // Create user error here
    } finally {
      setIsLoading(false);
    }
  };

  // Reset handler
  const handleReset = () => {
    setFile(null);
    setText('');
    setSummary(null);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100'>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <DisclaimerBanner />

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {activeTab === 'analyze' && (
          <div className='space-y-8'>
            {!summary && (
              <div className='text-center mb-8'>
                <h2 className='text-3xl sm:text-4xl font-bold text-slate-800 mb-3'>
                  Understand Your Legal Documents
                </h2>
                <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
                  Upload any contract, lease, or legal document and get a clear,
                  plain-English summary with potential risks highlighted.
                </p>
              </div>
            )}

            <UploadCard
              file={file}
              text={text}
              isLoading={isLoading}
              onFileChange={handleFileChange}
              onTextChange={handleTextChange}
              onSubmit={handleSubmit}
              onReset={handleReset}
            />

            {summary && <SummaryDisplay summaryData={summary} />}
            {summary && summary.doc_id && <ChatBox docId={summary.doc_id} />}
          </div>
        )}

        {activeTab === 'history' && <HistoryView />}
        {activeTab === 'about' && <AboutView />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
