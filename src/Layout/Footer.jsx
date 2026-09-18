
const Footer = () => {
  return (
     <footer className="border-t border-border bg-surface pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Top Newsletter & Brand Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-border">
              
              {/* Brand Profile & Bio */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-foreground text-xl tracking-tight">Ejaztech</span>
                </div>
                <p className="text-sm text-muted-text leading-relaxed max-w-sm">
                  Advancing digital literacy, artificial intelligence training, and embedded hardware development across Africa through structured cohorts and mentorship.
                </p>
                <div className="pt-2 space-y-2 text-xs text-muted-text">
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>Kano, Nigeria • Global Remote Programs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✉️</span>
                    <span>contact@ejaztech.com</span>
                  </div>
                </div>
              </div>

              {/* Newsletter Sub Box */}
              <div className="lg:col-span-7 bg-background p-6 rounded-2xl border border-border flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-foreground">Subscribe to Ejaztech Dispatch</h4>
                  <p className="text-xs text-muted-text mt-1">Get monthly updates on upcoming cohorts, open-source AI datasets, and tech workshops.</p>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="bg-surface border border-border px-4 py-2.5 rounded-xl text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-foreground flex-grow"
                    required
                  />
                  <button 
                    type="submit" 
                    className="btn-primary text-xs px-5 py-2.5 rounded-xl inline-flex items-center justify-center gap-2 shrink-0"
                  >
                    <span>Subscribe</span>
                    <span>📤</span>
                  </button>
                </form>
              </div>

            </div>

            {/* Sitemap Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              
              {/* Column 1: Programs */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Programs</h4>
                <ul className="space-y-2 text-xs text-muted-text">
                  <li><a href="#ai" className="hover:text-foreground transition-colors">AI & Machine Learning</a></li>
                  <li><a href="#software" className="hover:text-foreground transition-colors">Software Engineering</a></li>
                  <li><a href="#hardware" className="hover:text-foreground transition-colors">Embedded Systems Lab</a></li>
                  <li><a href="#cohorts" className="hover:text-foreground transition-colors">Upcoming Cohorts</a></li>
                  <li><a href="#certificates" className="hover:text-foreground transition-colors">Verified Certificates</a></li>
                </ul>
              </div>

              {/* Column 2: Company */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Company</h4>
                <ul className="space-y-2 text-xs text-muted-text">
                  <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
                  <li><a href="#mission" className="hover:text-foreground transition-colors">Our Mission</a></li>
                  <li><a href="#research" className="hover:text-foreground transition-colors">African AI Datasets</a></li>
                  <li><a href="#careers" className="hover:text-foreground transition-colors">Careers & Mentors</a></li>
                  <li><a href="#contact" className="hover:text-foreground transition-colors">Contact Us</a></li>
                </ul>
              </div>

              {/* Column 3: Resources */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Resources</h4>
                <ul className="space-y-2 text-xs text-muted-text">
                  <li><a href="#blog" className="hover:text-foreground transition-colors">Tech Blog & Guides</a></li>
                  <li><a href="#community" className="hover:text-foreground transition-colors">Community Forum</a></li>
                  <li><a href="#docs" className="hover:text-foreground transition-colors">Student Handbook</a></li>
                  <li><a href="#faq" className="hover:text-foreground transition-colors">Frequently Asked Questions</a></li>
                  <li><a href="#support" className="hover:text-foreground transition-colors">Help Center</a></li>
                </ul>
              </div>

              {/* Column 4: Social Handles */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Connect With Us</h4>
                <p className="text-xs text-muted-text">Follow our social channels for daily technical tips and announcements.</p>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  
                  {/* GitHub */}
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-background border border-border hover:border-foreground text-foreground transition-colors text-sm" aria-label="GitHub">
                    💻
                  </a>

                  {/* X / Twitter */}
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-background border border-border hover:border-foreground text-foreground transition-colors text-sm" aria-label="X / Twitter">
                    🐦
                  </a>

                  {/* LinkedIn */}
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-background border border-border hover:border-foreground text-foreground transition-colors text-sm" aria-label="LinkedIn">
                    💼
                  </a>

                  {/* YouTube */}
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-background border border-border hover:border-foreground text-foreground transition-colors text-sm" aria-label="YouTube">
                    ▶️
                  </a>

                  {/* Website Link */}
                  <a href="https://ejaztech.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-background border border-border hover:border-foreground text-foreground transition-colors text-sm" aria-label="Website">
                    🔗
                  </a>

                </div>
              </div>

            </div>

            {/* Bottom Bar (Legal & Copyright) */}
            <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-text">
              <p>© {new Date().getFullYear()} Ejaztech Innovation Lab. All rights reserved.</p>
              
              <div className="flex flex-wrap items-center gap-6">
                <a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-foreground transition-colors">Terms of Service</a>
                <a href="#cookies" className="hover:text-foreground transition-colors">Cookie Policy</a>
                <a href="#security" className="hover:text-foreground transition-colors">Security</a>
              </div>
            </div>

          </div>
        </footer>

  )
}

export default Footer