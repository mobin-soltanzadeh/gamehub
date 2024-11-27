import {
  FaGooglePlusG,
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

interface Props{
  iconSize?: number;
}

export default function Social({ iconSize=20 }: Props) {
  return (
    <div>
      <div className="flex gap-x-3">
        <div className="p-2 text-zinc-800 hover:bg-gradient-to-tr from-orange-500 to-rose-700/90 hover:text-gray-200 transition-colors duration-300 border-[1px] border-black/60 hover:border-white/50 rounded-xl cursor-pointer">
          <FaGooglePlusG size={iconSize} />
        </div>
        <div className="p-2 text-zinc-800 hover:bg-blue-600 hover:text-gray-200 transition-colors duration-300 border-[1px] border-black/60 hover:border-white/50 rounded-xl cursor-pointer">
          <FaFacebookF size={iconSize} />
        </div>
        <div className="p-2 text-zinc-800 hover:bg-black hover:text-gray-200 transition-colors duration-300 border-[1px] border-black/60 hover:border-white/50 rounded-xl cursor-pointer">
          <FaGithub size={iconSize} />
        </div>
        <div className="p-2 text-zinc-800 hover:bg-sky-400 hover:text-gray-200 transition-colors duration-300 border-[1px] border-black/60 hover:border-white/50 rounded-xl cursor-pointer">
          <FaLinkedinIn size={iconSize} />
        </div>
      </div>
    </div>
  );
}
