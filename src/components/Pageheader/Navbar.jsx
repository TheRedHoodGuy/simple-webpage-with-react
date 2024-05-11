const Navbar = () => {
  return (
    <>
      <nav className="flex items-center">
        <ul className="flex items-center justify-between w-full">
          <li>
            <a
              className="text-md hover:text-orange_c text-dark_blue"
              href="#"
              target="_blank"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-md hover:text-orange_c text-dark_blue"
              href="#"
              target="_blank"
            >
              New
            </a>
          </li>
          <li>
            <a
              className="text-md hover:text-orange_c text-dark_blue"
              href="#"
              target="_blank"
            >
              Popular
            </a>
          </li>
          <li>
            <a
              className="text-md hover:text-orange_c text-dark_blue"
              href="#"
              target="_blank"
            >
              Trending
            </a>
          </li>
          <li>
            <a
              className="text-md hover:text-orange_c text-dark_blue"
              href="#"
              target="_blank"
            >
              Categories
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
