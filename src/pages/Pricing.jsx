// // src/sections/Pricing.jsx
// import React from 'react';

// export default function Pricing() {
//   const features = [
//     'Comprehensivve curriculum access',
//     'Live classes and recordings',
//     'Real project portfolio',
//     'Certificate of completion',
//     'Career guidance & support',
//     'Lifetime community access'
//   ];

//   return (
//     <section id="pricing" className="py-12 bg-gradient-to-b from-slate-100 to-white">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
//             <div>
//               <h2 className="text-2xl font-bold">
                
//                 Launch Your Web Development Career </h2>
//               <p className="mt-2 text-gray-600">
//                 Transform from complete beginners to job-ready web developer in 12 weeks. Build real projects, master in-demand
//              skills, and join Nigeria's thriving tech ecosystem.
//                 </p>

//               <div className="mt-6 text-4xl font-extrabold text-indigo-600">₦120,000</div>
//               <p className="mt-1 text-sm text-gray-500">One-time payment • 4-week program</p>

//               <ul className="mt-6 space-y-3">
//                 {features.map((f,i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <CheckIcon />
//                     <span className="text-gray-700">{f}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-6">
//                 <a href="https://selar.com/7p60178068" className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow">Enroll Now — Limited Spots!</a>
//               </div>

//               <p className="mt-3 text-sm text-gray-500">Next cohort starts soon • Only 20 spots available</p>
//             </div>

//             <div className="flex items-center justify-center">
//               <div className="w-full max-w-sm rounded-xl overflow-hidden border p-6">
//                 <h3 className="text-lg font-semibold">Why this program works</h3>
//                 <p className="mt-2 text-gray-600">Project-first curriculum, real deployment, and career support to help you land a role.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function CheckIcon(){ return (<svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>); }
