export function Sidebar() {
  return (
    <div className="sticky top-28">
      {/* Profile Summary */}
      <div className="mb-8 animate-slide-in-left">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-charcoal text-cream rounded-full flex items-center justify-center font-medium">
            YU
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold">You</h2>
            <p className="text-sm text-charcoal/50">@you</p>
          </div>
        </div>
        <div className="flex gap-6 text-sm">
          <div>
            <span className="font-semibold">2.4k</span>
            <span className="text-charcoal/50 ml-1">following</span>
          </div>
          <div>
            <span className="font-semibold">12.8k</span>
            <span className="text-charcoal/50 ml-1">followers</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 mb-8">
        {[
          { name: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', active: true },
          { name: 'Explore', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', active: false },
          { name: 'Notifications', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9', active: false },
          { name: 'Messages', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', active: false },
          { name: 'Bookmarks', icon: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z', active: false },
          { name: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', active: false }
        ].map((item, i) => (
          <button
            key={item.name}
            className={`w-full flex items-center gap-3 px-3 py-3 text-sm tracking-wide transition-all duration-300 group animate-slide-in-left ${
              item.active
                ? 'text-charcoal font-medium'
                : 'text-charcoal/60 hover:text-charcoal hover:bg-charcoal/5'
            }`}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={item.active ? 2 : 1.5} d={item.icon} />
            </svg>
            <span>{item.name}</span>
            {item.active && <span className="ml-auto w-1.5 h-1.5 bg-vermillion rounded-full" />}
          </button>
        ))}
      </nav>

      {/* Divider */}
      <div className="border-t border-charcoal/10 pt-6 mb-6" />

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-charcoal/5 animate-fade-in-up stagger-1">
          <p className="font-display text-2xl font-bold">847</p>
          <p className="text-xs text-charcoal/50 tracking-wide uppercase mt-1">Posts</p>
        </div>
        <div className="p-4 bg-charcoal/5 animate-fade-in-up stagger-2">
          <p className="font-display text-2xl font-bold">23k</p>
          <p className="text-xs text-charcoal/50 tracking-wide uppercase mt-1">Likes</p>
        </div>
      </div>
    </div>
  );
}
