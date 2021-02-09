import { useState, useEffect } from 'react';
import importAllMarkdown from '../importAllMarkdown';
import { Data, PostBlog } from '../shared.types';

const byDate = function sortByDate(a: Data<PostBlog>, b: Data<PostBlog>): number {
  if (a.document.data.date < b.document.data.date) return -1;
  if (a.document.data.date > b.document.data.date) return 1;
  return 0;
};

type countryCode = 'NL' | 'JP';

function usePosts(countryCode: countryCode): Data<PostBlog>[] | null {
  const [posts, setPosts] = useState<Data<PostBlog>[] | null>(null);

  useEffect(() => {
    if (countryCode === 'NL') {
      // Note: require.context is not in runtime, so can't use argument as path (https://github.com/webpack/webpack/issues/4772)
      // TODO: replace with ContextReplacementPlugin could solve this
      const importedPosts: Data<PostBlog>[] = importAllMarkdown(require.context('../posts/NL', true, /\.md$/));
      const sortedPosts = importedPosts.sort(byDate).reverse();

      setPosts(sortedPosts);
    }
    if (countryCode === 'JP') {
      const importedPosts: Data<PostBlog>[] = importAllMarkdown(require.context('../posts/JP', true, /\.md$/));
      const sortedPosts = importedPosts.sort(byDate).reverse();

      setPosts(sortedPosts);
    }
  }, [countryCode, setPosts]);

  return posts;
}

export default usePosts;
