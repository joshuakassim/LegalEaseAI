import React from 'react';

export const Input = ({ classname = '', type = 'text', ref, ...props }) => {
  return (
    <input
      ref={ref}
      type={type}
      className={`w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 foucs:ring-blue-500 foucs:border-transparent ${classname}`}
      {...props}
    ></input>
  );
};
