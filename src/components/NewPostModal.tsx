import { useState, useEffect, useRef } from 'react';

interface NewPostModalProps {
  onClose: () => void;
  onSubmit: (content: string) => void;
}

export function NewPostModal({ onClose, onSubmit }: NewPostModalProps) {
  const [content, setContent] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const maxLength = 500;

  useEffect(() => {
    textareaRef.current?.focus();
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSubmit();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 modal-backdrop bg-charcoal/60 animate-fade-in"
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      <div
        className="w-full max-w-lg bg-cream border border-charcoal/10 shadow-2xl animate-fade-in-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-charcoal/10">
          <h2 className="font-display text-lg font-semibold">New Post</h2>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-charcoal/50 hover:text-charcoal transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-4 md:p-6">
          <div className="flex gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-charcoal text-cream rounded-full flex items-center justify-center text-xs md:text-sm font-medium flex-shrink-0">
              YU
            </div>
            <div className="flex-1">
              <textarea
                ref={textareaRef}
                value={content}
                onChange={e => setContent(e.target.value.slice(0, maxLength))}
                placeholder="What's on your mind?"
                className="w-full min-h-[120px] md:min-h-[150px] bg-transparent border-none outline-none resize-none text-sm md:text-base leading-relaxed placeholder:text-charcoal/40"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 md:px-6 py-4 border-t border-charcoal/10">
          <div className="flex items-center gap-3 md:gap-4">
            <button className="p-2 text-charcoal/50 hover:text-charcoal transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
            <button className="p-2 text-charcoal/50 hover:text-charcoal transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <span className={`text-xs ${content.length >= maxLength ? 'text-vermillion' : 'text-charcoal/40'}`}>
              {content.length}/{maxLength}
            </span>
            <button
              onClick={handleSubmit}
              disabled={!content.trim()}
              className={`px-4 md:px-5 py-2 text-sm tracking-wide transition-all duration-300 ${
                content.trim()
                  ? 'bg-charcoal text-cream hover:bg-vermillion'
                  : 'bg-charcoal/20 text-charcoal/40 cursor-not-allowed'
              }`}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
