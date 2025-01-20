export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'No-Code Solutions',
      description: 'Quick launch with proven platforms like Webflow, WordPress, and Shopify',
      provider: {
        '@type': 'Organization',
        name: 'Sanganak',
      },
      serviceType: 'Web Development',
      offers: {
        '@type': 'Offer',
        price: '2997',
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'Custom Development',
      description: 'Tailored solutions using MERN Stack, React Native, and Flutter',
      provider: {
        '@type': 'Organization',
        name: 'Sanganak',
      },
      serviceType: 'Software Development',
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'Advanced Technology',
      description: 'Cutting-edge solutions in AI/ML and Blockchain',
      provider: {
        '@type': 'Organization',
        name: 'Sanganak',
      },
      serviceType: 'Technology Consulting',
    },
  ],
};

export const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sanganak',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '6',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Rajesh Kumar',
      },
      reviewBody:
        "Sanganak's expertise in AI solutions has revolutionized our business processes. Their team's dedication and innovative approach exceeded our expectations.",
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Sarah Chen',
      },
      reviewBody:
        'Working with Sanganak transformed our digital presence. Their UI/UX design expertise helped us achieve a 40% increase in user engagement.',
    },
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Sanganak offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sanganak offers a wide range of services including No-Code Solutions (Webflow, WordPress, Shopify), Custom Development (MERN Stack, React Native, Flutter), and Advanced Technology solutions (AI/ML, Blockchain).',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Sanganak based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sanganak is a Bihar-based bootstrap startup founded in July 2021.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I get a quote for my project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can schedule a consultation through our website or contact us directly. We offer custom quotes based on your specific project requirements.',
      },
    },
  ],
};

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://sanganak.org',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://sanganak.org/#services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Portfolio',
      item: 'https://sanganak.org/#portfolio',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Pricing',
      item: 'https://sanganak.org/#pricing',
    },
  ],
};
