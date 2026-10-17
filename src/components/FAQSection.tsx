import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Can I explore Looply without an account?',
    answer:
      'Yes. You can browse activities and explore Walk, Food, and Art without creating an account.',
  },
  {
    id: 'faq-2',
    question: 'Why do I need an account to save an activity?',
    answer:
      'An account lets Looply associate saved activities with your personal list, so you can find the things you liked again.',
  },
  {
    id: 'faq-3',
    question: 'Does saving an activity reserve a place?',
    answer:
      'No. Saving adds the activity to your personal list. It does not reserve a place or guarantee availability.',
  },
  {
    id: 'faq-4',
    question: 'Do I have to choose my interests during registration?',
    answer:
      'No. You can explore activities first and decide what interests you as you go.',
  },
  {
    id: 'faq-5',
    question: 'What happens if registration fails?',
    answer:
      'Looply should explain the problem, preserve your progress where possible, and let you retry or sign in if you may already have an account.',
  },
  {
    id: 'faq-6',
    question: 'Can I share activities with friends?',
    answer:
      'Yes, sharing an activity link is an optional way to show someone something you discovered. You can use Looply without sharing anything.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#6F86F8] uppercase tracking-wider block mb-2">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17183F] font-heading tracking-tight mb-4">
            A few things you might be wondering.
          </h2>
          <p className="text-base sm:text-lg text-[#73758A] leading-relaxed">
            Here's how Looply keeps activity discovery simple.
          </p>
        </div>

        {/* 2-Column Accordion Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
          {FAQ_DATA.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAFAFC] border-[#6F86F8]/40 shadow-xs'
                    : 'bg-white border-[#E6E7EF] hover:border-[#D5D8E8]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F86F8]"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#17183F] leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#6F86F8] text-white rotate-180'
                        : 'bg-[#EEF1FF] text-[#6F86F8]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-[#73758A] leading-relaxed border-t border-[#E6E7EF]/50 pt-3 animate-in fade-in duration-150"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
