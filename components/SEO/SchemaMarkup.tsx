'use client';

import JsonLd from './JsonLd';
import { servicesSchema, reviewSchema, faqSchema, breadcrumbSchema } from './schemas';

export default function SchemaMarkup() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <JsonLd data={reviewSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
