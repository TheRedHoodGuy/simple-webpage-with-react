import { useState } from "react";
import close from "../../assets/images/icon-menu-close.svg";
import Menu from "../../assets/images/icon-menu.svg";

const Sidemenu = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
    document.body.classList.toggle('no-scroll');
  };

  return (
    <>
      <div className="">
        <div
          className={`absolute overflow-y-hidden left-0 top-0 z-15 h-screen w-screen bg-[#000] bg-opacity-75 ${
            isMenu ? `block` : `hidden`
          }`}
        ></div>
        <div className="absolute overflow-y-hidden top-0 pt-7 z-10 right-0 bg-white_c text-right w-60">
          <button onClick={toggleMenu} className="mr-[18px]">
            <img
              className={`w-7 ${isMenu ? `mr-[-2px]` : `mr-0`}`}
              src={isMenu ? close : Menu}
              alt="Menu"
            />
          </button>
          <section
            className={`h-screen pt-20 text-left pl-4  ${
              isMenu ? `block` : `hidden`
            }`}
          >
            {/* <div>
                            <img src={X} alt="Close" />
                        </div> */}
            <nav className="text-md">
              <ul>
                <li className="mb-2">
                  <a className="" href="#" target="_blank">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a className="" href="#" target="_blank">
                    New
                  </a>
                </li>
                <li className="mb-2">
                  <a className="" href="#" target="_blank">
                    Popular
                  </a>
                </li>
                <li className="mb-2">
                  <a className="" href="#" target="_blank">
                    Trending
                  </a>
                </li>
                <li className="mb-2">
                  <a className="" href="#" target="_blank">
                    Categories
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </div>
      <style>{`
          body.no-scroll {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Sidemenu;