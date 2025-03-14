import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Send, Image as ImageIcon, FileText, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AdIteration {
  id: string;
  imageUrl: string;
  description: string;
  feedback?: string;
}

interface Message {
  id: string;
  type: 'user' | 'consultant';
  content: string;
  timestamp: Date;
  sender?: string;
  adIteration?: AdIteration;
}

export function ConsultantChat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'consultant',
      content: "Hi, I'm Sarah, your ad design consultant. Based on your initial description, I've created a first draft of your ad. What do you think about this version? We can refine it based on your feedback.",
      timestamp: new Date(),
      sender: 'Sarah Thompson',
      adIteration: {
        id: '1',
        imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
        description: 'Modern, minimalist design with emphasis on product presentation',
      }
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInput('');

    // Simulate consultant response with new ad iteration
    setTimeout(() => {
      const consultantResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'consultant',
        content: "I've made adjustments based on your feedback. This version incorporates the changes you suggested while maintaining the core message. How's this?",
        timestamp: new Date(),
        sender: 'Sarah Thompson',
        adIteration: {
          id: '2',
          imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
          description: 'Updated version with warmer colors and more dynamic layout',
        }
      };
      setMessages(prev => [...prev, consultantResponse]);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 min-h-[600px] flex flex-col">
        {/* Header */}
        <div className="border-b p-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate('/dashboard/generator/style')}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Style Selection
            </Button>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-900">Ad Design Consultation</h2>
            <p className="text-sm text-gray-600 mt-1">
              Refine your ad design with your personal consultant
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.type === 'consultant' && (
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <span className="text-blue-600 text-sm font-medium">ST</span>
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                {message.type === 'consultant' && (
                  <p className="text-xs text-gray-600 mb-1">{message.sender}</p>
                )}
                <p className="text-sm whitespace-pre-line">{message.content}</p>
                
                {/* Ad Iteration Preview */}
                {message.adIteration && (
                  <div className="mt-4 bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <img 
                      src={message.adIteration.imageUrl} 
                      alt="Ad preview" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3">
                      <p className="text-sm text-gray-600">{message.adIteration.description}</p>
                      <div className="mt-2 flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          Like
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          Needs Changes
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t p-4">
          <div className="flex space-x-4">
            <Button variant="outline" size="sm">
              <ImageIcon className="h-4 w-4 mr-2" />
              Add Reference
            </Button>
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Add Document
            </Button>
            <div className="flex-1 flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Provide feedback on the ad design..."
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <Button onClick={handleSend}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}