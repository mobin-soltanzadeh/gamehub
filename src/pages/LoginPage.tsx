import { useState } from "react";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

function LoginPage() {
  const [status, setStatus] = useState("right");


  return (
    <div className="flex justify-center items-center min-w-full min-h-screen bg-gradient-to-r from-gray-500/50 to-blue-400/70">
      <div className="relative flex justify-center items-center w-[1000px] h-[600px] bg-gray-100 rounded-[50px] overflow-hidden">

        <div className={`left absolute top-0 left-0 flex justify-center items-center w-1/2 h-full ${status==="left" && "left-full -translate-x-full"} transition-all duration-1000`}>
          <>
            {status === "right" &&
              <SignInForm />
            }
            {status === "left" &&
              <SignUpForm />
            }
          </>
        </div>
          
        <div className={`absolute top-0 right-0 flex justify-center items-center w-1/2 h-full ${status==="right" ? "bg-gradient-to-tl from-fuchsia-400 to-rose-500 rounded-l-[130px]" : "bg-gradient-to-tr from-indigo-700 to-blue-400/80 rounded-r-[130px] right-full translate-x-full"} transition-all duration-1000`}>
            
            {
              status === "right" && 
              <div className="flex flex-col justify-center items-center gap-y-6 w-ful px-14 text-gray-100">
                <h1>Hello Friend!</h1>
                <p className="text-center">Register with your personal details to use all of site features</p>
                <button className="px-6 py-2 border-2 border-gray-300 rounded-2xl" onClick={() => setStatus(status==="right" ? "left" : "right")} >SIGN UP</button>
              </div>
            }
            {
              status === "left" && 
              <div className="flex flex-col justify-center items-center gap-y-6 w-ful px-14 text-gray-100">
                <h1>Welcome Back!</h1>
                <p className="text-center">Enter Your personal details to use all of site features</p>
                <button className="px-6 py-2 border-2 border-gray-300 rounded-2xl" onClick={() => setStatus(status==="left" ? "right" : "left")} >SIGN IN</button>
              </div>
            }

        </div>

      </div>
    </div>
  );
}

export default LoginPage;
