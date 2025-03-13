export type Post = {
  id: number;
  title: string;
  slug: string;
  author: string;
  content: string;
  excerpt: string;
  tags: string[];
  image: string;
  gallery: string[];
  status: string;
  type: string;
  published_at: string;
  created_at: string;
  updated_at: string;
};

export type Links = {
  first: string;
  last: string;
  prev: string;
  next: string;
}

export type MetaLink = {
  url: string;
  label: string;
  active: boolean;
};

export type Meta = {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  links: MetaLink[];
  per_page: number;
  to: number;
  total: number
}

export type BlogPostsArray = {
  data: Post[],
  links: Links,
  meta: Meta,
}