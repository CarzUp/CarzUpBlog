"use client";
import { useEffect } from 'react';
import FeaturedPost from '@components/home/FeaturedPost';
import LatestPosts from '@components/home/LatestPosts';
import CategoryTabs from '@components/home/CategoryTabs';
import Newsletter from '@components/home/Newsletter';
import { blogPosts } from '@data/posts';

const Index = () => {
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const latestPosts = blogPosts.filter(post => post.id !== featuredPost.id).slice(0, 6);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
      <>
        <section className="pt-20 pb-10">
          <div className="container">
            <FeaturedPost post={featuredPost} />
          </div>
        </section>

        <LatestPosts posts={latestPosts} />

        <CategoryTabs posts={blogPosts} />

        <Newsletter />
      </>
  );
};

export default Index;
