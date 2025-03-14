import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar';

export function DashboardLayout() {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100 pt-16">
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="w-64">
          <Sidebar />
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}