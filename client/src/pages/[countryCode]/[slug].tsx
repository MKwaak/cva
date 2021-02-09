import { NextPage, NextPageContext } from 'next';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { Box, Container, Grid, Theme, Typography } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout';
import { DocumentFrontMatter, PostBlog } from '../../shared.types';
import Tags from '../../components/Tags';
import Tag from '../../components/Tag';
import ProfileImage from '../../components/ProfileImage';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  intro: {
    marginBottom: theme.spacing(3),
  },
  small: {
    fontSize: '1rem',
  },
  divider: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  smallGutter: {
    marginBottom: theme.spacing(1),
  },
  mediumGutter: {
    marginBottom: theme.spacing(4),
  },
  author: {
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    firstContent: {
      marginTop: theme.spacing(5),
    },
  },
  [theme.breakpoints.up('md')]: {
    firstContent: {
      marginTop: theme.spacing(6),
    },
  },
}));

interface BlogTemplateProps {
  siteTitle: string;
  data: PostBlog;
  content: string;
}

const BlogTemplate: NextPage<BlogTemplateProps> = ({ content, data }) => {
  const classes: ClassNameMap<string> = useStyles({});
  const markdownBody: string = content;
  const frontmatter: PostBlog = data;

  const {
    title,
    intro,
    authorImageUrl,
    author,
    date,
    categories,
  } = frontmatter;

  return (
    <Layout siteTitle={title}>
      <Container className={classes.container} maxWidth="lg">
        <Grid component="article" container direction="row" justify="space-around" className={classes.firstContent}>
          <Grid item xs={12} md={8}>
            <Typography variant="h2" component="h1" className={classes.smallGutter}>
              {title}
            </Typography>
            <Typography className={classes.intro} gutterBottom>
              {intro}
            </Typography>
            <Grid alignItems="center" justify="space-between" className={classes.author} container>
              <Grid item>
                <Box alignItems="center" display="flex" flexDirection="row">
                  {authorImageUrl && (
                    <ProfileImage imageUrl={authorImageUrl} alt="Image of Marcel Kwakernaak" />
                  )}
                  <Box>
                    <Typography className={classes.small}>{author}</Typography>
                    <Typography className={classes.small}>{date}</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item>
                {categories && (
                  <Tags>
                    {categories.map((category) => (
                      <Tag key={category}>{category}</Tag>
                    ))}
                  </Tags>
                )}
              </Grid>
            </Grid>
            <Box component="div" className={`${classes.divider} ${classes.mediumGutter}`} />
            <ReactMarkdown source={markdownBody} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

BlogTemplate.getInitialProps = async (context: NextPageContext): Promise<BlogTemplateProps> => {
  const { slug, countryCode } = context.query;
  const postUrl = `${countryCode && typeof countryCode === 'string' ? countryCode.toUpperCase() : ''}/${slug}`;
  const content = await import(`../../posts/${postUrl}.md`);
  const config = await import('../../data/config.json');
  const data = matter(content.default) as DocumentFrontMatter<PostBlog>;

  return {
    siteTitle: config.title,
    ...data,
  };
};

export default BlogTemplate;
