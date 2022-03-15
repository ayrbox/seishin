interface NavBarItemProps {
  linkTo: string;
  label: string;
}

const NavBarItem = ({ linkTo, label }: NavBarItemProps) => (
  <li className="px-3">
    <a href={linkTo} className="font-semibold text-slate-300 hover:text-white">
      {label}
    </a>
  </li>
);

type NavigationItem = {
  id: string;
  linkTo: string;
  label: string;
};

const links: NavigationItem[] = [
  { id: "home", linkTo: "#home", label: "Home" },
  { id: "aboutus", linkTo: "#about", label: "About Us" },
  { id: "contact", linkTo: "#contact", label: "Contact" },
];

const NavBar = () => {
  return (
    <nav className="w-screen p-6 bg-transparent transition-all">
      <div className="container mx-auto flex justify-between align-middle">
        <h1 className="text-3xl md:text-2xl font-bold text-slate-300">
          Seishin Education
        </h1>
        <ul className="hidden md:flex justify-between">
          {links.map((item) => (
            <NavBarItem key={item.id} linkTo={item.linkTo} label={item.label} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
