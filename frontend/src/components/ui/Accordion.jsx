import React from 'react';

export const Accordion = ({
  classname = '',
  children,
  type = 'single',
  collapsible = 'false',
  ...props
}) => {
  return (
    <div className={`w=full ${classname}`} {...props}>
      {children}
    </div>
  );
};

export const AccordionItem = ({
  classname = '',
  children,
  value,
  ...props
}) => {
  return (
    <div className={`border-b border-slate-200 ${classname}`} {...props}>
      {children}
    </div>
  );
};

export const AccordionTrigger = ({
  classname = '',
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`w-full flex items-center justify-between text-left group py-4 ${classname}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export const AccordionContent = ({ classname = '', children, ...props }) => {
  return (
    <div className={`pb-4 ${classname}`} {...props}>
      {children}
    </div>
  );
};
