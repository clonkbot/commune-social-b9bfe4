import { useState } from 'react';
import type { Post } from '../App';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  index: number;
}

export function PostCard({ post, onLike, index }: PostCardProps) {
  const [isLiking, setIsLiking] = useState(false);

  const handleLike = () => {
    setIsLiking(true);
    onLike(post.id);
    setTimeout(() => setIsLiking(false), 300);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num.toString();
  };

  const getPlaceholderGradient = (type?: string) => {
    switch (type) {
      case 'architecture':
        return 'bg-gradient-to-br from-stone-700 via-stone-500 to-stone-800';
      case 'fashion':
        return 'bg-gradient-to-br from-neutral-900 via-neutral-700 to-neutral-900';
      case 'travel':
        return 'bg-gradient-to-br from-amber-900/80 via-stone-600 to-amber-800/80';
      default:
        return 'bg-gradient-to-br from-gray-700 to-gray-900';
    }
  };

  return (
    <article
      className="post-card relative py-6 md:py-8 border-b border-charcoal/10 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex gap-3 md:gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-charcoal text-cream rounded-full flex items-center justify-center text-xs md:text-sm font-medium">
            {post.avatar}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-baseline gap-2 flex-wrap">
            <h3 className="font-display font-semibold text-sm md:text-base truncate">
              {post.author}
            </h3>
            <span className="text-charcoal/40 text-xs md:text-sm truncate">
              {post.handle}
            </span>
            <span className="text-charcoal/30">·</span>
            <span className="text-charcoal/40 text-xs md:text-sm">
              {post.timestamp}
            </span>
          </div>

          {/* Post content */}
          <p className="mt-2 md:mt-3 text-sm md:text-base leading-relaxed text-charcoal/90">
            {post.content}
          </p>

          {/* Image placeholder */}
          {post.image && (
            <div
              className={`mt-3 md:mt-4 aspect-[16/10] md:aspect-[16/9] rounded-sm overflow-hidden ${getPlaceholderGradient(post.image)}`}
            >
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-4 md:gap-6 mt-4 md:mt-5">
            {/* Like */}
            <button
              onClick={handleLike}
              className={`like-button flex items-center gap-1.5 md:gap-2 text-xs md:text-sm transition-colors ${
                post.liked ? 'text-vermillion' : 'text-charcoal/50 hover:text-vermillion'
              } ${isLiking ? 'animate-pulse-once' : ''}`}
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill={post.liked ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>{formatNumber(post.likes)}</span>
            </button>

            {/* Comment */}
            <button className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-charcoal/50 hover:text-charcoal transition-colors">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>{formatNumber(post.comments)}</span>
            </button>

            {/* Repost */}
            <button className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-charcoal/50 hover:text-charcoal transition-colors">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>{formatNumber(post.reposts)}</span>
            </button>

            {/* Share */}
            <button className="ml-auto text-charcoal/50 hover:text-charcoal transition-colors p-1">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
