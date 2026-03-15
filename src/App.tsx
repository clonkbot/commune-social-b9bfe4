import { useState } from 'react';
import { Feed } from './components/Feed';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { NewPostModal } from './components/NewPostModal';
import './styles.css';

export interface Post {
  id: string;
  author: string;
  handle: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  reposts: number;
  liked: boolean;
  avatar: string;
  image?: string;
}

const initialPosts: Post[] = [
  {
    id: '1',
    author: 'Marina Vostok',
    handle: '@marina.v',
    content: 'The intersection of brutalist architecture and soft morning light creates something unexpectedly tender. Shot this at 6am in the old district.',
    timestamp: '2h',
    likes: 847,
    comments: 43,
    reposts: 112,
    liked: false,
    avatar: 'MV',
    image: 'architecture'
  },
  {
    id: '2',
    author: 'Theo Blackwood',
    handle: '@theo.creates',
    content: 'Been thinking about how we curate our digital selves vs. who we actually are. The gap is getting wider, or maybe we\'re just becoming more aware of it.',
    timestamp: '4h',
    likes: 1203,
    comments: 89,
    reposts: 234,
    liked: true,
    avatar: 'TB'
  },
  {
    id: '3',
    author: 'Yuki Tanaka',
    handle: '@yukitanaka',
    content: 'New collection dropping next week. Three years in the making. Every stitch tells a story of patience.',
    timestamp: '6h',
    likes: 2341,
    comments: 156,
    reposts: 445,
    liked: false,
    avatar: 'YT',
    image: 'fashion'
  },
  {
    id: '4',
    author: 'Sol Meridian',
    handle: '@solmeridian',
    content: 'The algorithm knows what you want before you do. Is that convenience or confinement?',
    timestamp: '8h',
    likes: 567,
    comments: 78,
    reposts: 89,
    liked: false,
    avatar: 'SM'
  },
  {
    id: '5',
    author: 'Atlas Chen',
    handle: '@atlas.wanders',
    content: 'Found this hidden courtyard in Lisboa. No tourists, just an elderly man feeding pigeons and the echo of someone practicing violin three floors up.',
    timestamp: '12h',
    likes: 1892,
    comments: 67,
    reposts: 321,
    liked: true,
    avatar: 'AC',
    image: 'travel'
  }
];

function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [showNewPost, setShowNewPost] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleNewPost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      author: 'You',
      handle: '@you',
      content,
      timestamp: 'now',
      likes: 0,
      comments: 0,
      reposts: 0,
      liked: false,
      avatar: 'YU'
    };
    setPosts([newPost, ...posts]);
    setShowNewPost(false);
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal relative overflow-x-hidden">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Diagonal accent line */}
      <div className="fixed top-0 left-0 w-full h-1 bg-vermillion transform origin-left -skew-y-1 z-50" />

      <Header
        onNewPost={() => setShowNewPost(true)}
        onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        mobileMenuOpen={mobileMenuOpen}
      />

      <main className="relative pt-20 md:pt-24 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <Sidebar />
            </aside>

            {/* Mobile Sidebar Overlay */}
            {mobileMenuOpen && (
              <div
                className="fixed inset-0 bg-charcoal/50 z-40 lg:hidden"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div
                  className="absolute left-0 top-0 h-full w-72 bg-cream p-6 pt-24 shadow-2xl"
                  onClick={e => e.stopPropagation()}
                >
                  <Sidebar />
                </div>
              </div>
            )}

            {/* Main Feed */}
            <div className="flex-1 min-w-0">
              <Feed posts={posts} onLike={handleLike} />
            </div>

            {/* Right Column - Desktop */}
            <aside className="hidden xl:block w-72 flex-shrink-0">
              <div className="sticky top-28">
                <div className="border-l-2 border-charcoal/10 pl-6">
                  <h3 className="font-display text-xs uppercase tracking-[0.3em] text-charcoal/50 mb-6">
                    Trending
                  </h3>
                  <div className="space-y-4">
                    {['#DesignSystems', '#DigitalNomad', '#SlowLiving', '#TypeDesign', '#MinimalArt'].map((tag, i) => (
                      <button
                        key={tag}
                        className="block text-sm hover:text-vermillion transition-colors duration-300 text-left"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-charcoal/10">
                    <h3 className="font-display text-xs uppercase tracking-[0.3em] text-charcoal/50 mb-6">
                      Who to follow
                    </h3>
                    <div className="space-y-4">
                      {[
                        { name: 'Vera Linden', handle: '@vera.l' },
                        { name: 'Kai Nomura', handle: '@kai.creates' },
                        { name: 'Elise Moreau', handle: '@elisemoreau' }
                      ].map((user, i) => (
                        <div key={user.handle} className="flex items-center justify-between group">
                          <div>
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-charcoal/50">{user.handle}</p>
                          </div>
                          <button className="text-xs px-3 py-1.5 border border-charcoal/20 hover:border-vermillion hover:text-vermillion transition-all duration-300">
                            Follow
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-cream border-t border-charcoal/10 px-4 py-3 flex justify-around items-center lg:hidden z-30">
        <button className="p-3 hover:text-vermillion transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </button>
        <button className="p-3 hover:text-vermillion transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button
          onClick={() => setShowNewPost(true)}
          className="p-3 bg-vermillion text-cream rounded-full -mt-8 shadow-lg hover:bg-vermillion/90 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <button className="p-3 hover:text-vermillion transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <button className="p-3 hover:text-vermillion transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </nav>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 py-3 text-center hidden lg:block pointer-events-none z-10">
        <p className="text-[10px] text-charcoal/30 tracking-wider">
          Requested by @web-user · Built by @clonkbot
        </p>
      </footer>

      {/* Mobile Footer - Above nav */}
      <div className="lg:hidden fixed bottom-16 left-0 right-0 py-2 text-center pointer-events-none z-10 bg-gradient-to-t from-cream to-transparent">
        <p className="text-[9px] text-charcoal/25 tracking-wider">
          Requested by @web-user · Built by @clonkbot
        </p>
      </div>

      {showNewPost && (
        <NewPostModal
          onClose={() => setShowNewPost(false)}
          onSubmit={handleNewPost}
        />
      )}
    </div>
  );
}

export default App;
