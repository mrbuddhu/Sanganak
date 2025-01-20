'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRight, Download, CheckCircle2 } from 'lucide-react';

export const GuideDownloadForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          to_email: email,
          to_name: name,
          company: company,
          reply_to: email,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setIsSuccess(true);
      // Trigger download
      const link = document.createElement('a');
      link.href = '/guides/sanganak-tech-stack-guide.pdf';
      link.download = 'Sanganak-Tech-Stack-Guide.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error:', error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900/50 p-8 backdrop-blur-sm">
      <h3 className="mb-4 text-xl font-bold text-white">Get Our Free Tech Stack Guide</h3>
      <p className="mb-6 text-gray-400">
        Learn about our proven tech stack that powers successful digital products. Perfect for CTOs,
        founders, and tech leaders.
      </p>

      {isSuccess ? (
        <div className="flex flex-col items-center justify-center space-y-4 py-8">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
          <h4 className="text-lg font-semibold text-white">Thank you for downloading!</h4>
          <p className="text-center text-gray-400">
            Your download should start automatically. Check your email for additional resources.
          </p>
          <button
            onClick={() => window.open('/guides/sanganak-tech-stack-guide.pdf', '_blank')}
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
          >
            Download Again
            <Download className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
              Work Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              placeholder="john@company.com"
            />
          </div>

          <div>
            <label htmlFor="company" className="mb-2 block text-sm font-medium text-white">
              Company
            </label>
            <input
              type="text"
              id="company"
              required
              value={company}
              onChange={e => setCompany(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              placeholder="Acme Inc"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              'Processing...'
            ) : (
              <>
                Download Guide
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
