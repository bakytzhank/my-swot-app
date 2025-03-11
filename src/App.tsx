import React, { useState } from 'react';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('strengths');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const swotData = {
    strengths: [
      { id: 1, text: "Proficiency in various technical skills" },
      { id: 2, text: "Recent certifications in target industry" },
      { id: 3, text: "Strong analytical and problem-solving abilities" },
      { id: 4, text: "Self-motivated and adaptable" },
      { id: 5, text: "Positive references from previous employers" }
    ],
    weaknesses: [
      { id: 1, text: "Limited experience due to career transition" },
      { id: 2, text: "Need improvement in public speaking" },
      { id: 3, text: "Small/no professional network in target industry" },
      { id: 4, text: "Gap in employment history" }
    ],
    opportunities: [
      { id: 1, text: "Growing demand for Data/AI Engineers" },
      { id: 2, text: "Relocation to Austin, a major tech hub" },
      { id: 3, text: "U.S. work authorization as a lawful permanent resident (Green Card holder)" },
      { id: 4, text: "Networking through Kazakh community, ACC, LinkedIn, meetups, and conferences" },
      { id: 5, text: "ACC Resources: Career Services, Big Interview, Jobscan" }
    ],
    threats: [
      { id: 1, text: "Highly competitive job market (many skilled applicants for limited roles)" },
      { id: 2, text: "Possible industry layoffs or hiring slowdowns in tech" },
      { id: 3, text: "Companies preferring U.S. experience or prior industry connections" },
      { id: 4, text: "Limited entry-level job opportunities" }
    ]
  };

  const categories = {
    strengths: { 
      color: "bg-green-500", 
      title: "Strengths", 
      icon: "💪",
      quote: "Everyone has their own talents. It's up to the individual to see what you can actually do.",
      author: "Win Butler",
      background: "bg-gradient-to-br from-green-50 to-green-100",
      image: "https://github.com/bakytzhank/my-swot-app/blob/646b4737bb42367693703e70446ad46e83994e0a/img/strength.jpg"
    },
    weaknesses: { 
      color: "bg-red-500", 
      title: "Weaknesses", 
      icon: "⚠️",
      quote: "The only real mistake is the one from which we learn nothing.",
      author: "Henry Ford",
      background: "bg-gradient-to-br from-red-50 to-red-100",
      image: "https://github.com/bakytzhank/my-swot-app/blob/646b4737bb42367693703e70446ad46e83994e0a/img/weakness.jpg"
    },
    opportunities: { 
      color: "bg-blue-500", 
      title: "Opportunities", 
      icon: "🚀",
      quote: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
      background: "bg-gradient-to-br from-blue-50 to-blue-100",
      image: "https://github.com/bakytzhank/my-swot-app/blob/646b4737bb42367693703e70446ad46e83994e0a/img/opportunity.jpg"
    },
    threats: { 
      color: "bg-yellow-500", 
      title: "Threats", 
      icon: "🛡️",
      quote: "If you know the enemy and know yourself, you need not fear the result of a hundred battles.",
      author: "Sun Tzu",
      background: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      image: "https://github.com/bakytzhank/my-swot-app/blob/646b4737bb42367693703e70446ad46e83994e0a/img/threat.jpg"
    }
  };
  
  // Presentation slides
  const slides = [
    {
      title: "My Job Hunt Strategy",
      content: (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Baky's Strategic Job Hunt Analysis</h2>
          <p className="text-2xl font-bold mb-6">(ITP Final Project)</p>
          <div className="mx-auto w-20 h-1 bg-purple-500 mb-8"></div>
          <p className="text-xl mb-6">A comprehensive SWOT analysis to position myself for success</p>
          <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-5xl">💪</span>
              </div>
              <p className="font-bold text-lg">Strengths</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-4">
                <span className="text-5xl">⚠️</span>
              </div>
              <p className="font-bold text-lg">Weaknesses</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-5xl">🚀</span>
              </div>
              <p className="font-bold text-lg">Opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <span className="text-5xl">🛡️</span>
              </div>
              <p className="font-bold text-lg">Threats</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "SWOT Analysis",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                className={`p-4 rounded-lg text-white font-bold transition-all ${
                  activeCategory === category 
                    ? `${categories[category].color} scale-105 shadow-md` 
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <div className="flex items-center justify-center">
                  <span className="text-2xl mr-2">{categories[category].icon}</span>
                  <span>{categories[category].title}</span>
                </div>
              </button>
            ))}
          </div>
          
          <div className={`rounded-lg shadow-lg overflow-hidden`}>
            <div className={`p-4 ${categories[activeCategory].color} text-white`}>
              <h2 className="text-2xl font-bold flex items-center">
                <span className="text-3xl mr-2">{categories[activeCategory].icon}</span>
                {categories[activeCategory].title}
              </h2>
            </div>
            
            <div className={`p-6 ${categories[activeCategory].background}`}>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                  <ul className="space-y-3">
                    {swotData[activeCategory].map((item) => (
                      <li key={item.id} className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                        <div className={`w-2 h-2 mt-2 mr-2 rounded-full ${categories[activeCategory].color}`}></div>
                        <p>{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="md:w-1/3">
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                    <img
                      src={categories[activeCategory].image}
                      alt={categories[activeCategory].title}
                      className="w-full rounded mb-3"
                    />
                    <div className="p-3 border-l-4 border-gray-300 bg-gray-50 italic">
                      <p className="mb-2">"{categories[activeCategory].quote}"</p>
                      <p className="text-right text-sm font-semibold">— {categories[activeCategory].author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Action Plan",
      content: (
        <div>
          <h2 className="text-3xl font-bold text-center mb-6">Strategic Action Plan</h2>
          <div className="mx-auto w-20 h-1 bg-purple-500 mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 shadow-md">
              <h3 className="text-xl font-bold flex items-center mb-4">
                <span className="text-2xl mr-2">💪</span>
                Leverage Strengths
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-4 h-4 mt-1 mr-2 rounded-full bg-green-200 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <p>Highlight technical skills and certifications in resume and cover letter</p>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 mt-1 mr-2 rounded-full bg-green-200 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <p>Prepare success stories for interviews that demonstrate problem-solving and adaptability</p>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 mt-1 mr-2 rounded-full bg-green-200 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <p>Showcase recommendations from previous employers on LinkedIn to strengthen credibility</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 shadow-md">
              <h3 className="text-xl font-bold flex items-center mb-4">
                <span className="text-2xl mr-2">⚠️</span>
                Address Weaknesses
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-4 h-4 mt-1 mr-2 rounded-full bg-red-200 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                  <p>Gain experience through hands-on projects, practice data modelling, system design and ML case studies</p>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 mt-1 mr-2 rounded-full bg-red-200 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                  <p>Record short videos or join Toastmasters to improve public speaking</p>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 mt-1 mr-2 rounded-full bg-red-200 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                  <p>Frame employment gap highlighting learning, certifications, and independent projects</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 shadow-md">
              <h3 className="text-xl font-bold flex items-center mb-4">
                <span className="text-2xl mr-2">🚀</span>
                Pursue Opportunities
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-4 h-4 mt-1 mr-2 rounded-full bg-blue-200 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <p>Capitalize on Austin’s tech scene – Attend AI/Data networking events</p>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 mt-1 mr-2 rounded-full bg-blue-200 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <p>Engage in ACC events, Kazakh community meetups, LinkedIn outreach</p>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 mt-1 mr-2 rounded-full bg-blue-200 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <p>Utilize ACC career resources (Big Interview, Jobscan) to refine job applications</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 shadow-md">
              <h3 className="text-xl font-bold flex items-center mb-4">
                <span className="text-2xl mr-2">🛡️</span>
                Mitigate Threats
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-4 h-4 mt-1 mr-2 rounded-full bg-yellow-200 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  </div>
                  <p>Develop unique personal brand to stand out (LinkedIn posts, articles, personal blog)</p>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 mt-1 mr-2 rounded-full bg-yellow-200 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  </div>
                  <p>Stay updated on industry trends by following AI/Data newsletters, research papers, and networking with professionals</p>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 mt-1 mr-2 rounded-full bg-yellow-200 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  </div>
                  <p>Expand search to include remote opportunities or hybrid roles</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Timeline",
      content: (
        <div>
          <h2 className="text-3xl font-bold text-center mb-6">Implementation Timeline</h2>
          <div className="mx-auto w-20 h-1 bg-purple-500 mb-8"></div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute h-full w-0.5 bg-gray-300 left-1/2 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 md:text-right">
                  <h3 className="text-lg font-bold text-purple-600">Week 1-2</h3>
                  <p className="text-gray-700">Start Active Outreach</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold shadow-lg z-10">1</div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                    <ul className="space-y-1">
                      <li>• Apply for 25-50 jobs per week</li>
                      <li>• Attend at least one tech meetup or virtual event</li>
                      <li>• Tailor applications for each role</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 md:text-right">
                  <div className="bg-white p-4 rounded-lg shadow-md border-r-4 border-purple-500">
                    <ul className="space-y-1">
                      <li>• Practice system design and ML case studies</li>
                      <li>• Participate in mock interviews (ACC BigInterview)</li>
                      <li>• Enhance portfolio with 1-2 AI/ML projects</li>
                      <li>• Write blog post on LinkedIn and/or Medium</li>
                    </ul>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold shadow-lg z-10">2</div>
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-lg font-bold text-purple-600">Week 3-4</h3>
                  <p className="text-gray-700">Interview Prep and Portfolio Enhancement</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 md:text-right">
                  <h3 className="text-lg font-bold text-purple-600">Week 5-8</h3>
                  <p className="text-gray-700">Interview Rounds and Networking</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold shadow-lg z-10">3</div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                    <ul className="space-y-1">
                      <li>• Continue applying for jobs while tracking responses</li>
                      <li>• Follow up with hiring managers on past applications</li>
                      <li>• Attend at least 2 tech networking events</li>
                      <li>• Refine interview strategies based on feedback</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 md:text-right">
                  <div className="bg-white p-4 rounded-lg shadow-md border-r-4 border-purple-500">
                    <ul className="space-y-1">
                      <li>• Analyze past interviews to improve weak areas</li>
                      <li>• Deepen networking for hidden job opportunities</li>
                      <li>• Continue portfolio updates & content creation</li>
                    </ul>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold shadow-lg z-10">4</div>
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-lg font-bold text-purple-600">Week 9-12</h3>
                  <p className="text-gray-700">Next-Round Refinement & Continuous Improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Thank You",
      content: (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Thank You</h2>
          <div className="mx-auto w-20 h-1 bg-purple-500 mb-8"></div>
          <p className="text-xl mb-8">Questions? Feedback?</p>
          
          <div className="bg-purple-50 p-6 rounded-lg shadow-md inline-block">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white text-2xl">
                🔍
              </div>
            </div>
            <p className="font-bold text-purple-700 text-lg">Ready to find my next opportunity!</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Progress bar */}
        <div className="h-1.5 bg-gray-200">
          <div
            className="h-full bg-purple-500 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
        
        {/* Content */}
        <div className="p-8">
          {slides[currentSlide].content}
        </div>
        
        {/* Navigation */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`px-4 py-2 rounded-lg ${
              currentSlide === 0
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-purple-500 text-white hover:bg-purple-600'
            }`}
          >
            Previous
          </button>
          
          <div className="text-gray-500">
            Slide {currentSlide + 1} of {slides.length}
          </div>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`px-4 py-2 rounded-lg ${
              currentSlide === slides.length - 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-purple-500 text-white hover:bg-purple-600'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;