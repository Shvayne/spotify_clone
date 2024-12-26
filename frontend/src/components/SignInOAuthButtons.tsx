import { useSignIn } from "@clerk/clerk-react"
import { Button } from "./ui/button";
const SignInOAuthButtons = () => {
  const {signIn, isLoaded} = useSignIn();

  if(!isLoaded){
    return null
  }

  const signInWithGoogle = async () => {
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/auth-callback",
        redirectUrlComplete: "/auth-callback"
      });
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  return <Button onClick={signInWithGoogle}variant={"secondary"} className="w-full text-white border-zinc-200 h-11">
    Continue with Google
  </Button>;
}

export default SignInOAuthButtons