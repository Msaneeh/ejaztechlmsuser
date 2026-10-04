import { ArrowRight } from "lucide-react";

const Cta = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-foreground text-background p-8 md:p-14 text-center space-y-6 relative overflow-hidden">

          
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-background/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-background/10 blur-3xl" />

          <div className="max-w-2xl mx-auto space-y-5 relative z-10">

            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-background/20 bg-background/10 text-xs font-medium">
              
              <span>Start Your Learning Journey</span>
            </div>

            
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Learn, Build & Grow with AI?
            </h2>

            
            <p className="text-background/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              Explore EJAZTECH.AI programs, develop practical AI skills,
              work on real-world projects, and learn alongside a growing
              community of African innovators.
            </p>

            
            <div className="pt-2">
              <button
                type="button"
                className="bg-background text-foreground hover:bg-background/90 font-medium px-8 py-3.5 rounded-xl transition-all shadow-sm cursor-pointer inline-flex items-center gap-2"
              >
                <span>Explore Programs</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;