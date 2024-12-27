const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] h-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <h1 className="text-3xl font-bold">
            <span className="text-white">Port</span>
            <span className="text-accent">folio</span>
          </h1>
          {/* socials */}
          <div className="flex gap-x-5 text-lg">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
              Github
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
              LinkedIn
            </a>
            <a href="mailto:example@email.com" className="hover:text-accent transition-all duration-300">
              Email
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
