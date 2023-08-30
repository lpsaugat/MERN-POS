const NavLink = ({ path, activePage, setActivePage, children }) => {
    const isActive = path === activePage;
  
    return (
      <a
        href={path}
        className={`text-white hover:underline ${isActive ? 'bg-gray-600' : ''}`}
        onClick={() => setActivePage(path)}
      >
        {children}
      </a>
    );
  };