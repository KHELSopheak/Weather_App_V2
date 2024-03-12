import { SiDarkreader } from "react-icons/si";
import { TbSunHigh } from "react-icons/tb";
import { useHomeLayoutContext } from "../../Pages/HomePage";

const DarkMode = () => {
  const { isDarkTheme, toggleDarkTheme } = useHomeLayoutContext();

  const handleToggleDarkMode = () => {
    toggleDarkTheme(isDarkTheme);
  };
  return (
    <button
      className="items-center p-3 text-sky-400 rounded-full bg-slate-50 cursor-pointer isDarkTheme:text-white isDarkTheme:bg-black"
      onClick={handleToggleDarkMode}
    >
      {isDarkTheme ? <TbSunHigh /> : <SiDarkreader />}
    </button>
  );
};

export default DarkMode;
