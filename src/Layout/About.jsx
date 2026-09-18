
const About = () => {
  return (
        <section className="py-20 border-b border-border bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background text-xs font-semibold text-foreground">
                  <span>🌐</span>
                  <span>About Ejaztech</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                  Bridging the Digital Talent & Intelligence Gap Across Africa
                </h2>
                
                <p className="text-base text-muted-text leading-relaxed">
                  Ejaztech is an emerging technology enterprise dedicated to advancing digital literacy, artificial intelligence training, and capacity building. We combine structured technical curriculum with practical project development to turn ambitious learners into job-ready tech professionals.
                </p>
                
                <p className="text-base text-muted-text leading-relaxed">
                  Through localized AI research, data curation, and immersive training tracks, we empower developers and hardware builders to design high-impact solutions for regional and global markets.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <h4 className="text-2xl font-bold text-foreground">1,000+</h4>
                    <p className="text-xs text-muted-text font-medium mt-1">Learners Impacted</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <h4 className="text-2xl font-bold text-foreground">95%</h4>
                    <p className="text-xs text-muted-text font-medium mt-1">Practical Execution Rate</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-6 rounded-2xl bg-background border border-border space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center text-lg">
                    💻
                  </div>
                  <h3 className="text-base font-semibold text-foreground">AI & Hardware Lab</h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Specialized training in embedded systems, microcontrollers, machine learning models, and practical IoT engineering.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-background border border-border space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center text-lg">
                    👥
                  </div>
                  <h3 className="text-base font-semibold text-foreground">Cohort Mentorship</h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Learn together in structured batches with weekly phase deliverables, direct code reviews, and mentor check-ins.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-background border border-border space-y-3 sm:col-span-2">
                  <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center text-lg">
                    🎯
                  </div>
                  <h3 className="text-base font-semibold text-foreground">Mission-Driven Ecosystem</h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Connecting tech talents directly to startup opportunities, software engineering projects, and research initiatives.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>
  )
}

export default About;