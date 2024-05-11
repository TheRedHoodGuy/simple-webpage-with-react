import { useState } from "react";
import close from "../../assets/images/icon-menu-close.svg";
import Menu from "../../assets/images/icon-menu.svg";

const Sidemenu = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => setIsMenu(!isMenu);

  return (
    <>
      <div className="">
        <div className="absolute right-[15px] text-right w-40">
          <button onClick={toggleMenu}>
            <img
              className={`w-7 ${isMenu ? `mr-[-2px]` : `mr-0`}`}
              src={isMenu ? close : Menu}
              alt="Menu"
            />
          </button>
          <section
            className={`h-screen bg-white_c ${isMenu ? `block` : `hidden`}`}
          >
            {/* <div>
                            <img src={X} alt="Close" />
                        </div> */}
            <nav className="">
              <ul>
                <li>
                  <a className="text-sm" href="#" target="_blank">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-sm" href="#" target="_blank">
                    New
                  </a>
                </li>
                <li>
                  <a className="text-sm" href="#" target="_blank">
                    Popular
                  </a>
                </li>
                <li>
                  <a className="text-sm" href="#" target="_blank">
                    Trending
                  </a>
                </li>
                <li>
                  <a className="text-sm" href="#" target="_blank">
                    Categories
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </>
  );
};

export default Sidemenu;
