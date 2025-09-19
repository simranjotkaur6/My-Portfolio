const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Google',
      period: 'May 2025 - Aug 2025',
      details: [
        'Developed a framework to measure gaming video cluster quality based on semantic similarity',
        'Engineered prompts for LLM to create reliable "golden set" of video similarity scores',
        'Built evaluation methodology using Python and SQL for data-driven insights'
      ],
      icon: 'fab fa-google',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Senior Technology Associate',
      company: 'Morgan Stanley',
      period: 'Aug 2022 - Aug 2024',
      details: [
        'Revamped legacy Fixed Income platform using HTML, CSS, JavaScript, Angular & NGRX',
        'Streamlined user experience for Financial Advisors, improving system performance',
        'Engineered dashboard for financial advisors, increasing order execution speed'
      ],
      icon: 'fas fa-building',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Data Science Intern',
      company: 'American Express',
      period: 'Jan 2022 - Jun 2022',
      details: [
        'Conducted third-party data research, analyzing data from external sources',
        'Revamped data usability by 30% through advanced mapping of 100+ variables',
        'Optimized customer specific key system, reducing processing time by 40%'
      ],
      icon: 'fas fa-credit-card',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline Marker */}
                <div className="absolute left-6 w-4 h-4 bg-white border-4 border-primary-500 rounded-full shadow-lg transform -translate-x-1/2"></div>
                
                {/* Content */}
                <div className="ml-16">
                  <div className={`p-6 hover:shadow-xl transition-all duration-300 rounded-xl border ${
                    exp.company === 'Google' 
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-md hover:shadow-lg' 
                      : exp.company === 'Morgan Stanley' 
                      ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200 shadow-md hover:shadow-lg'
                      : 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 shadow-md hover:shadow-lg'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center text-white text-xl`}>
                          <i className={exp.icon}></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                          <p className="text-lg font-semibold text-primary-600">{exp.company}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3 text-gray-600">
                          <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-6 py-3 rounded-full">
            <i className="fas fa-info-circle"></i>
            <span className="font-medium">Currently accepting new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
