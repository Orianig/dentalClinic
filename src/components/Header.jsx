import React from "react";
import { useSelector } from "react-redux";



const Header = () => {
  const name = useSelector(state => state.user.data.name);
  const lastName = useSelector(state => state.user.data.lastName);
  return (
    <>
     <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
        <span className="text-md">{name + " " + lastName}</span>

     </header>
     </>
  )
};

export default Header;
