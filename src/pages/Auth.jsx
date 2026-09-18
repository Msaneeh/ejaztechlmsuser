import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthForm from '@/components/AuthForm';

const Auth = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-8 relative">
      <div className="absolute top-6 left-6 z-10">
        <Button 
          variant="outline" 
          size="sm" 
          asChild 
          className="group rounded-full px-4 border-border/60 bg-card/80 backdrop-blur-md hover:bg-accent hover:border-border transition-all shadow-xs"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground group-hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </Button>
      </div>
      <div className="max-w-md mx-auto pt-16">
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;