import { BookOpen, Users, Code2, Globe2 } from "lucide-react";

const LearningFeature = () => {
  return (
    <section className="py-20 border-b border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background text-xs font-semibold text-foreground">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Learning Experience</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            More Than Courses.{" "}
            <span className="text-muted-text">
              A Practical Learning Experience.
            </span>
          </h2>

          <p className="mt-5 text-base text-muted-text leading-relaxed">
            Learn through structured lessons, hands-on practice, mentorship,
            and projects that help you move from understanding concepts to
            actually building with AI.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Structured Learning */}
          <div className="p-6 rounded-2xl bg-background border border-border space-y-4">
            <div className="h-11 w-11 rounded-xl bg-surface border border-border flex items-center justify-center">
              <BookOpen className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground">
                Structured Learning
              </h3>

              <p className="mt-2 text-xs text-muted-text leading-relaxed">
                Follow organized learning paths that take you from
                foundational concepts to practical AI development.
              </p>
            </div>
          </div>

          {/* Hands-on Practice */}
          <div className="p-6 rounded-2xl bg-background border border-border space-y-4">
            <div className="h-11 w-11 rounded-xl bg-surface border border-border flex items-center justify-center">
              <Code2 className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground">
                Hands-on Projects
              </h3>

              <p className="mt-2 text-xs text-muted-text leading-relaxed">
                Apply what you learn through practical labs, exercises,
                and real-world AI projects instead of theory alone.
              </p>
            </div>
          </div>

          {/* Mentorship */}
          <div className="p-6 rounded-2xl bg-background border border-border space-y-4">
            <div className="h-11 w-11 rounded-xl bg-surface border border-border flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground">
                Mentor Support
              </h3>

              <p className="mt-2 text-xs text-muted-text leading-relaxed">
                Learn with guidance from mentors through cohort activities,
                project support, feedback, and collaborative learning.
              </p>
            </div>
          </div>

          {/* African Context */}
          <div className="p-6 rounded-2xl bg-background border border-border space-y-4">
            <div className="h-11 w-11 rounded-xl bg-surface border border-border flex items-center justify-center">
              <Globe2 className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground">
                African Context
              </h3>

              <p className="mt-2 text-xs text-muted-text leading-relaxed">
                Explore AI applications, datasets, and challenges connected
                to real problems across African communities.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LearningFeature;