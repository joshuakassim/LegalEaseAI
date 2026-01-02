import React from 'react';

export const Textarea = ({ classname = '', ref, ...props }) => {
  return (
    <textarea
      ref={ref}
      className={`w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${classname}`}
      {...props}
    />
  );
};

Textarea.displayName = 'Textarea';
