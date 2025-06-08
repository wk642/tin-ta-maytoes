import { GoogleOAuthProvider } from "@react-oauth/google";

//client ID : 132242362761-cp87epcf24oivlvtrt9tb0r70jbgkprd.apps.googleusercontent.com

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function GoogleLanding() { 
  return (
    <>
      {/* renders the google login form */}
      <GoogleLogin 
        // If successfully logged in 
        onSuccess={(loginInfo) =>{
          console.log(loginInfo);
          console.log(jwtDecode(loginInfo.credential));
        }}
        //If not successfully logged in
        onError={() => alert("Login Failed")}
      />
    </>
  )
}