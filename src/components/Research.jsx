const Research = () => {
  const publications = [
    {
      title: 'Trajectory Prediction in Autonomous Driving with Vision Based Deep Neural Networks',
      publisher: 'IEEE',
      abstract: 'Research on autonomous driving trajectory prediction using computer vision and deep learning techniques. This work explores the application of neural networks for predicting vehicle trajectories in autonomous driving scenarios.',
      year: '2024',
      link: 'https://ieeexplore.ieee.org/document/10472791',
      keywords: ['Autonomous Driving', 'Computer Vision', 'Deep Learning', 'Trajectory Prediction']
    }
  ]

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Research Publications</h2>
        
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                    {pub.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <i className="fas fa-building mr-2 text-primary-500"></i>
                      {pub.publisher}
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-calendar mr-2 text-primary-500"></i>
                      {pub.year}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    <i className="fas fa-microscope mr-2"></i>
                    Research
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {pub.abstract}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {pub.keywords.map((keyword, keywordIndex) => (
                  <span 
                    key={keywordIndex} 
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <a 
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                >
                  <i className="fas fa-external-link-alt"></i>
                  <span>View Paper on IEEE</span>
                </a>
                
                <div className="flex items-center space-x-2 text-gray-500">
                  <i className="fas fa-quote-left"></i>
                  <span className="text-sm">Peer-reviewed publication</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Interests */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Research Interests
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <i className="fas fa-brain"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Machine Learning</h4>
              <p className="text-gray-600">
                Deep learning, computer vision, and natural language processing applications
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <i className="fas fa-car"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Autonomous Systems</h4>
              <p className="text-gray-600">
                Self-driving vehicles, robotics, and intelligent transportation systems
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Data Science</h4>
              <p className="text-gray-600">
                Big data analytics, predictive modeling, and statistical analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research
