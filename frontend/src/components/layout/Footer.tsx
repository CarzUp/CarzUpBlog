import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { categories } from '@data/posts';
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-2xl font-display font-bold">
                Auto<span className="text-primary">Verse</span>
              </h2>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Your premium destination for automotive content, featuring the latest news, in-depth reviews, and stunning photography.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/category/${category.slug}`}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick as</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-conditions"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} AutoVerse. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link 
              href="mailto:info@autoverse.com" 
              className="inline-flex items-center text-gray-500 text-sm hover:text-primary transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" />
              info@autoverse.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
