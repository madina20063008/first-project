import React from 'react';

const NewsModal = ({ open, onClose, post }) => {
  if (!open || !post) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/60"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-lg overflow-hidden shadow-xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 text-2xl leading-none hover:opacity-70"
        >
          ×
        </button>

        <img
          src={post.img}
          alt={post.title}
          className="w-full max-h-[400px] object-cover"
        />

        <div className="p-6">
          {post.type && (
            <div className="text-xs tracking-wide uppercase font-medium text-[#80C4D3] mb-2">
              {post.type}
            </div>
          )}
          <h2 className="text-xl font-bold mb-4">{post.title}</h2>
          <p className="text-[16px] leading-relaxed whitespace-pre-line">
            {post.body}
          </p>
        </div>
      </div>

      <span
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />
    </div>
  );
};

export default NewsModal;
