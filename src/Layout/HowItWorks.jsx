const HowItWorks = () => {

  const LearningSteps = [
    {
      id: 1,
      step: "01",
      title: "Choose a Program",
      desc: "Explore available learning programs and mentorshipopportunities, then choose the one that matches your learning goals."
    },
    {
      id: 2,
      step: "02",
      title: "Learn & Practice",
      desc: "Work through structured lessons, practical exercises, hands-on labs, and learning activities designed to build your understanding step by step."
    },
    {
      id: 3,
      step: "03",
      title: "Build & Complete",
      desc: "Apply your knowledge through projects and practical challenges, collaborate with other learners, and work toward completing your program."
    },
  ];
  
  return (
    <section className="py-20 border-b border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

       
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background text-xs font-semibold text-foreground">
            Your Learning Journey
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            From Learning to Building
          </h2>

          <p className="text-muted-text text-base leading-relaxed">
            Follow a practical learning journey designed to help you
            understand AI concepts, apply what you learn, and build
            real-world projects.
          </p>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

            {LearningSteps.map((steps) => (
            <div key={steps.id} className="space-y-4 p-6 rounded-2xl bg-background border border-border relative">
            <div className="text-3xl font-black text-muted-text/30">
              {steps.step}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground">
                {steps.title}
              </h4>
              <p className="mt-2 text-sm text-muted-text leading-relaxed">
                {steps.desc}
              </p>
            </div>
            </div>
            ))}
        
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;