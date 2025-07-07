import React from 'react';

export default function GSTAdmissionPage() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-4 space-y-4 sticky top-0 h-screen">
        <h2 className="text-xl font-bold mb-4">GST Admission</h2>
        <ul className="space-y-2">
          <li className="hover:underline cursor-pointer">Application</li>
          <li className="hover:underline cursor-pointer">Admission Guideline</li>
          <li className="hover:underline cursor-pointer">Photo Guideline</li>
          <li className="hover:underline cursor-pointer">GST Prospectus</li>
          <li className="hover:underline cursor-pointer">GST Universities</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">২০২৪-২৫ শিক্ষাবর্ষে GST গুচ্ছভুক্ত বিশ্ববিদ্যালয়সমূহে প্রাথমিক ভর্তি দ্বিতীয় পর্যায়</h1>
        
        <div className="bg-blue-100 p-4 mb-6 rounded">
          <p className="mb-2">দ্বিতীয় পর্যায়ের প্রাথমিক ভর্তি প্রক্রিয়া আগামী ২৯/০৬/২০২৫ তারিখ হতে ০৩/০৭/২০২৫ তারিখের মধ্যে GST ওয়েবসাইটের মাধ্যমে সম্পন্ন হবে।</p>
          <ul className="list-disc list-inside text-sm">
            <li>প্রাথমিক ভর্তি ফি প্রদান: ২৯/০৬/২০২৫ দুপুর ২:০০ টা হতে ০৩/০৭/২০২৫ রাত ১১:৫৯ টা পর্যন্ত।</li>
            <li>মূল কাগজপত্র জমা: ৩০/০৬/২০২৫ সকাল ১০:০০ টা হতে ০৩/০৭/২০২৫ বিকাল ০৬:০০ টা পর্যন্ত।</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow mb-6 space-y-4">
          <h2 className="text-lg font-semibold mb-2">প্রাথমিক ভর্তি প্রক্রিয়া সম্পর্কিত গুরুত্বপূর্ণ নির্দেশনাবলী</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>প্রাথমিক ভর্তি ফি ৫০০০.০০ টাকা নির্ধারিত সময়ের মধ্যে জমা দিতে হবে।</li>
            <li>প্রাথমিক ভর্তি বাতিল করতে চাইলে নির্ধারিত সময়ে GST-এ আবেদন করতে হবে।</li>
            <li className="text-red-600 font-semibold">Stop All Migration: প্রাথমিক ভর্তি প্রক্রিয়া চলাকালীন কোন ধরণের মাইগ্রেশন হবে না।</li>
            <li className="text-red-600 font-semibold">Stop University Migration: ভর্তিকৃত বিশ্ববিদ্যালয়ের অন্য কোন ইউনিটে মাইগ্রেশন হবে না।</li>
          </ul>

          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download Admission Guideline</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download Prospectus</button>
          </div>
        </div>
      </main>

      {/* Important Dates */}
      <aside className="w-64 bg-white p-4 shadow sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Important Dates</h2>
        <ul className="space-y-3 text-sm">
          <li><strong>ইউনিট C:</strong> ২৭/০৪/২০২৫ (শনিবার)</li>
          <li><strong>ইউনিট B:</strong> ০৩/০৫/২০২৫ (শনিবার)</li>
          <li><strong>ইউনিট A:</strong> ১০/০৫/২০২৫ (শনিবার)</li>
          <li><strong>আর্কিটেকচার ব্যবহারিক পরীক্ষা:</strong> ২৮/০৫/২০২৫ (বুধবার)</li>
        </ul>
      </aside>
    </div>
  );
}

