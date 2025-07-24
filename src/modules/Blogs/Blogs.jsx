

import React, { useEffect, useState, useRef } from 'react';
import { Arrow } from '../../assets/icons/icons';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { FadeLoader } from 'react-spinners';

const BlogModal = ({ open, onClose, post }) => {
  if (!open || !post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
      <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-3xl font-bold hover:opacity-70"
        >
          ×
        </button>

        {post.imageUrls?.length > 0 && (
          <ImageSlider images={post.imageUrls} height="250px" />
        )}

        <p className="text-[18px] mb-4 mt-4">{post.description}</p>
        <p className="text-[16px] font-medium mb-2">{post.date}</p>
      </div>
    </div>
  );
};

const Blogs = () => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/blog/`)
      .then(res => res.json())
      .then(data => {
        const updatedPosts = data.map(post => ({
          ...post,
          imageUrls: post.images?.map(img => img.image) || []
        }));
        setBlogPosts(updatedPosts);
      })
      .catch(err => console.error('Error fetching blog posts:', err))
      .finally(() => setLoading(false));
  }, [API_URL]);

  return (
    <div className="container pt-[34px] px-4 sm:px-6 md:px-10 relative">
      <h2 className="text-[30px] font-medium pb-[50px] text-center lg:text-left">
        FROM&nbsp;&nbsp;OUR&nbsp;&nbsp;<span style={{ color: '#98d6e9' }}>BLOG</span>
      </h2>

      {/* 🌀 Blurred loading overlay */}
      {loading && (
        <div className="absolute inset-0 z-10 flex justify-center items-center bg-white/40 backdrop-blur-sm rounded-lg">
          <FadeLoader color="#5BC0DE" />
        </div>
      )}

      {/* 👇 Blur blog content while loading */}
      <div className={loading ? 'blur-sm pointer-events-none select-none' : ''}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[110px] mb-[50px] place-items-center">
          {blogPosts.slice(0, 3).map((post) => (
            <div key={post.id} className="max-w-[300px] max-h-[550px]">
              <ImageSlider images={post.imageUrls} />
              <p className="text-[16px] sm:text-[20px] mt-[20px]">{post.description}</p>
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

        <div className="flex justify-center lg:justify-start">
          <Button
            text="More Articles"
            icon={<Arrow />}
            style={{
              width: '227px',
              borderRadius: '5px',
              display: 'flex',
              gap: '15px',
              marginBottom: '50px',
              justifyContent: 'center'
            }}
            onClick={() => navigate('/news')}
          />
        </div>
      </div>

      <BlogModal
        open={!!selectedPost}
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
};

const ImageSlider = ({ images, height = '238px' }) => {
  const timer = useRef();
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    renderMode: 'performance',
    drag: true,
    created: () => {
      timer.current = setInterval(() => {
        instanceRef.current?.next();
      }, 2500);
    },
    destroyed: () => {
      clearInterval(timer.current);
    },
  });

  const width = '300px';

  if (!images || images.length === 0) {
    return (
      <img
        src="/default-blog-image.jpg"
        alt="blog"
        className="w-[300px] h-[238px] object-cover rounded-md"
      />
    );
  }

  return (
    <div
      ref={sliderRef}
      className="keen-slider overflow-hidden rounded-md"
      style={{ width, height }}
    >
      {images.map((imgUrl, idx) => (
        <div
          key={idx}
          className="keen-slider__slide flex justify-center items-center"
          style={{ width, height }}
        >
          <img
            src={imgUrl}
            alt={`blog-${idx}`}
            onError={(e) => { e.target.src = '/default-blog-image.jpg'; }}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
