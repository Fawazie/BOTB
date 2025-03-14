import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">Xylo Solutions</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">Projects</Button>
            <Button variant="outline" size="sm">Help</Button>
            <Button size="sm">Account</Button>
          </div>
        </div>
      </div>
    </header>
  );
}