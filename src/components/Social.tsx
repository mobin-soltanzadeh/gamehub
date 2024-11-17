import {
  FaGooglePlusG,
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Social() {
  return (
    <div>
      <div className="flex gap-x-3">
        <div className="p-2 border-[1px] border-black/60 rounded-xl cursor-pointer">
          <FaGooglePlusG size={"20px"} />
        </div>
        <div className="p-2 border-[1px] border-black/60 rounded-xl cursor-pointer">
          <FaFacebookF size={"20px"} />
        </div>
        <div className="p-2 border-[1px] border-black/60 rounded-xl cursor-pointer">
          <FaGithub size={"20px"} />
        </div>
        <div className="p-2 border-[1px] border-black/60 rounded-xl cursor-pointer">
          <FaLinkedinIn size={"20px"} />
        </div>
      </div>
    </div>
  );
}
