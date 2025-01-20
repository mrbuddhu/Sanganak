'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

const PricingSection = () => {
  const [currency, setCurrency] = React.useState<'USD' | 'INR'>('USD');

  const solutions = [
    {
      title: 'No-Code Solutions',
      subtitle: 'Build without coding',
      price: {
        USD: 2500,
        INR: 25000,
      },
      platforms: ['Figma', 'Framer', 'Webflow', 'WordPress', 'Shopify'],
      features: [
        'Custom Design',
        'SEO Optimization',
        'Content Management',
        'E-commerce Setup',
        'Training & Support',
      ],
      buttonText: 'Start Project',
      link: 'https://cal.com/sanganak/strategycall',
      showPrice: true,
    },
    {
      title: 'Custom Development',
      subtitle: 'Tailored solutions for unique needs',
      platforms: ['MERN Stack', 'React Native', 'Flutter'],
      features: [
        'Full-stack Development',
        'Native Mobile Apps',
        'Custom API Integration',
        'Database Architecture',
        'Authentication System',
        'Performance Optimization',
        'Scalable Infrastructure',
      ],
      buttonText: 'Get Custom Quote',
      link: 'https://cal.com/sanganak/customquote',
      showPrice: false,
    },
    {
      title: 'Advanced Technology',
      subtitle: 'Cutting-edge solutions',
      platforms: ['AI/ML', 'Blockchain'],
      features: [
        'AI Integration',
        'Custom AI Models',
        'Smart Contracts',
        'DApp Development',
        'ML Pipeline Setup',
        'Data Processing',
        'Expert Consultation',
      ],
      buttonText: 'Discuss Project',
      link: 'https://cal.com/sanganak/discuss',
      showPrice: false,
    },
  ];

  React.useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const isIndia = timezone.includes('Asia/Kolkata');
    setCurrency(isIndia ? 'INR' : 'USD');
  }, []);

  const formatPrice = (price: number) => {
    if (currency === 'USD') {
      return `$${price.toLocaleString('en-US')}`;
    }
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <div className="container text-white">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold sm:text-4xl">Pricing Plans</h2>
        <p className="mt-4 text-base md:text-lg text-gray-300">
          Choose the perfect plan for your needs
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm p-6 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center">
                <h3 className="mb-2 text-xl font-semibold text-purple-400">{solution.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{solution.subtitle}</p>

                {solution.showPrice ? (
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-white">
                      {solution.price?.[currency]
                        ? formatPrice(solution.price[currency])
                        : 'Contact Us'}
                    </div>
                    <p className="text-sm text-gray-300 mt-1">Starting price</p>
                  </div>
                ) : (
                  <div className="mb-4">
                    <div className="text-xl font-semibold text-white">Custom Quote</div>
                    <p className="text-sm text-gray-300 mt-1">Project-based pricing</p>
                  </div>
                )}

                <div className="space-y-4 w-full">
                  <div>
                    <p className="font-semibold text-white mb-2">Platforms:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                      {solution.platforms.map((platform, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs md:text-sm bg-purple-400/10 text-purple-400 rounded-full border border-purple-400/20 whitespace-nowrap text-center"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-white mb-2">Features:</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <Check className="h-4 w-4 text-purple-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300"
                  variant="default"
                  asChild
                >
                  <Link href={solution.link}>{solution.buttonText}</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-300">
          All prices in{' '}
          <select
            value={currency}
            onChange={e => setCurrency(e.target.value as 'USD' | 'INR')}
            className="bg-transparent border-b border-gray-300 text-purple-400 focus:outline-none cursor-pointer"
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
        </p>
      </div>
    </div>
  );
};

export default PricingSection;
