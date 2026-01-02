import React, { useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';

export const Header = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex justify-center'>
            <FileText className='h-8 w-8 text-blue-600' />
            <h1 className='ml-3 text-2xl font-bold text-slate-800'></h1>
          </div>

          {/* Desktop navigation */}
          <nav className='hidden md:flex space-x-8'>
            <buton
              onClick={() => setActiveTab('analyze')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'analyze'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:-text-slate-900'
              }`}
            >
              Analyze
            </buton>
            <buton
              onClick={() => setActiveTab('history')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'analyze'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:-text-slate-900'
              }`}
            >
              History
            </buton>
            <buton
              onClick={() => setActiveTab('about')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'analyze'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:-text-slate-900'
              }`}
            >
              About
            </buton>
          </nav>

          {/* Mobile menu button */}

          <button
            className='md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className='md:hidden py-4 border-t border-slate-200'>
            <button
              onClick={() => {
                setActiveTab('analyze');
                setMobileMenuOpen(false);
              }}
              className='block w-full text-left px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50'
            >
              Analyze
            </button>
            <button
              onClick={() => {
                setActiveTab('history');
                setMobileMenuOpen(false);
              }}
              className='block w-full text-left px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50'
            >
              History
            </button>
            <button
              onClick={() => {
                setActiveTab('about');
                setMobileMenuOpen(false);
              }}
              className='block w-full text-left px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50'
            >
              About
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
