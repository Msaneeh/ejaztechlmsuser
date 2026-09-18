import React from 'react'

const Cta = () => {
  return (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-foreground text-background p-8 md:p-14 text-center space-y-6 relative overflow-hidden">
              <div className="max-w-2xl mx-auto space-y-4">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  Ready to Start Building with Ejaztech?
                </h2>
                <p className="text-background/80 text-base md:text-lg">
                  Join our active community of learners, developers, and hardware engineers today.
                </p>
                <div className="pt-2">
                  <button 
                    type="button"
                    className="bg-background text-foreground hover:bg-background/90 font-medium px-8 py-3.5 rounded-xl transition-all shadow-sm cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Get Started Today</span>
                    <span>➡️</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Cta