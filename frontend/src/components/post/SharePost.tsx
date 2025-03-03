"use client";
import { Facebook, Twitter, Linkedin, Copy, Mail } from 'lucide-react';
import { toast } from '@components/ui/use-toast';
import {useEffect, useState} from "react";

interface SharePostProps {
  title: string;
  slug: string;
}

const SharePost = ({ title, slug }: SharePostProps) => {
    const [baseUrl, setBaseUrl] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setBaseUrl(window.location.origin);
        }
    }, []);

  const url = `${baseUrl}/post/${slug}`;
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      toast({
        title: "Link copied",
        description: "The article link has been copied to your clipboard.",
      });
    });
  };

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 hidden xl:flex flex-col space-y-4">
      <p className="text-xs font-medium text-center">SHARE</p>
      
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook className="h-5 w-5" />
      </a>
      
      <a 
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="h-5 w-5" />
      </a>
      
      <a 
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>
      
      <a 
        href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
        aria-label="Share via Email"
      >
        <Mail className="h-5 w-5" />
      </a>
      
      <button
        onClick={handleCopyLink}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
        aria-label="Copy link"
      >
        <Copy className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SharePost;
