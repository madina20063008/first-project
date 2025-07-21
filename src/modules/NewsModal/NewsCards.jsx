
import React, { useState } from 'react';
import Boy from '../../assets/images/boy.png';
import { Message } from '../../assets/icons/icons';
import Playing from '../../assets/images/playing.png';
import Children from '../../assets/images/children.png';
import Sun from '../../assets/images/sun.png';
import Rainbow from '../../assets/images/rainbow.png';
import Friends from '../../assets/images/friends.png';
import Girl from '../../assets/images/girl.png';
import Colors from '../../assets/images/colors.png';
import Children2 from '../../assets/images/children2.png';

const blogPosts = [
  {
    id: 1,
    img: Boy,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    date: 'September 10, 2021 by Admin',
    comments: 10,
  },
  {
    id: 2,
    img: Children,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    date: 'September 10, 2021 by Admin',
    comments: 31,
  },
  {
    id: 3,
    img: Playing,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    date: 'September 10, 2021 by Admin',
    comments: 10,
  },
  {
    id: 4,
    img: Sun,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    date: 'September 10, 2021 by Admin',
    comments: 10,
  },
  {
    id: 5,
    img: Rainbow,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    date: 'September 10, 2021 by Admin',
    comments: 10,
  },
  {
    id: 6,
    img: Friends,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    date: 'September 10, 2021 by Admin',
    comments: 31,
  },
  {
    id: 7,
    img: Girl,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    date: 'September 10, 2021 by Admin',
    comments: 10,
  },
  {
    id: 8,
    img: Colors,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    date: 'September 10, 2021 by Admin',
    comments: 10,
  },
  {
    id: 9,
    img: Children2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    date: 'September 10, 2021 by Admin',
    comments: 10,
  },
];

const BlogModal = ({ open, onClose, post }) => {
  if (!open || !post) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl font-bold hover:opacity-70"
        >
          ×
        </button>
        <img
          src={post.img}
          alt="Blog"
          className="w-full h-[250px] object-cover rounded-md mb-4 mt-4"
        />
        <p className="text-[18px] mb-4">{post.text}</p>
        <p className="text-[16px] font-medium mb-2">{post.date}</p>
        <div className="flex gap-[10px] items-center">
          <Message />
          <p className="text-[20px] font-bold">{post.comments}</p>
        </div>
      </div>
    </div>
  );
};

const NewsCards = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const totalPages = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const cardsToRender = blogPosts;

  const handlePrev = () => setCurrentPage((p) => (p > 1 ? p - 1 : p));
  const handleNext = () => setCurrentPage((p) => (p < totalPages ? p + 1 : p));
  const handleGoTo = (page) => setCurrentPage(page);

  return (
    <div className="bg-[#F2F2F2] pb-[50px]">
      <div className="container pt-[34px]">
        <div className="who-we-are flex mb-[50px] items-center justify-center lg:justify-start gap-4 text-[#80C4D3] font-medium text-[18px] uppercase">
          <span>•</span>
          <span>LatesT News & Event</span>
          <span>•</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[110px] mb-[50px] place-items-center">
          {cardsToRender.map((post) => (
            <div key={post.id} className="max-w-[300px] max-h-[550px]">
              <img
                src={post.img}
                alt="blog"
                className="w-[300px] h-[238px] object-cover"
              />
              <p className="text-[16px] sm:text-[20px] mt-[20px] line-clamp-3">
                {post.text}
              </p>
              <p className="text-[20px] mt-[20px] font-medium">{post.date}</p>
              <div className="flex justify-between items-center mt-[20px]">
                <div className="flex gap-[10px] items-center">
                  <Message />
                  <p className="text-[30px] font-bold">{post.comments}</p>
                </div>
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
              {[1, 2, 3].map((page) => (
                <option key={page} value={page} className="bg-[#8CC9D5] text-white">
                  {page}
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
