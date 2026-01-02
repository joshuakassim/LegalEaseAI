import React, { useState } from 'react';
import { MessageSquare, Bot, User } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { Input } from './ui/input';
import { Button } from './ui/button';

export const ChatBox = ({ docId }) => {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi! I\'ve analyzed your document. Feel free to ask me any questions about it. For example, "What are the penalties for early termination?" or "Can I sublease the property?"',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    // Validate input
    if (!input.trim()) return;

    // Append user message
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    // Simulate API response
    setTimeout(() => {
      const responses = {
        pet: 'Based on the document, pets are not allowed without written permission from the landlord. If you get approval, there is a non-refundable pet deposit of $500 per pet required.',
        terminate:
          "You can terminate the lease by providing 60 days written notice before the end of the lease term. However, be aware that if you don't give notice, the lease automatically renews for another 12 months with a 5% rent increase.",
        deposit:
          'The security deposit is $2,250, which is 1.5 times the monthly rent. This will be returned within 30 days after the lease ends, minus any deductions for damages beyond normal wear and tear.',
      };

      let response =
        'I can help answer questions about your document. Try asking about specific clauses, terms, or your rights and obligations under this agreement.';

      for (const [key, value] of Object.entries(responses)) {
        if (input.toLowerCase().includes(key)) {
          response = value;
          break;
        }
      }

      setMessages([...newMessages, { sender: 'bot', text: response }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center'>
          <MessageSquare className='h-5 w-5 mr-2 text-blue-600' />
          Ask Questions About Your Document
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='h-96 overflow-y-auto mb-4 space-y-4 p-4 bg-slate-50 rounded-lg'>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                  msg.sender === 'user' ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              >
                {msg.sender === 'bot' ? (
                  <Bot className='h-5 w-5 text-slate-700' />
                ) : (
                  <User className='h-5 w-5 text-white' />
                )}
              </div>
              <div
                className={`rounded-lg p-3 max-w-md ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-800 border border-slate-200'
                }`}
              >
                <p className='text-sm leading-relaxed'>{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className='flex items-start gap-3'>
              <div className='flex-shrink-0 h-8 w-8 rounded-full bg-slate-300 flex items-center justify-center'>
                <Bot className='h-5 w-5 text-slate-700' />
              </div>
              <div className='bg-white border border-slate-200 rounded-lg p-3'>
                <div className='flex gap-1'>
                  <div className='h-2 w-2 bg-slate-400 rounded-full animate-bounce'></div>
                  <div
                    className='h-2 w-2 bg-slate-400 rounded-full animate-bounce'
                    style={{ animationDelay: '0.1s' }}
                  ></div>
                  <div
                    className='h-2 w-2 bg-slate-400 rounded-full animate-bounce'
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='flex gap-2'>
          <Input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="e.g., 'What are the penalties for late rent?'"
            disabled={isLoading}
          />
          <Button
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
          >
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
