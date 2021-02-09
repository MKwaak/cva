import { NextPage } from 'next';
import { Container, Typography } from '@material-ui/core';
import Page from '../templates/Page';
// import { Data, PostBlog } from '../shared.types';
// import usePosts from '../hooks/usePosts';
// import BlogList from '../components/BlogList';
// import Loading from '../components/Loading';

const Blog: NextPage = () => (
  <Page title="Netherlands" siteTitle="Netherlands" siteDescription="Read more news from the Netherlands | Creating Value Alliance">
    <Container maxWidth="md">
      <Typography>Coming soon</Typography>
    </Container>
  </Page>
);

// const Blog: NextPage = () => {
//   const posts: Data<PostBlog>[] | null = usePosts('NL');
//   return (
//     <Page title="Netherlands" siteTitle="Netherlands">
//       <Container maxWidth="md">
//         {posts === null && <Loading />}
//         {posts && (
//           <BlogList countryFolder="nl" posts={posts} />
//         )}
//       </Container>
//     </Page>
//   );
// };

export default Blog;
