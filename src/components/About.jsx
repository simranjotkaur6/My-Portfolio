const About = () => {
  const skills = {
    'Languages & Frameworks': [
      'Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 
      'Angular', 'React', 'Ruby', 'SQL'
    ],
    'AI/ML & Data Science': [
      'PyTorch', 'TensorFlow', 'OpenCV', 'Machine Learning', 
      'Deep Learning', 'Data Analysis'
    ],
    'Tools & Technologies': [
      'Git', 'Docker', 'AWS', 'Jupyter', 'PostgreSQL', 'MongoDB'
    ]
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - About Text & Education */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                I'm a passionate Computer Science graduate student at Texas A&M University with a strong foundation 
                in both theoretical and practical aspects of computing. My journey spans from being ranked among 
                India's Top 25 women coders to interning at tech giants like Google and Morgan Stanley.
              </p>
            </div>

            <div className="education space-y-6 animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
              
              <div className="edu-item bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-gray-900">Texas A&M University</h4>
                  <span className="text-sm text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full">
                    Aug 2024 - May 2026
                  </span>
                </div>
                <p className="text-gray-600">Master of Science in Computer Science • GPA: 4.0/4.0</p>
              </div>
              
              <div className="edu-item bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-gray-900">Thapar Institute of Engineering & Technology</h4>
                  <span className="text-sm text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full">
                    Jul 2018 - Jun 2022
                  </span>
                </div>
                <p className="text-gray-600">Bachelor of Engineering in Computer Engineering • GPA: 9.63/10</p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="skill-category">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">{category}</h4>
                  <div className="skill-tags">
                    {skillList.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-purple-50 rounded-xl border border-primary-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Achievements</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <i className="fas fa-trophy text-primary-500 mr-3"></i>
                  <span>Technodiva: Ranked among Top 25 out of 13,000+ participants (Data Science)</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-medal text-primary-500 mr-3"></i>
                  <span>Merit-based scholarship recipient at TIET for 3 consecutive years</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-star text-primary-500 mr-3"></i>
                  <span>Winner at ELC 2019, TIET, out of 200 teams</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
