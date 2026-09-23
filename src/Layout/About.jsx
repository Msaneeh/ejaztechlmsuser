import { Globe, Laptop, UserGroup, Goal } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 border-b border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* About Content */}
          <div className="lg:col-span-6 space-y-6">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background text-xs font-semibold text-foreground">
              <Globe className="h-3.5 w-3.5" />
              <span>About the Learning Platform</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              Learn the Skills to Build with AI
            </h2>

            <p className="text-base text-muted-text leading-relaxed">
              The EJAZTECH.AI Learning Platform provides structured,
              practical learning experiences for students, developers,
              researchers, and aspiring AI practitioners across Africa.
            </p>

            <p className="text-base text-muted-text leading-relaxed">
              Instead of learning through theory alone, learners work
              through hands-on labs, real-world projects, mentorship,
              and collaborative challenges designed to turn knowledge
              into practical skills.
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-border bg-background">
                <h4 className="text-2xl font-bold text-foreground">
                  5,000+
                </h4>
                <p className="text-xs text-muted-text font-medium mt-1">
                  Individuals Impacted
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border bg-background">
                <h4 className="text-2xl font-bold text-foreground">
                  4
                </h4>
                <p className="text-xs text-muted-text font-medium mt-1">
                  Mentorship Cohorts
                </p>
              </div>
            </div>
          </div>

          {/* Learning Features */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Practical Learning */}
            <div className="p-6 rounded-2xl bg-background border border-border space-y-3">
              <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center">
                <Laptop className="h-5 w-5" />
              </div>

              <h3 className="text-base font-semibold text-foreground">
                Learn by Building
              </h3>

              <p className="text-xs text-muted-text leading-relaxed">
                Move beyond theory with hands-on labs, practical
                exercises, and real-world AI projects that reinforce
                what you learn.
              </p>
            </div>

            {/* Mentorship */}
            <div className="p-6 rounded-2xl bg-background border border-border space-y-3">
              <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center">
                <UserGroup className="h-5 w-5" />
              </div>

              <h3 className="text-base font-semibold text-foreground">
                Cohort-Based Mentorship
              </h3>

              <p className="text-xs text-muted-text leading-relaxed">
                Learn alongside other aspiring AI practitioners through
                structured cohorts, team activities, mentorship, and
                guided project development.
              </p>
            </div>

            {/* African Context */}
            <div className="p-6 rounded-2xl bg-background border border-border space-y-3 sm:col-span-2">
              <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center">
                <Goal className="h-5 w-5" />
              </div>

              <h3 className="text-base font-semibold text-foreground">
                AI for African Contexts
              </h3>

              <p className="text-xs text-muted-text leading-relaxed">
                Explore AI through problems, datasets, and projects
                relevant to African communities — from computer vision
                and natural language processing to agriculture and
                other real-world applications.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;