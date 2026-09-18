import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AuthContext from '@/store/AuthContext'; // adjust path to your AuthContext

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    setIsLoading(true);

    // Perform your authentication/API call here if needed
    // Once successful:
    authCtx.login(); // Update context state
    setIsLoading(false);

    // Redirect to the desired page (e.g., dashboard or home)
    navigate('/dashbord'); 
  };

  return (
    <section className="w-full p-8 bg-card text-card-foreground rounded-2xl border border-border shadow-sm">
      <h1 className="text-2xl font-bold text-center mb-6">
        {isLogin ? 'Login' : 'Sign Up'}
      </h1>

      <form onSubmit={submitHandler} className="space-y-5">
        <div className="space-y-1.5">
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-foreground"
          >
            Your Email
          </label>
          <input 
            type="email" 
            id="email" 
            required 
            minLength={5}
            maxLength={50}
            className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            placeholder="name@example.com"
          />
        </div>

        <div className="space-y-1.5">
          <label 
            htmlFor="password" 
            className="block text-sm font-medium text-foreground"
          >
            Your Password
          </label>
          <input 
            type="password" 
            id="password" 
            required 
            minLength={6} 
            maxLength={20} 
            className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            placeholder="••••••••"
          />
        </div>

        <div className="pt-2 space-y-3">
          {!isLoading ? (
            <Button type="submit" className="w-full rounded-xl">
              {isLogin ? 'Login' : 'Create Account'}
            </Button>
          ) : (
            <p className="text-center text-sm text-muted-foreground font-medium py-2">
              Sending request...
            </p>
          )}

          <Button 
            type="button" 
            variant="ghost" 
            onClick={switchAuthModeHandler}
            className="w-full text-xs text-muted-foreground hover:text-foreground font-medium"
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;