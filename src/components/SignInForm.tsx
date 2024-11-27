import { useState } from "react";
import { useForm } from "react-hook-form";
import Social from "./Social";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface DataForm {
  email: string;
  password: string;
}

export default function SignInForm() {
  const navigate = useNavigate()
  const { register, handleSubmit, reset, formState: { errors } } = useForm<DataForm>();
  const [passwordUnlock, setUnlock] = useState(true)

  return (
    <form className="flex flex-col justify-center items-center gap-y-6 w-full px-14 font-semibold" onSubmit={handleSubmit(() => {
      reset();
      navigate("/gamehub/")
    })}>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <h1>Sign In</h1>
        <Social />
      </div>

      <div className="flex flex-col justify-center items-center gap-y-2 w-full px-14">

        <span>or use your email password</span>
        <div className="flex flex-col w-full">
          <input spellCheck={false} type="email" className="w-full px-4 py-2 text-base text-zinc-700 bg-gray-200 outline-none rounded-xl" placeholder="Email" {...register("email", { required: {value: true, message: "Email is required"}, minLength: {value: 10, message: "Email must contain 10-char at least"}, maxLength: {value: 40, message: "Email must contain 40-char at last"} })} />
          {errors.email && <span className="text-rose-400 text-sm pl-1">{errors.email.message}</span>}
        </div>

        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center w-full px-4 py-2 text-base text-zinc-700 bg-gray-200 rounded-xl">
            <input spellCheck={false} type={passwordUnlock ? "password" : "text"} className="w-full bg-transparent outline-none" placeholder="Password" {...register("password", { required: {value: true, message: "Password is required"}, minLength: {value: 8, message: "Password must contain 8-char at least"}, maxLength: {value: 20, message: "Password must contain 20-char at last"} })} />
            {passwordUnlock ? <FaRegEye size={"20px"} onClick={() => setUnlock(!passwordUnlock)} /> : <FaRegEyeSlash size={"20px"} onClick={() => setUnlock(!passwordUnlock)} />}
          </div>
          {errors.password && <span className="text-rose-400 text-sm pl-1">{errors.password.message}</span>}
        </div>

      </div>
      
      <div className="flex flex-col justify-center items-center gap-y-1 w-full px-14">
        <button>forget your password?</button>
        <button className="w-full py-2 bg-gradient-to-tr from-fuchsia-400/80 to-rose-500/80 text-gray-100 rounded-xl hover:bg-black hover:text-gray-200 transition-colors duration-300">
          SIGN IN
        </button>
      </div>
    </form>
  );
}
