'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import CategoryList from '@/components/category-list';
import useMounted from '@/hooks/use-mounted';
import '@/styles/notion.css';
import { Post } from '@/types/post';

export default function NotionPage({ post }: { post: Post }) {
  const { theme } = useTheme();
  const mounted = useMounted();

  // Process content:
  let formattedContent = post.content;

  // Convert "newLinenewLine {title} newLinenewLine" into <h2>{title}</h2>
  formattedContent = formattedContent.replace(
    /newLinenewLine\s*(.*?)\s*newLinenewLine/g,
    '<br /><br /><h2>$1</h2><br />'
  );


  // Replace "newLine" with <br />
  formattedContent = formattedContent.replace(/newLine/g, '<br />');

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-4">
        <CategoryList categories={post.tags} />
      </div>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <div className="relative aspect-[3/2] w-full max-w-[900px] mx-auto mb-6">
        <Image
          src={post.image}
          alt={post.title}
          fill
          style={{ objectFit: 'contain' }}
          placeholder="blur"
          blurDataURL={post.image}
        />
      </div>

      <article
        className={`prose max-w-none ${
          mounted && theme === 'dark' ? 'prose-invert' : ''
        }`}
        dangerouslySetInnerHTML={{ __html: formattedContent }}
      />
    </div>
  );
}
