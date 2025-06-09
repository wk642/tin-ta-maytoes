import { GoogleLogin } from "@react-oauth/google";

export function GoogleLanding() { 
  return (
    <>
      {/* renders the google login form */}
      <GoogleLogin 
        // If successfully logged in 
        onSuccess={(loginInfo) =>{
          console.log(loginInfo);
        }}
        //If not successfully logged in
        onError={() => alert("Login Failed")}
      />
    </>
  )
}