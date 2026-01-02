import React from 'react';

export const Card = ({ classname = '', children, ...props }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden ${classname}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ classname = '', children, ...props }) => {
  return (
    <div
      className={`p-6 border-b border-slate-200 bg-slate-50 ${classname}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ classname = '', children, ...props }) => {
  return (
    <h3
      className={`text-lg font-semibold text-slate-800 ${classname}`}
      {...props}
    >
      {children}
    </h3>
  );
};

export const CardContent = ({ classname = '', children, ...props }) => {
  return (
    <div className={`p-6 ${classname}`} {...props}>
      {children}
    </div>
  );
};
