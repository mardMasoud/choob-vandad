// src/components/TestimonialCard.tsx
import Image from 'next/image';

interface TestimonialCardProps {
  avatarSrc: string;
  name: string;
  testimonial: string;
  // می‌توانید پراپ‌های دیگری مثل عنوان شغلی یا شرکت مشتری را هم بعداً اضافه کنید
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatarSrc, name, testimonial }) => {
  const focusRing = "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500";

  return (
    <div 
      className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl 
                  transition-all duration-300 ease-in-out transform 
                  hover:-translate-y-1 ${focusRing} flex flex-col items-center text-center`}
      tabIndex={0}
    >
      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-5 border-4 border-teal-100 shadow-md">
        <Image
          src={avatarSrc}
          alt={`آواتار ${name}`}
          width={96} // این ابعاد به Next.js کمک می‌کند اما تصویر با object-cover پر می‌شود
          height={96}
          className="object-cover w-full h-full" 
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm leading-relaxed italic">&ldquo;{testimonial}&rdquo;</p>
    </div>
  );
};

export default TestimonialCard;