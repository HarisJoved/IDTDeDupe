'use client';

export default function FAQsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Add padding to account for fixed header */}
      <div className="pt-[72px]">
        <div className="text-center container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-[#059669] mb-4">
            Frequently asked questions (FAQ)
          </h1>
          
          <p className="text-gray-600 text-lg mb-8">
            Frequently asked questions (and answers) from IDT Governance users.
          </p>

          {/* Placeholder for FAQ items - you can add them here */}
          <div className="space-y-8">
            {/* Example FAQ item structure */}
            {/* <div className="border-b pb-6">
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Question?</h3>
              <p className="text-gray-600">Answer</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
} 