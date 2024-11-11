/* eslint-disable react/prop-types */

import { cn } from "../utiles";

const Button = ({ children,  className }) => {
    return (
      <button
        className={cn(
          "font-bold py-[10px] px-[24px] text-[#0A1425] bg-[#FEBF00] opacity-90 transition-all delay-150 hover:opacity-100   text-[16px] ",
          className
        )}
      >
       {children}
      </button>
    );
  };
  
  export default Button;