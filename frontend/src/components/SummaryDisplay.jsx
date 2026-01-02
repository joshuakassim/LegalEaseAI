import { useState } from 'react';
import {
  CheckCircle,
  Download,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { Button } from './ui/Button';

export const SummaryDisplay = ({ summaryData }) => {
  const [expandedSections, setExpandedSections] = useState([0]);

  // Toggle section expansion
  const toggleSection = (index) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Handle error case
  if (summaryData.error) {
    return (
      <div className='bg-red-50 border border-red-200 rounded-xl p-6'>
        <div className='flex items-start'>
          <AlertCircle className='h-6 w-6 text-red-600 mt-0.5' />
          <div className='ml-3'>
            <h3 className='text-lg font-semibold text-red-800'>
              Analysis Error
            </h3>
            <p className='text-red-700 mt-1'>{summaryData.error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      {/* Overall Summary */}
      <Card>
        <CardHeader className='bg-gradient-to-r from-blue-50 to-indigo-50'>
          <CardTitle className='flex items-center'>
            <CheckCircle className='h-5 w-5 mr-2 text-blue-600' />
            Overall Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-slate-700 leading-relaxed'>
            {summaryData.overall_summary}
          </p>
          <div className='mt-4 flex gap-3'>
            <Button
              variant='secondary'
              size='sm'
              className='flex items-center gap-2'
            >
              <Download className='h-4 w-4' />
              Export Summary
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Section Breakdown</CardTitle>
        </CardHeader>
        <div className='divide-y divide-slate-200'>
          {(summaryData?.sections || []).map((section, index) => (
            <div key={index} className='p-6'>
              <button
                onClick={() => toggleSection(index)}
                className='w-full flex items-center justify-between text-left group'
              >
                <h4 className='text-base font-semibold text-slate-800 group-hover:text-blue-600 transition-colors'>
                  {section.section_title}
                </h4>
                {expandedSections.includes(index) ? (
                  <ChevronUp className='h-5 w-5 text-slate-400' />
                ) : (
                  <ChevronDown className='h-5 w-5 text-slate-400' />
                )}
              </button>

              {expandedSections.includes(index) && (
                <div className='mt-4 space-y-4'>
                  <p className='text-slate-700 leading-relaxed'>
                    {section.summary}
                  </p>

                  {section.risks && section.risks.length > 0 && (
                    <div className='bg-orange-50 border border-orange-200 rounded-lg p-4'>
                      <h5 className='font-semibold text-orange-800 flex items-center mb-3'>
                        <AlertCircle className='h-5 w-5 mr-2' />
                        Potential Risks to Note
                      </h5>
                      <ul className='space-y-2'>
                        {(section?.risks || []).map((risk, rIndex) => (
                          <li
                            key={rIndex}
                            className='flex items-start text-orange-700 text-sm'
                          >
                            <span className='text-orange-500 mr-2'>•</span>
                            <span>{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
