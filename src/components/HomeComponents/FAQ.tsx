// "use client"
// import React, { useState } from 'react';
// ;
// import "./FAQ.css";
// import Heading from '@/common/Heading';

// function Accordion() {
//     const [openIndex, setOpenIndex] = useState(null);

//     const toggleAccordion = (index: any) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <div className='container mx-auto px-4 md:px-8 lg:px-16 py-12'>
//             <Heading btnText={"FAQ"} headOne='Frequently' headTwo='asked' headThree='questions' />
//             <div className="accordionCont">
//                 <div className="mx-auto max-w-7xl ">

//                     {/* Accordion Item 1 */}
//                     <div className="accordion-item">
//                         <button
//                             className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-white w-full transition duration-500 hover:text-cyan-600"
//                             onClick={() => toggleAccordion(0)}
//                         >
//                             <h5>What type of projects do you take on?</h5>
//                             <svg
//                                 className={`w-6 h-6 text-white transition duration-500 ${openIndex === 5 ? 'hidden' : 'block'} group-hover:text-cyan-600`}
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M6 12H18M12 18V6"
//                                     stroke="currentColor"
//                                     strokeWidth="1.6"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 />
//                             </svg>
//                             <svg
//                                 className={`w-6 h-6 text-gray-900 transition duration-500 ${openIndex === 0 ? 'block' : 'hidden'} group-hover:text-red-600`}
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M6 12H18"
//                                     stroke="currentColor"
//                                     strokeWidth="1.6"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 />
//                             </svg>
//                         </button>
//                         {openIndex === 0 && (
//                             <div
//                                 className="accordion-content w-full overflow-hidden pr-4 mt-2"
//                                 aria-labelledby="basic-heading-one"
//                             >
//                                 <p className="text-base text-gray-900 font-normal leading-6">
//                                     I can handle many types of projects and offer solutions that fit your needs. Whether you're starting something new or making something better, I can help. We'll start by planning how things should look and work (UX and UI). Then we'll build it, making sure it works well. Your project's success is important, and I'm here to make sure it goes better than expected. 🎯
//                                 </p>
//                             </div>
//                         )}
//                     </div>

//                     {/* Accordion Item 2 */}
//                     <div className="accordion-item">
//                         <button
//                             className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-white w-full transition duration-500 hover:text-cyan-600"
//                             onClick={() => toggleAccordion(1)}
//                         >
//                             <h5>How do you charge for projects?</h5>
//                             <svg
//                                 className={`w-6 h-6 text-white transition duration-500 ${openIndex === 5 ? 'hidden' : 'block'} group-hover:text-cyan-600`}
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M6 12H18M12 18V6"
//                                     stroke="currentColor"
//                                     strokeWidth="1.6"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 />
//                             </svg>
//                             <svg
//                                 className={`w-6 h-6 text-gray-900 transition duration-500 ${openIndex === 1 ? 'block' : 'hidden'} group-hover:text-aqua-600`}
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M6 12H18"
//                                     stroke="currentColor"
//                                     strokeWidth="1.6"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 />
//                             </svg>
//                         </button>
//                         {openIndex === 1 && (
//                             <div
//                                 className="accordion-content w-full overflow-hidden pr-4 mt-2"
//                                 aria-labelledby="basic-heading-two"
//                             >
//                                 <p className="text-base text-gray-900 font-normal leading-6">
//                                     The exact cost of your project depends on the scope and requirements!
//                                 </p>
//                             </div>
//                         )}
//                     </div>

//                     {/* Accordion Item 3 */}
//                     <div className="accordion-item">
//                         <button
//                             className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-white w-full transition duration-500 hover:text-cyan-600"
//                             onClick={() => toggleAccordion(2)}
//                         >
//                             <h5>What is your hourly rate?</h5>
//                             <svg
//                                 className={`w-6 h-6 text-white transition duration-500 ${openIndex === 5 ? 'hidden' : 'block'} group-hover:text-cyan-600`}
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M6 12H18M12 18V6"
//                                     stroke="currentColor"
//                                     strokeWidth="1.6"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 />
//                             </svg>
//                             <svg
//                                 className={`w-6 h-6 text-gray-900 transition duration-500 ${openIndex === 2 ? 'block' : 'hidden'} group-hover:text-red-600`}
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M6 12H18"
//                                     stroke="currentColor"
//                                     strokeWidth="1.6"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 />
//                             </svg>
//                         </button>
//                         {openIndex === 2 && (
//                             <div
//                                 className="accordion-content w-full overflow-hidden pr-4 mt-2"
//                                 aria-labelledby="basic-heading-three"
//                             >
//                                 <p className="text-base text-gray-900 font-normal leading-6">
//                                     For projects that need regular work, I bill by the hour. For one-time projects, I charge upfront to keep things clear and straightforward. My hourly rate is $15.
//                                 </p>
//                             </div>
//                         )}
//                     </div>

//                     {/* Accordion Item 4 */}
//                     <div className="accordion-item">
//                         <button
//                             className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-white w-full transition duration-500 hover:text-cyan-600"
//                             onClick={() => toggleAccordion(3)}
//                         >
//                             <h5>What does your working process look like?</h5>
//                             <svg
//                                 className={`w-6 h-6 text-white transition duration-500 ${openIndex === 5 ? 'hidden' : 'block'} group-hover:text-cyan-600`}
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M6 12H18M12 18V6"
//                                     stroke="currentColor"
//                                     strokeWidth="1.6"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 />
//                             </svg>
//                             <svg
//                                 className={`w-6 h-6 text-gray-900 transition duration-500 ${openIndex === 3 ? 'block' : 'hidden'} group-hover:text-red-600`}
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M6 12H18"
//                                     stroke="currentColor"
//                                     strokeWidth="1.6"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 />
//                             </svg>
//                         </button>
//                         {openIndex === 3 && (
//                             <div
//                                 className="accordion-content w-full overflow-hidden pr-4 mt-2"
//                                 aria-labelledby="basic-heading-four"
//                             >
//                                 <p className="text-base text-gray-900 font-normal leading-6">
//                                     I start by breaking down the project into smaller tasks and setting milestones for each of them. Next, I thoroughly review the entire design and create a style guide to maintain consistency. To manage my work effectively, I utilize tools like Asana or Monday. This organized approach ensures a streamlined and efficient working process.
//                                 </p>
//                             </div>
//                         )}
//                     </div>

//                     {/* Accordion Item 5 */}
//                     <div className="accordion-item">
//                         <button
//                             className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-white w-full transition duration-500 hover:text-cyan-600"
//                             onClick={() => toggleAccordion(4)}
//                         >
//                             <h5>What time-zone do you work in?</h5>
//                             <svg
//                                 className={`w-6 h-6 text-white transition duration-500 ${openIndex === 5 ? 'hidden' : 'block'} group-hover:text-cyan-600`}
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M6 12H18M12 18V6"
//                                     stroke="currentColor"
//                                     strokeWidth="1.6"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 />
//                             </svg>
//                             <svg
//                                 className={`w-6 h-6 text-gray-900 transition duration-500 ${openIndex === 4 ? 'block' : 'hidden'} group-hover:text-red-600`}
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M6 12H18"
//                                     stroke="currentColor"
//                                     strokeWidth="1.6"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 />
//                             </svg>
//                         </button>
//                         {openIndex === 4 && (
//                             <div
//                                 className="accordion-content w-full overflow-hidden pr-4 mt-2"
//                                 aria-labelledby="basic-heading-five"
//                             >
//                                 <p className="text-base text-gray-900 font-normal leading-6">
//                                     I work Pacific Standard Time, but I'm always ready to help out in emergencies, no matter the hour.
//                                 </p>
//                             </div>
//                         )}
//                     </div>

//                     {/* Accordion Item 6 */}
//                     <div className="accordion-item">
//                         <button
//                             className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-white w-full transition duration-500 hover:text-cyan-600"
//                             onClick={() => toggleAccordion(5)}
//                         >
//                             <h5>What is the typical timeline for a project?</h5>
//                             <svg
//                                 className={`w-6 h-6 text-white transition duration-500 ${openIndex === 5 ? 'hidden' : 'block'} group-hover:text-cyan-600`}
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M6 12H18M12 18V6"
//                                     stroke="currentColor"
//                                     strokeWidth="1.6"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 />
//                             </svg>
//                             <svg
//                                 className={`w-6 h-6 text-gray-900 transition duration-500 ${openIndex === 5 ? 'block' : 'hidden'} group-hover:text-red-600`}
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M6 12H18"
//                                     stroke="currentColor"
//                                     strokeWidth="1.6"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 />
//                             </svg>
//                         </button>
//                         {openIndex === 5 && (
//                             <div
//                                 className="accordion-content w-full overflow-hidden pr-4 mt-2"
//                                 aria-labelledby="basic-heading-six"
//                             >
//                                 <p className="text-base text-gray-900 font-normal leading-6">
//                                     Depends on the scope of the project, really. Some projects take less than a week. Some take months. The best way to find out is to get on a quick call with me, and discuss it.
//                                 </p>
//                             </div>
//                         )}
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Accordion;