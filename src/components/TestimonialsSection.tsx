// src/components/TestimonialsSection.tsx
import React from 'react';
import TestimonialCard from '@/components/TestimonialCard'; // کامپوننت کارت نظرات

// تعریف نوع برای داده‌های هر نظر
interface TestimonialData {
  avatarSrc: string;
  name: string;
  testimonial: string;
}

// تعریف پراپ برای کامپوننت TestimonialsSection
interface TestimonialsSectionProps {
  testimonials: TestimonialData[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-16 bg-teal-50"> {/* پس‌زمینه متفاوت برای تمایز */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          مشتریان ما چه می‌گویند؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              avatarSrc={testimonial.avatarSrc}
              name={testimonial.name}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;