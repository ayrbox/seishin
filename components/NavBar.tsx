interface NavBarItemProps {
  linkTo: string;
  label: string;
}

const NavBarItem = ({ linkTo, label }: NavBarItemProps) => (
  <li className="px-3">
    <a
      href={linkTo}
      className="font-semibold text-slate-900 hover:text-slate-500"
    >
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
    <nav className="w-screen p-6 bg-transparent transition-all z-50">
      <div className="container mx-auto flex justify-between">
        <h1 className="w-36 text-2xl font-bold">Seishin</h1>
        <ul className="flex justify-between">
          {links.map((item) => (
            <NavBarItem key={item.id} linkTo={item.linkTo} label={item.label} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
