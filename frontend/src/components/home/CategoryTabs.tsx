
import { useState } from 'react';
import { BlogPost } from '../../types/blogTypes';
import { categories } from '@data/posts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs';
import PostCard from './PostCard';
import Link from "next/link";

interface CategoryTabsProps {
  posts: BlogPost[];
}

const CategoryTabs = ({ posts }: CategoryTabsProps) => {
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredPosts = activeTab === 'all' 
    ? posts 
    : posts.filter(post => post.category.toLowerCase() === activeTab);
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-primary mb-2">BROWSE BY CATEGORY</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-8">Explore Topics</h3>
          
          <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full overflow-x-auto flex-nowrap mb-12 no-scrollbar py-2 bg-transparent justify-center">
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-6"
              >
                All
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.slug}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-6"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={activeTab} className="mt-0 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.slice(0, 3).map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))
                ) : (
                  <div className="col-span-3 text-center py-16">
                    <p className="text-muted-foreground mb-4">No articles found in this category.</p>
                  </div>
                )}
              </div>
              
              {filteredPosts.length > 3 && (
                <div className="text-center mt-12">
                  <Link
                    href={activeTab === 'all' ? '/blog' : `/category/${activeTab}`}
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    View all articles 
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;
