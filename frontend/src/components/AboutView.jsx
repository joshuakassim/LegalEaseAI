import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';

export const AboutView = () => {
  return (
    <div className='max-w-3xl mx-auto space-y-6'>
      <Card>
        <CardHeader className='bg-gradient-to-r from-blue-50 to-indigo-50'>
          <h3 className='text-2xl font-bold text-slate-800'>About LegalEase</h3>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-slate-700 leading-relaxed'>
            LegalEase is an AI-powered tool designed to make legal documents
            accessible to everyone. We believe that understanding what you're
            signing shouldn't require a law degree.
          </p>
          <h4 className='font-semibold text-slate-800 mt-6'>How It Works</h4>
          <ol className='list-decimal list-inside space-y-2 text-slate-700'>
            <li>Upload your legal document or paste the text</li>
            <li>
              Our AI analyzes the document and breaks it down into clear
              sections
            </li>
            <li>Get a plain-English summary with highlighted risks</li>
            <li>Ask questions to understand specific clauses</li>
          </ol>
          <h4 className='font-semibold text-slate-800 mt-6'>What We Analyze</h4>
          <ul className='list-disc list-inside space-y-2 text-slate-700'>
            <li>Lease and rental agreements</li>
            <li>Employment contracts</li>
            <li>Non-disclosure agreements (NDAs)</li>
            <li>Service agreements</li>
            <li>Terms and conditions</li>
          </ul>
          <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6'>
            <p className='text-sm text-blue-800'>
              <strong>Remember:</strong> LegalEase is a tool to help you
              understand documents, not a replacement for professional legal
              advice. For important decisions, always consult with a qualified
              attorney.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
