import { MailBadge, MapPin, MailPen, Play, Cat, Link } from "lucide-react";


const Footer = () => {

  const currentYear = new Date().getFullYear(); 
  return (
    <footer className="border-t border-border bg-surface pt-12 sm:pt-16 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-border">

          {/* Brand Profile */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-foreground text-xl tracking-tight">
                EJAZTECH.AI
              </span>
            </div>

            <p className="text-sm text-muted-text leading-relaxed max-w-sm">
              Practical AI learning, mentorship, and hands-on projects
              helping learners build the skills to create with artificial
              intelligence.
            </p>

            <div className="pt-1 space-y-2 text-xs text-muted-text">
              <div className="flex items-start gap-2">
                <span className="shrink-0"><MapPin /></span>
                <span>Kano, Nigeria · Global Remote Programs</span>
              </div>

              <div className="flex items-start gap-2">
                <span className="shrink-0"><MailPen /></span>
                <a
                  href="mailto:business@ejaztech.ai"
                  className="hover:text-foreground transition-colors break-all"
                >
                  business@ejaztech.ai
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-7 bg-background p-5 sm:p-6 rounded-2xl border border-border">
            <div className="space-y-1 mb-4">
              <h4 className="text-sm font-bold text-foreground">
                Stay in the Loop
              </h4>

              <p className="text-xs text-muted-text leading-relaxed">
                Get updates about upcoming cohorts, learning opportunities,
                AI projects, and workshops.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full min-w-0 bg-surface border border-border px-4 py-3 rounded-xl text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                required
              />

              <button
                type="submit"
                className="w-full sm:w-auto btn-primary text-xs px-5 py-3 rounded-xl inline-flex items-center justify-center gap-2 shrink-0"
              >
                <span>Subscribe</span>
                <span><MailBadge /></span>
              </button>
            </form>
          </div>

        </div>

        {/* Sitemap */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 py-10 sm:py-12">

          {/* Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">
              Programs
            </h4>

            <ul className="space-y-2.5 text-xs text-muted-text">
              <li>
                <a href="#programs" className="hover:text-foreground transition-colors">
                  AI & Machine Learning
                </a>
              </li>

              <li>
                <a href="#cohorts" className="hover:text-foreground transition-colors">
                  AI Mentorship
                </a>
              </li>

              <li>
                <a href="#labs" className="hover:text-foreground transition-colors">
                  Hands-on Labs
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  AI Projects
                </a>
              </li>

              <li>
                <a href="#cohorts" className="hover:text-foreground transition-colors">
                  Upcoming Cohorts
                </a>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">
              Platform
            </h4>

            <ul className="space-y-2.5 text-xs text-muted-text">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>

              <li>
                <a href="#how-it-works" className="hover:text-foreground transition-colors">
                  How It Works
                </a>
              </li>

              <li>
                <a href="#mentorship" className="hover:text-foreground transition-colors">
                  Mentorship
                </a>
              </li>

              <li>
                <a href="#community" className="hover:text-foreground transition-colors">
                  Community
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">
              Resources
            </h4>

            <ul className="space-y-2.5 text-xs text-muted-text">
              <li>
                <a href="#resources" className="hover:text-foreground transition-colors">
                  Learning Resources
                </a>
              </li>

              <li>
                <a href="#datasets" className="hover:text-foreground transition-colors">
                  Open Datasets
                </a>
              </li>

              <li>
                <a href="#research" className="hover:text-foreground transition-colors">
                  AI Research
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-foreground transition-colors">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#support" className="hover:text-foreground transition-colors">
                  Help & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">
              Connect
            </h4>

            <p className="text-xs text-muted-text leading-relaxed">
              Follow EJAZTECH.AI for learning opportunities, project updates,
              and AI resources.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">

              <a
                href="https://github.com/EJAZTECH-AI"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-background border border-border hover:border-foreground text-foreground transition-colors flex items-center justify-center"
                aria-label="GitHub"
              >
                <Cat />
              </a>

              <a
                href="https://www.linkedin.com/company/ejaztech-ai/"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-background border border-border hover:border-foreground text-foreground transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                💼
              </a>

              <a
                href="https://www.youtube.com/@Ejaztech.AI-TV"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-background border border-border hover:border-foreground text-foreground transition-colors flex items-center justify-center"
                aria-label="YouTube"
              >
                <Play />
              </a>

              <a
                href="https://ejaztech.com"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-background border border-border hover:border-foreground text-foreground transition-colors flex items-center justify-center"
                aria-label="EJAZTECH.AI Website"
              >
                <Link />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row items-center md:items-center justify-between gap-5 text-xs text-muted-text">

          <p className="text-center md:text-left">
            © {currentYear} EJAZTECH.AI. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a
              href="#privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>

            <a
              href="#cookies"
              className="hover:text-foreground transition-colors"
            >
              Cookie Policy
            </a>

            <a
              href="#security"
              className="hover:text-foreground transition-colors"
            >
              Security
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;