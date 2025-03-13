import { useEffect, useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoriesState } from '@/states/categories';
import { pageState } from '@/states/page';
import { queryState } from '@/states/query';
import { BlogPostsArray, Post } from '@/types/post';
import { search } from '@/utils/search';
import { toUniqueArray } from '@/utils/to-unique-array';

const POST_PER_PAGE = 12;

export default function usePosts(allPostsData: BlogPostsArray) {
  const page = useRecoilValue(pageState);
  const query = useRecoilValue(queryState);
  const [categories, setCategories] = useRecoilState(categoriesState);

  // Extracting actual posts from the API response
  const allPosts: Post[] = allPostsData.data;

  // **Filtering logic**
  const allPostsFiltered = useMemo(() => {
    return allPosts.filter((post) => {
      if (post.status !== "published") return false;
      if (query && !search(post.title, query)) return false;
      if (categories.selected.length) {
        const isCategoryMatch = categories.selected.every((cat) =>
          post.tags.includes(cat)
        );
        if (!isCategoryMatch) return false;
      }
      return true;
    });
  }, [allPosts, categories.selected, query]);

  // **Sorting by date correctly**
  allPostsFiltered.sort(
    (postA, postB) =>
      new Date(postB.published_at).getTime() -
      new Date(postA.published_at).getTime()
  );

  // **Pagination**
  const totalPages = allPostsData.meta.last_page;
  const offset = (page ? +page - 1 : 0) * POST_PER_PAGE;
  const postsForCurrentPage = allPostsFiltered.slice(
    offset,
    offset + POST_PER_PAGE
  );

  // **Update categories when posts change**
  useEffect(() => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      active: toUniqueArray(
        allPostsFiltered.map((post) => post.tags).flat()
      ),
    }));
  }, [allPostsFiltered, setCategories]);

  return {
    posts: postsForCurrentPage,
    totalPages,
    paginationLinks: allPostsData.links, // Return links for frontend navigation
  };
}
