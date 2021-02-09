import { NextPage } from 'next';
import { Container } from '@material-ui/core';
import Page from '../templates/Page';
import { Data, PostBlog } from '../shared.types';
import usePosts from '../hooks/usePosts';
import BlogList from '../components/BlogList';
import Loading from '../components/Loading';

const Blog: NextPage = () => {
  const posts: Data<PostBlog>[] | null = usePosts('JP');
  return (
    <Page title="Japan" siteTitle="Japan" siteDescription="Read more news from Japan | Creating Value Alliance">
      <Container maxWidth="md">
        {posts === null && <Loading />}
        {posts && (
          <BlogList countryFolder="jp" posts={posts} />
        )}
      </Container>
    </Page>
  );
};

export default Blog;
