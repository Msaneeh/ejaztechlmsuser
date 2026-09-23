import { ArrowRight, Sparkles } from "lucide-react";

const Cta = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-foreground text-background p-8 md:p-14 text-center space-y-6 relative overflow-hidden">

          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-background/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-background/10 blur-3xl" />

          <div className="max-w-2xl mx-auto space-y-5 relative z-10">

            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-background/20 bg-background/10 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Start Your Learning Journey</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Learn, Build & Grow with AI?
            </h2>

            {/* Description */}
            <p className="text-background/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              Explore EJAZTECH.AI programs, develop practical AI skills,
              work on real-world projects, and learn alongside a growing
              community of African innovators.
            </p>

            {/* CTA */}
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