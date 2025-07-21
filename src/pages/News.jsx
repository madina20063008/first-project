
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import BG from '../assets/images/bg.png';
import ImgFeature from '../assets/images/news1.png';
import ImgTopStory from '../assets/images/news2.png';
import ImgTopNews from '../assets/images/news3.png';
import NewsModal from '../modules/NewsModal/NewsModal';
import { Arrow, Clock, Message, Person } from '../assets/icons/icons';
import Button from '../components/Button';
import Newsletter from '../modules/Newsletter/Newsletter';
import NewsCards from '../modules/NewsModal/NewsCards';

const samplePosts = [
  {
    id: 1,
    type: 'RECENT EVENT',
    title: 'THE SCHOOL END OF THE SESSION PARTY',
    img: ImgFeature,
    date: 'September 10, 2021',
    author: 'Admin',
    comments: 0,
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod temp incit ut labore.',
    body: `Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod temp incit ut labore dolore magnaaliqua. computer science students Ut enim ad minimveniam. Lorem ipsum.`,
  },
  {
    id: 2,
    type: 'TOP STORY',
    title: 'Lorem Ipsum Dolor Sit Amet.',
    img: ImgTopStory,
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur temp incit ut labore dolore mor magnaliaq uaadiping elit sed.',
    body: `Lorem ipsum dolor sit amet, consectetur temp incit ut labore dolore  mor magnaaliq uaadiping elit sed.`,
  },
  {
    id: 3,
    type: 'TOP NEWS',
    title: 'Lorem Ipsum Dolor Sit Amet.',
    img: ImgTopNews,
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod.',
    body: `Full article for the TOP NEWS item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus, mauris a semper convallis, ligula metus malesuada leo, non varius justo risus et ipsum.`,
  },
];

const FeaturedPost = ({ post, onReadMore }) => (
  <article>
    <div className="relative">
      <img src={post.img} alt={post.title} className="w-full h-auto object-cover" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-black/70">
        <h3 className="text-white text-lg sm:text-xl font-bold leading-tight">
          {post.title}
        </h3>
        <p className="hidden sm:block mt-2 text-white/90 text-sm max-w-[480px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
          {post.excerpt}
        </p>
      </div>
    </div>

    <div className="mt-4">
      <div className="text-xs tracking-wide uppercase font-medium text-[#80C4D3] mb-3">
        {post.type}
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] mb-4">
        <span className="flex gap-[10px]">
          <Person /> <span className="font-semibold text-[20px]">{post.author}</span>
        </span>
        <span className="flex gap-[10px]">
          <Clock /> <span className="font-semibold text-[20px]">{post.date}</span>
        </span>
        <span className="flex gap-[10px]">
          <Message /> <span className="font-semibold text-[20px]">{post.comments === 1 ? '1 Comment' : 'No Comment'}</span>
        </span>
      </div>
      <p className="text-[16px] leading-relaxed">
        {post.excerpt} computer science students Ut enim ad minimveniam. Lorem ipsum.
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
        }}
      />
    </div>
  </article>
);

const SidePostCard = ({ post, onReadMore }) => (
  <article className="w-full mb-[33px]">
    <div className="relative w-full">
      <img src={post.img} alt={post.title} className="w-full h-auto object-cover" />
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/70">
        <h4 className="text-white text-sm sm:text-base font-semibold">
          {post.title}
        </h4>
      </div>
    </div>

    <div className="mt-3">
      <div className="text-xs tracking-wide uppercase font-medium text-[#80C4D3]">
        {post.type}
      </div>
      <p className="mt-2 text-[15px] leading-snug">{post.excerpt}</p>
      <button
        onClick={() => onReadMore(post)}
        className="mt-2 text-[13px] font-semibold uppercase tracking-wide text-[#FF5A5A] hover:underline"
      >
        Readmore &gt;&gt;&gt;
      </button>
    </div>
  </article>
);

const News = ({ posts = samplePosts }) => {
  const [modalPost, setModalPost] = useState(null);
  const featured = posts[0];
  const sidePosts = posts.slice(1, 3);

  return (
    <div>
      <PageHeader title="News & Event" current="News & Event" bg={BG} />

      <div className="container px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <FeaturedPost post={featured} onReadMore={setModalPost} />
          </div>

          <div className="flex flex-col gap-10">
            {sidePosts.map((p) => (
              <SidePostCard key={p.id} post={p} onReadMore={setModalPost} />
            ))}
          </div>
        </div>
      </div>
      <NewsCards/>
      <Newsletter/>
      <NewsModal
        open={!!modalPost}
        post={modalPost}
        onClose={() => setModalPost(null)}
      />
    </div>
  );
};

export default News;



