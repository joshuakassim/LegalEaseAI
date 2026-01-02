import React from 'react';
import { AlertCircle } from 'lucide-react';

export const DisclaimerBanner = () => {
  return (
    <div className='bg-yellow-50 border-b border-yellow-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3'>
        <div className='flex items-start'>
          <AlertCircle className='h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0' />
          <div className='ml-3'>
            <p className='text-sm text-yellow-800'>
              <span className='font-semibold'>Disclaimer:</span> This summary is
              AI-generated and for informational purposes only. It does not
              constitute legal advice. Always consult with a qualified
              professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
