import React from 'react';
import { History, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

export const HistoryView = () => {
  const sampleHistory = [
    {
      id: 1,
      name: 'Apartment_Lease_2024.pdf',
      date: '2024-11-28',
      type: 'Lease Agreement',
    },
    {
      id: 2,
      name: 'Employment_Contract.pdf',
      date: '2024-11-25',
      type: 'Employment Contract',
    },
    { id: 3, name: 'NDA_Template.pdf', date: '2024-11-20', type: 'NDA' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center'>
          <History className='h-5 w-5 mr-2 text-blue-600' />
          Document History
        </CardTitle>
      </CardHeader>
      <CardContent>
        {sampleHistory.length === 0 ? (
          <p className='text-center text-slate-500 py-8'>
            No documents analyzed yet.
          </p>
        ) : (
          <div className='space-y-3'>
            {sampleHistory.map((doc) => (
              <div
                key={doc.id}
                className='border border-slate-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <FileText className='h-8 w-8 text-blue-600' />
                    <div>
                      <p className='font-medium text-slate-800'>{doc.name}</p>
                      <p className='text-sm text-slate-500'>
                        {doc.type} • {doc.date}
                      </p>
                    </div>
                  </div>
                  <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
