
// import React, { useState, useEffect } from 'react';
// import PageHeader from '../components/PageHeader';
// import { Arrow, Clock, Message, Person } from '../assets/icons/icons';
// import Button from '../components/Button';
// import Newsletter from '../modules/Newsletter/Newsletter';
// import NewsModal from '../modules/NewsModal/NewsModal';
// import NewsCards from '../modules/NewsModal/NewsCards';
// import BG from '../assets/images/bg.png';

// const FeaturedPost = ({ post, onReadMore }) => {
//   const imageUrl = post.images?.[0]?.image || '';

//   return (
//     <article>
//       <div className="relative">
//         <img src={imageUrl} alt={post.title} className="w-full h-[600px] object-cover" />
//         <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-black/70">
//           <h3 className="text-white text-lg sm:text-xl font-bold leading-tight">
//             {post.title}
//           </h3>
//           <p className="hidden sm:block mt-2 text-white/90 text-sm max-w-[480px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
//             {post.description}
//           </p>
//         </div>
//       </div>

//       <div className="mt-4">
//         <div className="text-xs tracking-wide uppercase font-medium text-[#80C4D3] mb-3">
//           {post.type || 'NEWS'}
//         </div>
//         <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] mb-4">
          
//           <span className="flex gap-[10px]">
//             <Clock /> <span className="font-semibold text-[20px]">{post.date}</span>
//           </span>
         
//         </div>
//         <p className="text-[16px] leading-relaxed">
//           {post.description}
//         </p>
//         <Button
//           onClick={() => onReadMore(post)}
//           text="Read more"
//           icon={<Arrow />}
//           style={{
//             width: '203px',
//             display: 'flex',
//             gap: '20px',
//             borderRadius: '5px',
//             marginTop: '30px',
//             marginBottom: '30px',
//           }}
//         />
//       </div>
//     </article>
//   );
// };

// const SidePostCard = ({ post, onReadMore }) => {
//   const imageUrl = post.images?.[0]?.image || '';

//   return (
//     <article className="w-full mb-[33px]">
//       <div className="relative w-full">
//         <img src={imageUrl} alt={post.title} className="w-full h-auto object-cover" />
//         <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/70">
//           <h4 className="text-white text-sm sm:text-base font-semibold">
//             {post.title}
//           </h4>
//         </div>
//       </div>

//       <div className="mt-3">
//         <div className="text-xs tracking-wide uppercase font-medium text-[#80C4D3]">
//           {post.type || 'NEWS'}
//         </div>
//         <p className="mt-2 text-[15px] leading-snug">{post.description}</p>
//         <button
//           onClick={() => onReadMore(post)}
//           className="mt-2 text-[13px] font-semibold uppercase tracking-wide text-[#FF5A5A] hover:underline"
//         >
//           Readmore &gt;&gt;&gt;
//         </button>
//       </div>
//     </article>
//   );
// };

// const News = () => {
//   const [posts, setPosts] = useState([]);
//   const [modalPost, setModalPost] = useState(null);

//   useEffect(() => {
//     fetch('https://educationalwebsite.pythonanywhere.com/blog/news-event/')
//       .then((res) => res.json())
//       .then((data) => setPosts(data))
//       .catch((err) => console.error('Error fetching news:', err));
//   }, []);

//   const featured = posts[0];
//   const sidePosts = posts.slice(1, 3);

//   return (
//     <div>
//       <PageHeader title="News & Event" current="News & Event" bg={BG} />

//       <div className="container px-4 sm:px-6 lg:px-0">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//           <div className="lg:col-span-2">
//             {featured && <FeaturedPost post={featured} onReadMore={setModalPost} />}
//           </div>

//           <div className="flex flex-col gap-10">
//             {sidePosts.map((p) => (
//               <SidePostCard key={p.id} post={p} onReadMore={setModalPost} />
//             ))}
//           </div>
//         </div>
//       </div>

//       <NewsCards />
//       <Newsletter />
//       <NewsModal
//         open={!!modalPost}
//         post={modalPost}
//         onClose={() => setModalPost(null)}
//       />
//     </div>
//   );
// };

// export default News;



import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { Arrow, Clock } from '../assets/icons/icons';
import Button from '../components/Button';
import Newsletter from '../modules/Newsletter/Newsletter';
import NewsModal from '../modules/NewsModal/NewsModal';
import NewsCards from '../modules/NewsModal/NewsCards';
import BG from '../assets/images/bg.png';
import { FadeLoader } from 'react-spinners';

const FeaturedPost = ({ post, onReadMore }) => {
  const imageUrl = post.images?.[0]?.image || '';

  return (
    <article>
      <div className="relative">
        <img src={imageUrl} alt={post.title} className="w-full h-[600px] object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-black/70">
          <h3 className="text-white text-lg sm:text-xl font-bold leading-tight">
            {post.title}
          </h3>
          <p className="hidden sm:block mt-2 text-white/90 text-sm max-w-[480px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
            {post.description}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-xs tracking-wide uppercase font-medium text-[#80C4D3] mb-3">
          {post.type || 'NEWS'}
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] mb-4">
          <span className="flex gap-[10px]">
            <Clock /> <span className="font-semibold text-[20px]">{post.date}</span>
          </span>
        </div>
        <p className="text-[16px] leading-relaxed">
          {post.description}
        </p>
        <Button
          onClick={() => onReadMore(post)}
          text="Read more"
          icon={<Arrow />}
          style={{
            width: '203px',
            display: 'flex',
            gap: '20px',
            borderRadius: '5px',
            marginTop: '30px',
            marginBottom: '30px',
          }}
        />
      </div>
    </article>
  );
};

const SidePostCard = ({ post, onReadMore }) => {
  const imageUrl = post.images?.[0]?.image || '';

  return (
    <article className="w-full mb-[33px]">
      <div className="relative w-full">
        <img src={imageUrl} alt={post.title} className="w-full h-auto object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/70">
          <h4 className="text-white text-sm sm:text-base font-semibold">
            {post.title}
          </h4>
        </div>
      </div>

      <div className="mt-3">
        <div className="text-xs tracking-wide uppercase font-medium text-[#80C4D3]">
          {post.type || 'NEWS'}
        </div>
        <p className="mt-2 text-[15px] leading-snug">{post.description}</p>
        <button
          onClick={() => onReadMore(post)}
          className="mt-2 text-[13px] font-semibold uppercase tracking-wide text-[#FF5A5A] hover:underline"
        >
          Readmore &gt;&gt;&gt;
        </button>
      </div>
    </article>
  );
};

const News = () => {
  const [posts, setPosts] = useState([]);
  const [modalPost, setModalPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://educationalwebsite.pythonanywhere.com/blog/news-event/')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching news:', err);
        setLoading(false);
      });
  }, []);

  const featured = posts[0];
  const sidePosts = posts.slice(1, 3);

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm bg-white/40">
          <FadeLoader color="#36d7b7" />
        </div>
      )}

      <div className={loading ? 'blur-sm pointer-events-none' : ''}>
        <PageHeader title="News & Event" current="News & Event" bg={BG} />

        <div className="container px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {featured && <FeaturedPost post={featured} onReadMore={setModalPost} />}
            </div>

            <div className="flex flex-col gap-10">
              {sidePosts.map((p) => (
                <SidePostCard key={p.id} post={p} onReadMore={setModalPost} />
              ))}
            </div>
          </div>
        </div>

        <NewsCards />
        <Newsletter />
        <NewsModal
          open={!!modalPost}
          post={modalPost}
          onClose={() => setModalPost(null)}
        />
      </div>
    </div>
  );
};

export default News;
