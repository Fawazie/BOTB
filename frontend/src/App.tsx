import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '@/components/layout/header';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DashboardHome } from '@/pages/dashboard/home';
import { AdGenerator } from '@/pages/dashboard/generator';
import { AdStyleChat } from '@/pages/dashboard/ad-style-chat';
import { ConsultantChat } from '@/pages/dashboard/consultant-chat';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="generator" element={<AdGenerator />} />
            <Route path="generator/style" element={<AdStyleChat />} />
            <Route path="generator/consultant" element={<ConsultantChat />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;