import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  Image, 
  Film, 
  PlayCircle, 
  Target, 
  Palette, 
  TrendingUp, 
  MousePointerClick,
  ArrowRight,
  Upload
} from 'lucide-react';

type AdType = 'post' | 'story' | 'reel' | 'tv';
type AdStyle = 'minimalist' | 'playful' | 'luxury' | 'bold';

interface AdPreferences {
  type: AdType;
  audience: {
    age: string[];
    gender: string[];
    location: string;
    interests: string[];
  };
  style: AdStyle;
  cta: string;
}

export function AdGenerator() {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState<AdPreferences>({
    type: 'post',
    audience: {
      age: ['18-24'],
      gender: ['all'],
      location: 'worldwide',
      interests: [],
    },
    style: 'minimalist',
    cta: 'Shop Now',
  });

  const adTypes = [
    { id: 'post', name: 'Post', icon: Image, description: 'Static Image or Carousel' },
    { id: 'story', name: 'Story', icon: Film, description: '5-15 sec Vertical Video' },
    { id: 'reel', name: 'Reel', icon: PlayCircle, description: '15-60 sec Trend-Based Video' },
    { id: 'tv', name: 'TV Commercial', icon: PlayCircle, description: 'Full-Production-Style Video' },
  ];

  const handleNext = () => {
    navigate('/dashboard/generator/style');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Create New Ad</h1>
          <p className="mt-2 text-sm text-gray-600">
            Set up your ad preferences and connect your data sources
          </p>
        </div>

        {/* Data Upload Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900">First-Party Data</h2>
              <p className="text-sm text-gray-600">Connect your data sources to optimize ad targeting</p>
            </div>
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload Data
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Shopify', 'Google Analytics', 'CRM'].map((source) => (
              <div key={source} className="border rounded-lg p-4">
                <h3 className="font-medium text-gray-900">{source}</h3>
                <p className="text-sm text-gray-600 mb-4">Connect your {source} data</p>
                <Button variant="outline" size="sm">Connect</Button>
              </div>
            ))}
          </div>
        </div>

        {/* Ad Type Selection */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900 flex items-center">
            <Film className="mr-2 h-5 w-5" />
            Select Ad Type
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {adTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setPreferences({ ...preferences, type: type.id as AdType })}
                className={`${
                  preferences.type === type.id
                    ? 'border-blue-500 ring-2 ring-blue-200'
                    : 'border-gray-200 hover:border-gray-300'
                } relative rounded-lg border bg-white p-4 shadow-sm focus:outline-none`}
              >
                <div className="flex items-center">
                  <type.icon className="h-6 w-6 text-blue-600" />
                  <div className="ml-4 text-left">
                    <p className="text-sm font-medium text-gray-900">{type.name}</p>
                    <p className="text-sm text-gray-500">{type.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Audience Preferences */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Target Audience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Age Range</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={preferences.audience.age[0]}
                onChange={(e) => setPreferences({
                  ...preferences,
                  audience: { ...preferences.audience, age: [e.target.value] }
                })}
              >
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45+">45+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={preferences.audience.location}
                onChange={(e) => setPreferences({
                  ...preferences,
                  audience: { ...preferences.audience, location: e.target.value }
                })}
                placeholder="Enter location"
              />
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end pt-6">
          <Button
            size="lg"
            onClick={handleNext}
            className="w-full sm:w-auto"
          >
            Next: Design Your Ad
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}