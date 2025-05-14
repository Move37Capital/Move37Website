import React from 'react';

const Disclaimer = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Terms & Conditions / Disclaimer</h1>
      <p className="text-sm mb-10 text-gray-600 italic">
        Please read the following terms and conditions carefully. By using this website, you agree to abide by them. These terms are subject to change at any time without notice.
      </p>

      <div className="space-y-8 text-[15px] leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-blue-800">1. Professional Use Only</h2>
          <p>
            This website is intended for institutional or professional clients only. Retail investors should not act on the information provided here.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">2. No Investment Advice</h2>
          <p>
            All content is for informational purposes only and does not constitute financial, legal, or investment advice. Nothing here is a solicitation or offer.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">3. Accuracy Not Guaranteed</h2>
          <p>
            While efforts are made to maintain accuracy, Move37 Capital does not guarantee the completeness or correctness of any information and may update it without notice.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">4. Intellectual Property</h2>
          <p>
            All materials on this site are owned by Move37 Capital and protected by copyright laws. No reproduction or distribution is permitted without prior consent.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">5. Legal Jurisdiction</h2>
          <p>
            These terms are governed by the laws of England and Wales. Disputes shall be subject to the exclusive jurisdiction of English courts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
