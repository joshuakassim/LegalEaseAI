import React from 'react';
import { Upload, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export const UploadCard = ({
  file,
  text,
  isLoading,
  onFileChange,
  onTextChange,
  onSubmit,
  onReset,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center'>
          <Upload className='h-5 w-5 mr-2 text-blue-600' />
          Upload Document
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          <p className='text-sm text-slate-500'>
            Upload a PDF document or paste the text directly below.
          </p>

          {/* File Upload */}
          <div className='border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors'>
            <input
              type='file'
              accept='.pdf'
              onChange={onFileChange}
              className='hidden'
              id='file-upload'
            />
            <label htmlFor='file-upload' className='cursor-pointer'>
              <FileText className='h-12 w-12 text-slate-400 mx-auto mb-3' />
              {file ? (
                <p className='text-sm font-medium text-slate-700'>
                  {file.name}
                </p>
              ) : (
                <>
                  <p className='text-sm font-medium text-slate-700'>
                    Click to upload or drag and drop
                  </p>
                  <p className='text-xs text-slate-500 mt-1'>
                    PDF files only (max 10MB)
                  </p>
                </>
              )}
            </label>
          </div>

          {/* Divider */}
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-slate-300'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-2 bg-white text-slate-500'>OR</span>
            </div>
          </div>

          {/* Text Input */}
          <div>
            <label className='block text-sm font-medium text-slate-700 mb-2'>
              Paste Document Text
            </label>
            <Textarea
              placeholder='Paste your contract or legal document text here...'
              value={text}
              onChange={onTextChange}
              rows={8}
            />
          </div>

          {/* Action Buttons */}
          <div className='flex gap-3'>
            <Button
              onClick={onSubmit}
              disabled={isLoading || (!file && !text)}
              className='flex-1'
            >
              {isLoading ? (
                <>
                  <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
                  Analyzing...
                </>
              ) : (
                'Analyze Document'
              )}
            </Button>
            {(file || text) && (
              <Button onClick={onReset} variant='outline'>
                Reset
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
