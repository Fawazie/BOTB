import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Wand2, 
  TrendingUp, 
  Users, 
  Target, 
  Upload, 
  MessageSquare,
  Sparkles 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function DashboardHome() {
  const stats = [
    { name: 'Total Ads Generated', value: '128', icon: Wand2, trend: '+12.5%' },
    { name: 'Average CTR', value: '3.2%', icon: TrendingUp, trend: '+2.3%' },
    { name: 'Total Reach', value: '24.5K', icon: Users, trend: '+18.2%' },
    { name: 'Conversion Rate', value: '2.4%', icon: Target, trend: '+4.1%' },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Welcome back, Team!</h1>
          <p className="text-gray-600 mt-1">Let's create some engaging ads today.</p>
        </div>
        <Link to="/dashboard/generator">
          <Button size="lg">
            <Wand2 className="mr-2 h-5 w-5" />
            Create New Ad
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white overflow-hidden rounded-lg shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          {stat.trend}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid gap-8 grid-cols-1 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Data Integration</h2>
            <Button variant="outline" size="sm">
              <Upload className="mr-2 h-4 w-4" />
              Connect Data
            </Button>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Shopify Store</p>
                  <p className="text-sm text-gray-500">Connect your store data</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Connect</Button>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Google Analytics</p>
                  <p className="text-sm text-gray-500">Import analytics data</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Connect</Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Ad Design Consultation</h2>
            <Link to="/dashboard/generator/consultant">
              <Button variant="outline" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                Start Consultation
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">Design Consultant</p>
                  <p className="text-xs text-gray-500">Available Now</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Connect with our design experts to refine your ad and maximize its impact.
              </p>
              <div className="mt-4 flex space-x-2">
                <Link to="/dashboard/generator/consultant">
                  <Button size="sm" variant="outline">Start Consultation</Button>
                </Link>
                <Button size="sm" variant="outline">View Examples</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}