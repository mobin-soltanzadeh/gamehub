import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function Theme() {
    
  window.addEventListener("load", () => {
    if (localStorage.theme) {
      if (localStorage.theme === "dark") {
        document.documentElement.classList.add("dark");
      } else if (localStorage.theme === "light") {
        document.documentElement.classList.remove("dark");
      }
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  function changetheme() {
    if (localStorage.getItem("theme") === null)
      localStorage.setItem("theme", "light");

    if (localStorage.theme === "light") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (localStorage.theme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <button className={`Theme relative w-7 h-7 sm400:w-8 sm400:h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-500 z-40`} onClick={changetheme}>
      <HiOutlineMoon className="moon absolute left-0 top-0 w-full h-full scale-100 dark:scale-0 dark:rotate-[360deg] hover:-rotate-12 transition-all duration-500" />
      <HiOutlineSun className="sun absolute left-0 top-0 w-full h-full scale-0 dark:scale-100 dark:rotate-[360deg] dark:hover:rotate-0 transition-all duration-500" />
    </button>
  );
}
