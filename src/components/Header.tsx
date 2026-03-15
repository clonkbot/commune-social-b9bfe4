interface HeaderProps {
  onNewPost: () => void;
  onMenuToggle: () => void;
  mobileMenuOpen: boolean;
}

export function Header({ onNewPost, onMenuToggle, mobileMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 -ml-2 hover:text-vermillion transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="font-display text-xl md:text-2xl font-bold tracking-tight">
                Commune
              </span>
              <span className="absolute -top-1 -right-3 w-2 h-2 bg-vermillion rounded-full" />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <button className="text-sm tracking-wide hover:text-vermillion transition-colors relative group">
              Feed
              <span className="absolute -bottom-1 left-0 w-full h-px bg-vermillion scale-x-100" />
            </button>
            <button className="text-sm tracking-wide text-charcoal/60 hover:text-vermillion transition-colors relative group">
              Explore
              <span className="absolute -bottom-1 left-0 w-full h-px bg-vermillion scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <button className="text-sm tracking-wide text-charcoal/60 hover:text-vermillion transition-colors relative group">
              Notifications
              <span className="absolute -bottom-1 left-0 w-full h-px bg-vermillion scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <button className="text-sm tracking-wide text-charcoal/60 hover:text-vermillion transition-colors relative group">
              Messages
              <span className="absolute -bottom-1 left-0 w-full h-px bg-vermillion scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Desktop new post button */}
            <button
              onClick={onNewPost}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-charcoal text-cream text-sm tracking-wide hover:bg-vermillion transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Post</span>
            </button>

            {/* Profile */}
            <button className="w-9 h-9 md:w-10 md:h-10 bg-charcoal text-cream rounded-full flex items-center justify-center text-xs font-medium hover:ring-2 hover:ring-vermillion hover:ring-offset-2 hover:ring-offset-cream transition-all duration-300">
              YU
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
