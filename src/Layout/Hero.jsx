const Hero = () => {
  return (
            <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Image / Visual Banner */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-md bg-surface p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
                    alt="Student learning tech skills" 
                    className="w-full h-[400px] sm:h-[480px] object-cover rounded-2xl"
                  />
                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-xl border border-border bg-background/80 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-foreground text-background font-bold flex items-center justify-center text-sm">
                        <span>✨</span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">Empowering African Innovators</p>
                        <p className="text-[11px] text-muted-text">Practical AI & Software Cohorts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Content */}
              <div className="lg:col-span-7 flex flex-col items-start space-y-6">
                
                {/* Tag / Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface text-xs font-medium text-foreground shadow-xs">
                  <span>✨</span>
                  <span>Ejaztech Innovation & Learning Lab</span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
                  Empowering the Next Generation of Tech Leaders
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-muted-text font-normal leading-relaxed max-w-xl">
                  Build future-ready skills in Artificial Intelligence, Software Engineering, and Embedded Systems through structured cohorts and industry mentorship.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2">
                  <button 
                    type="button" 
                    className="w-full sm:w-auto btn-primary text-base px-7 py-3.5 shadow-sm inline-flex items-center justify-center gap-2"
                  >
                    <span>Join Next Cohort</span>
                    <span>➡️</span>
                  </button>
                  
                  <button 
                    type="button" 
                    className="w-full sm:w-auto btn-secondary text-base px-7 py-3.5 inline-flex items-center justify-center"
                  >
                    <span>Explore Programs</span>
                  </button>
                </div>

                {/* Micro Social Proof */}
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-muted-text">
                  <div className="flex items-center gap-1.5">
                    <span>✅</span>
                    <span>Hands-on Projects</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <span>✅</span>
                    <span>Expert Mentorship</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <span>✅</span>
                    <span>Verified Certifications</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
  )
}

export default Hero;