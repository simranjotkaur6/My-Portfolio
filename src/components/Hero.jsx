import { useEffect, useRef } from 'react'

const Hero = () => {
  const typedRef = useRef(null)

  useEffect(() => {
    const words = [
      'Computer Science Student',
      'Machine Learning Engineer',
      'Full-Stack Developer',
      'Data Scientist',
      'SWE Intern at Google',
      'AI/ML Enthusiast'
    ]

    let currentIndex = 0
    let currentWord = ''
    let isDeleting = false
    let typeSpeed = 100

    const type = () => {
      const word = words[currentIndex]
      
      if (isDeleting) {
        currentWord = word.substring(0, currentWord.length - 1)
        typeSpeed = 50
      } else {
        currentWord = word.substring(0, currentWord.length + 1)
        typeSpeed = 100
      }

      if (typedRef.current) {
        typedRef.current.textContent = currentWord
      }

      if (!isDeleting && currentWord === word) {
        typeSpeed = 2000
        isDeleting = true
      } else if (isDeleting && currentWord === '') {
        isDeleting = false
        currentIndex = (currentIndex + 1) % words.length
        typeSpeed = 500
      }

      setTimeout(type, typeSpeed)
    }

    type()

    return () => {
      // Cleanup if needed
    }
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="text-gradient">Simran Jot Kaur</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-6">
              I'm a{' '}
              <span 
                ref={typedRef}
                className="text-primary-600 font-mono min-h-[2.5rem] inline-block"
              >
                Computer Science Student
              </span>
              <span className="animate-pulse">|</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Master's student in Computer Science at Texas A&M University with expertise in 
              Machine Learning, Full-Stack Development, and Data Science. Currently working as a Research Assistant and building AI Agents in my free time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn btn-primary"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn btn-secondary"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Right Content - Tech Grid */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="tech-grid">
              <div className="tech-item" title="Python">
                <i className="fab fa-python"></i>
              </div>
              <div className="tech-item" title="React">
                <i className="fab fa-react"></i>
              </div>
              <div className="tech-item" title="Angular">
                <i className="fab fa-angular"></i>
              </div>
              <div className="tech-item" title="Machine Learning">
                <i className="fas fa-brain"></i>
              </div>
              <div className="tech-item" title="Data Science">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="tech-item" title="Cloud Computing">
                <i className="fas fa-cloud"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
