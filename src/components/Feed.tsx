import type { Post } from '../App';
import { PostCard } from './PostCard';

interface FeedProps {
  posts: Post[];
  onLike: (postId: string) => void;
}

export function Feed({ posts, onLike }: FeedProps) {
  return (
    <div className="space-y-0">
      {/* Feed Header */}
      <div className="mb-6 md:mb-8 animate-fade-in-up">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none">
          Your Feed
        </h1>
        <p className="text-charcoal/50 mt-2 text-sm md:text-base">
          Curated thoughts from your network
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 border-b border-charcoal/10 pb-4 animate-fade-in-up overflow-x-auto no-scrollbar">
        {['For You', 'Following', 'Latest'].map((tab, i) => (
          <button
            key={tab}
            className={`text-xs md:text-sm tracking-wide whitespace-nowrap transition-colors pb-2 -mb-4 border-b-2 ${
              i === 0
                ? 'border-vermillion text-charcoal font-medium'
                : 'border-transparent text-charcoal/50 hover:text-charcoal'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="space-y-1">
        {posts.map((post, index) => (
          <PostCard
            key={post.id}
            post={post}
            onLike={onLike}
            index={index}
          />
        ))}
      </div>

      {/* Load more */}
      <div className="pt-8 pb-4 text-center">
        <button className="text-sm text-charcoal/50 hover:text-vermillion transition-colors tracking-wide">
          Load more...
        </button>
      </div>
    </div>
  );
}
