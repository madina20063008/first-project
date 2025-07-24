
import React, { useState, useEffect } from 'react';

const BlogModal = ({ open, onClose, post }) => {
  if (!open || !post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-y-auto max-h-[60vh] p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl font-bold hover:opacity-70"
        >
          ×
        </button>

        {post.imageUrls?.length > 0 && (
          <img
            src={post.imageUrls[0]}
            alt="Blog"
            className="w-full h-[300px] object-cover rounded-md mb-4"
          />
        )}

        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{post.date}</p>

        <p className="text-[18px] mb-4 whitespace-pre-line">{post.description}</p>
        <p className="text-[16px] leading-relaxed whitespace-pre-line">{post.body}</p>
      </div>
    </div>
  );
};

const NewsCards = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/blog/`)
      .then(res => res.json())
      .then(data => {
        const updatedPosts = data.map(post => ({
          ...post,
          imageUrls: post.images?.map(img => img.image) || [],
        }));
        setBlogPosts(updatedPosts);
      })
      .catch(err => console.error('Error fetching blog posts:', err));
  }, [API_URL]);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const currentPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePrev = () => setCurrentPage(p => (p > 1 ? p - 1 : p));
  const handleNext = () => setCurrentPage(p => (p < totalPages ? p + 1 : p));
  const handleGoTo = page => setCurrentPage(page);

  return (
    <div className="bg-[#F2F2F2] pb-[50px]">
      <div className="container pt-[34px]">
        <div className="who-we-are flex mb-[50px] items-center justify-center lg:justify-start gap-4 text-[#80C4D3] font-medium text-[18px] uppercase">
          <span>•</span>
          <span>Latest News & Events</span>
          <span>•</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[110px] mb-[50px] place-items-center">
          {currentPosts.map(post => (
            <div key={post.id} className="max-w-[300px] max-h-[550px]">
              <img
                src={post.imageUrls?.[0] || '/default-blog-image.jpg'}
                alt="blog"
                className="w-[300px] h-[238px] object-cover"
                onError={(e) => { e.target.src = '/default-blog-image.jpg'; }}
              />
              <p className="text-[16px] sm:text-[20px] mt-[20px] line-clamp-3">{post.description}</p>
              <p className="text-[20px] mt-[20px] font-medium">{post.date}</p>
              <div className="flex justify-between items-center mt-[20px]">
                <button
                  className="text-red-500 font-normal hover:underline text-[16px]"
                  onClick={() => setSelectedPost(post)}
                >
                  Read More &gt;&gt;&gt;
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <div className="flex">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-[#8CC9D5] text-white rounded-l disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ◂ Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-[#8CC9D5] text-white rounded-r disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next ▸
            </button>
          </div>

          <div className="relative flex items-center rounded">
            <span className="px-4 py-2 text-white select-none bg-[#8CC9D5] mr-[2px]">
              Page
            </span>
            <select
              className="px-4 py-2 pr-8 rounded-r bg-[#8CC9D5] text-white focus:outline-none appearance-none"
              value={currentPage}
              onChange={(e) => handleGoTo(Number(e.target.value))}
            >
              {Array.from({ length: totalPages }, (_, i) => (
                <option key={i + 1} value={i + 1} className="bg-[#8CC9D5] text-white">
                  {i + 1}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <BlogModal
          open={!!selectedPost}
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      </div>
    </div>
  );
};

export default NewsCards;
