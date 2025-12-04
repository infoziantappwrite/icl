import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Placement Support", path: "/placement" },
    { name: "Internship Programs", path: "/internship" },
    { name: "Centre Of Excellence", path: "/coe" },
    { name: "Training & Upskilling", path: "/training" },
    { name: "CodeChef Training", path: "/codechef" },
    { name: "Edutech Solutions", path: "/edutech" },
  ];
  

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 px-6 py-4 z-50">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Simple Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`hover:text-blue-900 hover:underline transition ${
                isActive(item.path) ? "text-blue-900 font-bold underline" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
