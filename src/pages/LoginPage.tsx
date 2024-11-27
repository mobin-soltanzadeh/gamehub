import { useState } from "react";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import Social from "../components/Social";

import Image from "../assets/pink22.jpg";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate()
  const [status, setStatus] = useState("right");
  const [passLock, setLock] = useState<boolean>(false);


  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/gamehub/")
    
  };

  return (
      <div className="flex justify-center items-center min-w-full min-h-screen bg-gradient-to-r from-gray-400/50 to-blue-400/90">
        {/* big screen login page */}
        <div className="relative hidden lg:flex justify-center items-center w-[1000px] h-[600px] bg-gray-100 rounded-[50px] overflow-hidden">

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
                  <button className="px-6 py-2 border-2 border-gray-300 rounded-2xl hover:bg-gray-300 hover:text-zinc-800 hover:font-semibold hover:scale-110 transition-all duration-300" onClick={() => setStatus(status==="right" ? "left" : "right")} >SIGN UP</button>
                </div>
              }
              {
                status === "left" && 
                <div className="flex flex-col justify-center items-center gap-y-6 w-ful px-14 text-gray-100">
                  <h1>Welcome Back!</h1>
                  <p className="text-center">Enter Your personal details to use all of site features</p>
                  <button className="px-6 py-2 border-2 border-gray-300 rounded-2xl hover:bg-gray-300 hover:text-zinc-800 hover:font-semibold hover:scale-110 transition-all duration-300" onClick={() => setStatus(status==="left" ? "right" : "left")} >SIGN IN</button>
                </div>
              }

          </div>

        </div>

        {/* mobile login page */}
          <img src={Image} alt="" className="absolute lg:hidden top-0 left-0 w-screen h-screen object-cover z-10" />
          <div className="absolute lg:hidden top-0 left-0 w-screen h-screen z-20 backdrop-blur-[5px]" />
          <form onSubmit={submitHandler} className="lg:hidden flex flex-col justify-center items-center gap-y-5 text-zinc-800 w-full sm720:w-4/5 max-w-[400px] p-10 mx-8 sm400:mx-14 bg-white/20 border border-white backdrop-blur-xl rounded-2xl z-30">
              
              <h1 className="text-3xl sssm:text-4xl">Login</h1>
              <Social iconSize={15} />

              <div className="flex flex-col justify-center items-center gap-y-3 w-full">

                <p className="m-0 text-xs sssm:text-base sm:text-xl">or use your email password</p>
                <input spellCheck={false} type="email" className="text-zinc-800 placeholder:text-zinc-800 text-sm w-full px-2 py-1 bg-transparent border border-white outline-none rounded-md" placeholder="Email"/>
                
                <div className="flex justify-between items-center w-full border border-white rounded-md px-2 py-1">
                  <input spellCheck={false} type={passLock ? "password" : "text"} className="text-zinc-800 placeholder:text-zinc-800 text-sm w-full bg-transparent outline-none rounded-md" placeholder="Password"/>
                  {passLock ? <FaRegEye size={"20px"} onClick={() => setLock(!passLock)} /> : <FaRegEyeSlash size={"20px"} onClick={() => setLock(!passLock)} />}
                </div>

                <button type="submit" className="text-sm w-full bg-gray-100 px-4 py-1 rounded-md">Login</button>
              </div>

          </form>
      </div>
  );
}

export default LoginPage;
