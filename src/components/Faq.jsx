import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is the NextLeap Product Manager Fellowship?",
      answer: "The NextLeap Product Manager Fellowship is an intensive program designed to help professionals transition into product management. It combines practical training with hands-on experience and mentorship."
    },
    {
      question: "Who is eligible to apply for the NextLeap Product Manager Fellowship?",
      answer: "Professionals with at least 1-2 years of work experience in any domain are eligible to apply. We welcome applicants from engineering, design, business, and other backgrounds."
    },
    {
      question: "Are there any costs associated with the NextLeap Product Manager Fellowship?",
      answer: "Yes, there is a program fee that covers all training materials, workshops, and mentorship sessions. We offer flexible payment options and early application discounts."
    },
    {
      question: "What if I miss a live session?",
      answer: "All live sessions are recorded and made available in our learning portal. You can watch them at your convenience, though we recommend attending live for interactive learning."
    },
    {
      question: "What are the benefits of being a Fellow in the NextLeap Product Manager Fellowship program?",
      answer: "Fellows gain industry-relevant skills, build a portfolio of product work, and join a network of product professionals. Our program also includes career support and job placement assistance."
    },
    {
      question: "I'm a pre-final year student. Am I eligible to apply?",
      answer: "Pre-final year students can apply for our specialized student track. This version of the fellowship is adapted to accommodate academic schedules and build foundational product skills."
    },
    {
      question: "What is the graduation project?",
      answer: "The graduation project is a comprehensive product case study that you'll develop throughout the program. It demonstrates your product thinking and serves as a portfolio piece for job applications."
    },
    {
      question: "Can I re-submit my graduation project?",
      answer: "Yes, you can revise and re-submit your graduation project once based on mentor feedback. This allows you to refine your work and strengthen your final portfolio piece."
    },
    {
        question: "What is the NextLeap Product Manager Fellowship?",
        answer: "The NextLeap Product Manager Fellowship is an intensive program designed to help professionals transition into product management. It combines practical training with hands-on experience and mentorship."
      },
      {
        question: "Who is eligible to apply for the NextLeap Product Manager Fellowship?",
        answer: "Professionals with at least 1-2 years of work experience in any domain are eligible to apply. We welcome applicants from engineering, design, business, and other backgrounds."
      },
      {
        question: "Are there any costs associated with the NextLeap Product Manager Fellowship?",
        answer: "Yes, there is a program fee that covers all training materials, workshops, and mentorship sessions. We offer flexible payment options and early application discounts."
      },
      {
        question: "What if I miss a live session?",
        answer: "All live sessions are recorded and made available in our learning portal. You can watch them at your convenience, though we recommend attending live for interactive learning."
      },
      {
        question: "What are the benefits of being a Fellow in the NextLeap Product Manager Fellowship program?",
        answer: "Fellows gain industry-relevant skills, build a portfolio of product work, and join a network of product professionals. Our program also includes career support and job placement assistance."
      },
      {
        question: "I'm a pre-final year student. Am I eligible to apply?",
        answer: "Pre-final year students can apply for our specialized student track. This version of the fellowship is adapted to accommodate academic schedules and build foundational product skills."
      },
      {
        question: "What is the graduation project?",
        answer: "The graduation project is a comprehensive product case study that you'll develop throughout the program. It demonstrates your product thinking and serves as a portfolio piece for job applications."
      },
      {
        question: "Can I re-submit my graduation project?",
        answer: "Yes, you can revise and re-submit your graduation project once based on mentor feedback. This allows you to refine your work and strengthen your final portfolio piece."
      },
  ];

  return (
    <div className="bg-green-950 w-full min-h-screen px-4 pt-6 pb-12 ">
            <div className="border-t-3 border-gray-600  max-w-6xl mx-auto mt-16 mb-16"></div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-5xl font-bold mb-16">Frequently Asked Questions</h1>
        
        <ul className="space-y-6">
          {faqItems.map((item, index) => (
            <li key={index} className="border-b border-green-800 pb-4">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center text-left text-white font-medium"
              >
                <span className="flex items-center">
                  <span className="text-xs mr-3 flex items-center">■</span>
                  <span>{item.question}</span>
                </span>
                {openItem === index ? (
                  <ChevronUp 
                    className="flex-shrink-0 transition-transform duration-200"
                    size={20}
                  />
                ) : (
                  <ChevronDown 
                    className="flex-shrink-0 transition-transform duration-200"
                    size={20}
                  />
                )}
              </button>
              {openItem === index && (
                <div className="mt-2 text-white pl-6">
                  {item.answer}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQSection;