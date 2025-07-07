import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("application");
  const [menuOpen, setMenuOpen] = useState(false);
  const [datesVisible, setDatesVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const sidebarItems = [
    { id: "application", label: "Application", icon: "📝" },
    { id: "guideline", label: "Admission Guideline", icon: "📘" },
    { id: "photo", label: "Photo Guideline", icon: "🖼️" },
    { id: "prospectus", label: "GST Prospectus", icon: "📚" },
    { id: "universities", label: "GST Universities", icon: "🏛️" },
  ];

  const importantDates = [
    { unit: "ইউনিট C", date: "২৭/০৪/২০২৫ (শনিবার)" },
    { unit: "ইউনিট B", date: "০৩/০৫/২০২৫ (শনিবার)" },
    { unit: "ইউনিট A", date: "১০/০৫/২০২৫ (শনিবার)" },
    { unit: "আর্কিটেকচার ব্যবহারিক পরীক্ষা", date: "২৮/০৫/২০২৫ (বুধবার)" },
  ];

  const toggleDates = () => {
    setDatesVisible(!datesVisible);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Top Navigation Bar - Mobile Only */}
      <header className="md:hidden bg-gradient-to-r from-blue-800 to-indigo-900 text-white shadow-lg fixed top-0 left-0 right-0 z-30">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-white text-blue-800 rounded-full p-2 mr-3">
              <span className="font-bold text-sm">GST</span>
            </div>
            <h1 className="text-lg font-bold">GST Admission</h1>
          </div>

          <div className="flex items-center space-x-3">
            <button className="relative">
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
              <div className="bg-white text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                AS
              </div>
            </button>
            <button
              className="text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Top Navigation */}
      <header className="hidden md:block bg-gradient-to-r from-blue-800 to-indigo-900 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-white text-blue-800 rounded-full p-3 mr-4">
              <span className="font-bold text-xl">GST</span>
            </div>
            <h1 className="text-2xl font-bold">GST Admission Portal</h1>
          </div>

          <div className="flex items-center space-x-6">
            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition-all text-lg">
              Login
            </button>
            <div className="relative">
              <button className="bg-white text-blue-800 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                AS
              </button>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                3
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-blue-800 text-white py-4 px-4 z-20 shadow-xl">
          <ul className="space-y-3">
            {sidebarItems.map((item) => (
              <li
                key={item.id}
                className={`flex items-center py-3 px-4 rounded-lg cursor-pointer transition-all ${
                  activeTab === item.id ? "bg-blue-700" : "hover:bg-blue-700"
                }`}
                onClick={() => {
                  setActiveTab(item.id);
                  setMenuOpen(false);
                }}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 bg-blue-900 rounded-xl p-4 border border-blue-700">
            <h3 className="font-bold mb-3">Help Center</h3>
            <p className="text-sm mb-4">
              Need assistance with your application?
            </p>
            <button className="w-full bg-white text-blue-800 py-2 rounded-lg font-medium hover:bg-blue-100 transition-all">
              Contact Support
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 pt-20 pb-24 md:py-8">
        {/* Desktop Layout */}
        {!isMobile && (
          <div className="flex">
            {/* Desktop Sidebar */}
            <aside className="hidden md:block w-64 bg-gradient-to-b from-blue-800 to-indigo-900 text-white rounded-xl shadow-xl mr-6 p-5 h-fit sticky top-24">
              <h2 className="text-xl font-bold mb-6 pb-3 border-b border-blue-700">
                GST Admission
              </h2>
              <ul className="space-y-2">
                {sidebarItems.map((item) => (
                  <li
                    key={item.id}
                    className={`flex items-center py-3 px-4 rounded-lg cursor-pointer transition-all ${
                      activeTab === item.id
                        ? "bg-blue-700 shadow-inner"
                        : "hover:bg-blue-700 hover:shadow-md"
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-blue-900 rounded-xl p-4 border border-blue-700">
                <h3 className="font-bold mb-3">Help Center</h3>
                <p className="text-sm mb-4">
                  Need assistance with your application?
                </p>
                <button className="w-full bg-white text-blue-800 py-2 rounded-lg font-medium hover:bg-blue-100 transition-all">
                  Contact Support
                </button>
              </div>
            </aside>

            {/* Main Content - Desktop */}
            <main className="flex-1 mb-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 text-white">
                  <h1 className="text-2xl font-bold text-center">
                    ২০২৪-২৫ শিক্ষাবর্ষে GST গুচ্ছভুক্ত বিশ্ববিদ্যালয়সমূহে
                    প্রাথমিক ভর্তি দ্বিতীয় পর্যায়
                  </h1>
                </div>

                <div className="p-6">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-lg p-5 mb-6 shadow-md">
                    <p className="mb-4 font-medium text-lg">
                      দ্বিতীয় পর্যায়ের প্রাথমিক ভর্তি প্রক্রিয়া আগামী
                      ২৯/০৬/২০২৫ তারিখ হতে ০৩/০৭/২০২৫ তারিখের মধ্যে GST
                      ওয়েবসাইটের মাধ্যমে সম্পন্ন হবে।
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-base">
                      <li className="flex">
                        <span className="font-medium min-w-[250px]">
                          প্রাথমিক ভর্তি ফি প্রদান:
                        </span>
                        <span>
                          ২৯/০৬/২০২৫ দুপুর ২:০০ টা হতে ০৩/০৭/২০২৫ রাত ১১:৫৯ টা
                          পর্যন্ত
                        </span>
                      </li>
                      <li className="flex">
                        <span className="font-medium min-w-[250px]">
                          মূল কাগজপত্র জমা:
                        </span>
                        <span>
                          ৩০/০৬/২০২৫ সকাল ১০:০০ টা হতে ০৩/০৭/২০২৫ বিকাল ০৬:০০ টা
                          পর্যন্ত
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
                    <h2 className="text-xl font-semibold mb-5 pb-2 border-b border-gray-200">
                      প্রাথমিক ভর্তি প্রক্রিয়া সম্পর্কিত গুরুত্বপূর্ণ
                      নির্দেশনাবলী
                    </h2>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 rounded-full w-7 h-7 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          1
                        </span>
                        <span className="text-lg">
                          প্রাথমিক ভর্তি ফি ৫০০০.০০ টাকা নির্ধারিত সময়ের মধ্যে
                          জমা দিতে হবে
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 rounded-full w-7 h-7 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </span>
                        <span className="text-lg">
                          প্রাথমিক ভর্তি বাতিল করতে চাইলে নির্ধারিত সময়ে GST-এ
                          আবেদন করতে হবে
                        </span>
                      </li>
                      <li className="flex items-start text-red-600 font-semibold">
                        <span className="bg-red-100 text-red-800 rounded-full w-7 h-7 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          !
                        </span>
                        <span className="text-lg">
                          Stop All Migration: প্রাথমিক ভর্তি প্রক্রিয়া চলাকালীন
                          কোন ধরণের মাইগ্রেশন হবে না
                        </span>
                      </li>
                      <li className="flex items-start text-red-600 font-semibold">
                        <span className="bg-red-100 text-red-800 rounded-full w-7 h-7 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          !
                        </span>
                        <span className="text-lg">
                          Stop University Migration: ভর্তিকৃত বিশ্ববিদ্যালয়ের
                          অন্য কোন ইউনিটে মাইগ্রেশন হবে না
                        </span>
                      </li>
                    </ul>

                    <div className="flex space-x-6 mt-8">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all shadow-md flex items-center justify-center text-lg">
                        <span className="mr-3">📄</span> Download Admission
                        Guideline
                      </button>
                      <button className="flex-1 bg-gradient-to-r from-green-600 to-teal-700 text-white px-6 py-4 rounded-xl hover:from-green-700 hover:to-teal-800 transition-all shadow-md flex items-center justify-center text-lg">
                        <span className="mr-3">📚</span> Download Prospectus
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5">
                      <h3 className="font-semibold text-lg mb-3">
                        Application Status
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-base">
                            Application Submitted
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                          <span className="text-base">Fee Payment Pending</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-gray-300 rounded-full mr-3"></div>
                          <span className="text-base">
                            Document Verification
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5">
                      <h3 className="font-semibold text-lg mb-3">
                        Important Notice
                      </h3>
                      <p className="mb-4">
                        All applicants must upload clear scanned copies of
                        documents. Blurry or incomplete documents will lead to
                        application rejection.
                      </p>
                      <p className="text-red-600 font-medium">
                        Deadline: 03/07/2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            {/* Desktop: Important Dates Sidebar */}
            <aside className="hidden md:block w-72 ml-6 sticky top-24 h-fit">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-5 text-white">
                  <h2 className="text-xl font-bold">Important Dates</h2>
                </div>

                <div className="p-5">
                  <ul className="space-y-4">
                    {importantDates.map((date, index) => (
                      <li
                        key={index}
                        className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 shadow-sm"
                      >
                        <div className="font-medium text-lg text-blue-800">
                          {date.unit}
                        </div>
                        <div className="text-indigo-700">{date.date}</div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-4">
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <span className="mr-2">⏰</span> Reminder
                    </h3>
                    <p className="mb-4">
                      Set reminders for important dates to never miss a deadline
                    </p>
                    <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-lg font-medium hover:from-amber-600 hover:to-orange-700 transition-all">
                      Set Calendar Reminders
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl p-5 border border-green-200">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <span className="mr-2">📱</span> Get Mobile App
                </h3>
                <p className="mb-4">
                  Download our mobile app for easy access to admission updates
                  and notifications
                </p>
                <div className="flex space-x-4">
                  <button className="flex-1 bg-black text-white py-3 rounded-lg flex flex-col items-center justify-center">
                    <span className="text-xl mb-1">🍏</span>
                    <span>App Store</span>
                  </button>
                  <button className="flex-1 bg-gray-800 text-white py-3 rounded-lg flex flex-col items-center justify-center">
                    <span className="text-xl mb-1">🤖</span>
                    <span>Play Store</span>
                  </button>
                </div>
              </div>
            </aside>
          </div>
        )}

        {/* Mobile Layout */}
        {isMobile && (
          <div>
            {/* Mobile: Important Dates Button */}
            <div className="md:hidden mb-4">
              <button
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-4 rounded-xl shadow-lg flex items-center justify-center"
                onClick={toggleDates}
              >
                <span className="mr-2 text-xl">📅</span>
                {datesVisible ? "Hide Important Dates" : "Show Important Dates"}
              </button>
            </div>

            {/* Mobile: Important Dates Panel */}
            {datesVisible && (
              <div className="md:hidden bg-white rounded-2xl shadow-xl mb-6 transition-all duration-300">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-4 text-white rounded-t-2xl">
                  <h2 className="text-lg font-bold">Important Dates</h2>
                </div>

                <div className="p-4">
                  <ul className="space-y-3">
                    {importantDates.map((date, index) => (
                      <li
                        key={index}
                        className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
                      >
                        <div className="font-medium text-blue-800">
                          {date.unit}
                        </div>
                        <div className="text-indigo-700">{date.date}</div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-4">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <span className="mr-2">⏰</span> Reminder
                    </h3>
                    <p className="text-sm mb-3">
                      Set reminders for important dates
                    </p>
                    <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-2 rounded-lg font-medium">
                      Set Calendar Reminders
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Main Content Card - Mobile */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white">
                <h1 className="text-lg font-bold text-center">
                  ২০২৪-২৫ শিক্ষাবর্ষে GST গুচ্ছভুক্ত বিশ্ববিদ্যালয়সমূহে
                  প্রাথমিক ভর্তি দ্বিতীয় পর্যায়
                </h1>
              </div>

              <div className="p-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-lg p-4 mb-6 shadow-md">
                  <p className="mb-3 font-medium">
                    দ্বিতীয় পর্যায়ের প্রাথমিক ভর্তি প্রক্রিয়া আগামী
                    ২৯/০৬/২০২৫ তারিখ হতে ০৩/০৭/২০২৫ তারিখের মধ্যে GST
                    ওয়েবসাইটের মাধ্যমে সম্পন্ন হবে।
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex flex-col md:flex-row md:items-start">
                      <span className="font-medium">
                        প্রাথমিক ভর্তি ফি প্রদান:
                      </span>
                      <span>
                        ২৯/০৬/২০২৫ দুপুর ২:০০ টা হতে ০৩/০৭/২০২৫ রাত ১১:৫৯ টা
                        পর্যন্ত
                      </span>
                    </li>
                    <li className="flex flex-col md:flex-row md:items-start">
                      <span className="font-medium">মূল কাগজপত্র জমা:</span>
                      <span>
                        ৩০/০৬/২০২৫ সকাল ১০:০০ টা হতে ০৩/০৭/২০২৫ বিকাল ০৬:০০ টা
                        পর্যন্ত
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-6">
                  <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">
                    প্রাথমিক ভর্তি প্রক্রিয়া সম্পর্কিত গুরুত্বপূর্ণ
                    নির্দেশনাবলী
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        1
                      </span>
                      <span>
                        প্রাথমিক ভর্তি ফি ৫০০০.০০ টাকা নির্ধারিত সময়ের মধ্যে
                        জমা দিতে হবে
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        2
                      </span>
                      <span>
                        প্রাথমিক ভর্তি বাতিল করতে চাইলে নির্ধারিত সময়ে GST-এ
                        আবেদন করতে হবে
                      </span>
                    </li>
                    <li className="flex items-start text-red-600 font-semibold">
                      <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        !
                      </span>
                      <span>
                        Stop All Migration: প্রাথমিক ভর্তি প্রক্রিয়া চলাকালীন
                        কোন ধরণের মাইগ্রেশন হবে না
                      </span>
                    </li>
                    <li className="flex items-start text-red-600 font-semibold">
                      <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        !
                      </span>
                      <span>
                        Stop University Migration: ভর্তিকৃত বিশ্ববিদ্যালয়ের
                        অন্য কোন ইউনিটে মাইগ্রেশন হবে না
                      </span>
                    </li>
                  </ul>

                  <div className="flex flex-col gap-4 mt-6">
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-3 rounded-lg shadow-md flex items-center justify-center">
                      <span className="mr-2">📄</span> Download Admission
                      Guideline
                    </button>
                    <button className="bg-gradient-to-r from-green-600 to-teal-700 text-white px-4 py-3 rounded-lg shadow-md flex items-center justify-center">
                      <span className="mr-2">📚</span> Download Prospectus
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                    <h3 className="font-semibold mb-2">Application Status</h3>
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm">Application Submitted</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <span className="text-sm">Fee Payment Pending</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                      <span className="text-sm">Document Verification</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                    <h3 className="font-semibold mb-2">Important Notice</h3>
                    <p className="text-xs mb-2">
                      All applicants must upload clear scanned copies of
                      documents. Blurry or incomplete documents will lead to
                      application rejection.
                    </p>
                    <p className="text-xs text-red-600 font-medium">
                      Deadline: 03/07/2025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile App Section */}
            <div className="mt-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl p-5 border border-green-200">
              <h3 className="font-semibold mb-3 flex items-center">
                <span className="mr-2">📱</span> Get Mobile App
              </h3>
              <p className="text-sm mb-4">
                Download our mobile app for easy access to admission updates and
                notifications
              </p>
              <div className="flex space-x-3">
                <button className="flex-1 bg-black text-white py-3 rounded-lg flex flex-col items-center justify-center">
                  <span className="text-xl mb-1">🍏</span>
                  <span className="text-xs">App Store</span>
                </button>
                <button className="flex-1 bg-gray-800 text-white py-3 rounded-lg flex flex-col items-center justify-center">
                  <span className="text-xl mb-1">🤖</span>
                  <span className="text-xs">Play Store</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation - Mobile Only */}
      {isMobile && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-t-lg flex justify-around items-center p-2 border-t border-gray-200 z-30">
          <button
            className={`flex flex-col items-center px-4 py-2 rounded-lg ${
              activeTab === "application" ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("application")}
          >
            <span className="text-xl">📝</span>
            <span className="text-xs mt-1">Application</span>
          </button>
          <button
            className={`flex flex-col items-center px-4 py-2 rounded-lg ${
              activeTab === "guideline" ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("guideline")}
          >
            <span className="text-xl">📘</span>
            <span className="text-xs mt-1">Guidelines</span>
          </button>
          <button
            className={`flex flex-col items-center px-4 py-2 rounded-lg ${
              activeTab === "universities" ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("universities")}
          >
            <span className="text-xl">🏛️</span>
            <span className="text-xs mt-1">Universities</span>
          </button>
          <button
            className={`flex flex-col items-center px-4 py-2 rounded-lg ${
              activeTab === "downloads" ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("downloads")}
          >
            <span className="text-xl">📥</span>
            <span className="text-xs mt-1">Downloads</span>
          </button>
        </div>
      )}

      {/* Desktop Footer */}
      <footer className="hidden md:block bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-10 mt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">GST Admission</h3>
              <p className="text-blue-200">
                Official admission portal for GST-affiliated universities in
                Bangladesh
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-200">
                <li className="hover:text-white cursor-pointer">
                  Admission Circular
                </li>
                <li className="hover:text-white cursor-pointer">Seat Plan</li>
                <li className="hover:text-white cursor-pointer">Result</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-2 text-blue-200">
                <li className="hover:text-white cursor-pointer">FAQ</li>
                <li className="hover:text-white cursor-pointer">Help Center</li>
                <li className="hover:text-white cursor-pointer">
                  Admission Policy
                </li>
                <li className="hover:text-white cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Email: info@gstadmission.gov.bd</li>
                <li>Phone: +880 9611-000000</li>
                <li>Address: GST Admission Office, Dhaka</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-6 text-center text-blue-300">
            © 2025 GST Admission Portal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
