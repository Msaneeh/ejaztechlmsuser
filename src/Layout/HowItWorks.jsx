
const HowItWorks = () => {
  return (
        <section className="py-20 border-b border-border bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
                How Your Learning Journey Works
              </h2>
              <p className="text-muted-text text-base">
                Three straightforward steps from enrollment to acquiring industry-recognized technical skills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              
              <div className="space-y-3 p-6 rounded-2xl bg-background border border-border relative">
                <div className="text-3xl font-black text-muted-text/30">01</div>
                <h4 className="text-lg font-semibold text-foreground">Enroll in a Track</h4>
                <p className="text-sm text-muted-text leading-relaxed">
                  Choose your learning path in software engineering, AI, or embedded hardware, and join an upcoming cohort.
                </p>
              </div>

              <div className="space-y-3 p-6 rounded-2xl bg-background border border-border relative">
                <div className="text-3xl font-black text-muted-text/30">02</div>
                <h4 className="text-lg font-semibold text-foreground">Learn & Build Tasks</h4>
                <p className="text-sm text-muted-text leading-relaxed">
                  Access weekly modules, participate in discussions, build real hands-on projects, and get instructor guidance.
                </p>
              </div>

              <div className="space-y-3 p-6 rounded-2xl bg-background border border-border relative">
                <div className="text-3xl font-black text-muted-text/30">03</div>
                <h4 className="text-lg font-semibold text-foreground">Earn Certification</h4>
                <p className="text-sm text-muted-text leading-relaxed">
                  Complete all cohort deliverables and receive a verified Ejaztech completion credential to showcase your skills.
                </p>
              </div>

            </div>

          </div>
        </section>
  )
}

export default HowItWorks