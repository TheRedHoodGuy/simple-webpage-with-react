import Navbar from "./Navbar";
import Sidemenu from "./Sidemenu";
import Logo from "../../assets/images/logo.svg";

const Headcomp = () => {
  return (
    <>
      <header className="flex justify-between w-full items-center mt-7 min-[1440px]:mt-[90px]">
        <div>
          <img className="w-[45px]" src={Logo} alt="Logo" />
        </div>
        <div className="hidden lg:block w-1/2">
          <Navbar />
        </div>
        <div className="lg:hidden">
          <Sidemenu />
        </div>
      </header>
    </>
  );
};

export default Headcomp;
