import { FC, Fragment, useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { makeStyles } from '@material-ui/core/styles';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid,
  Typography,
  Divider,
  Theme, Box,
} from '@material-ui/core';
import ArticleDetail from './ArticleDetail';
import Loading from './Loading';
import { Article } from '../shared.types';

interface Volume {
  volume: string;
  articles: Article[];
}

interface ArticlesData {
  Get: {
    Things: {
      Article: Article[];
    };
  };
}

const GET_BY_ISSUE = gql`
  query getArticlesByIssue($issue: String) {
    Get {
      Things {
        Article(where: { path: ["issue"], operator: Equal, valueString: $issue }) {
          issue
          title
          year
          doi
          journal
          volume
          uuid
          abstract
        }
      }
    }
  }
`;

const byYear = (a: { year: number }, b: { year: number }): number => {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  return 0;
};

const useStyles = makeStyles((theme: Theme) => ({
  articleIssue: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

interface ArticleIssueProps {
  issue: string;
}

const ArticleIssue: FC<ArticleIssueProps> = ({ issue }) => {
  const classes = useStyles({});
  const [articlesPerVolume, setArticlesPerVolume] = useState<Volume[] | null>([]);
  const { loading, error, data } = useQuery<ArticlesData>(GET_BY_ISSUE, {
    variables: {
      issue,
    },
  });

  if (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  useEffect(() => {
    async function getData(): Promise<Volume[] | null> {
      const editions: Article[] | undefined = await data?.Get.Things.Article.sort(byYear);
      if (editions) {
        const uniqueVolumesSet: Set<string> = new Set(
          editions.map((singleArticle) => singleArticle.volume),
        );
        const uniqueVolumes: string[] = [...Array.from(uniqueVolumesSet)];
        const articlesInVolumes: Volume[] = [];
        uniqueVolumes.forEach((volume) => {
          articlesInVolumes.push({
            volume,
            articles: editions.filter((article): boolean => article.volume === volume),
          });
        });
        return articlesInVolumes.reverse();
      }
      return null;
    }
    getData().then((filteredArticles): void => {
      setArticlesPerVolume(filteredArticles);
    });
  }, [data]);

  return (
    <Grid className={classes.articleIssue} container direction="row" justify="center">
      {loading && <Loading />}
      {error && <p>There was an error loading the articles. Please try again later.</p>}
      {articlesPerVolume && articlesPerVolume.length !== 0 && (
        <>
          <Grid xs={12} md={4} lg={3} item>
            <Typography variant="h5" component="p" gutterBottom>
              Issue: {issue}
            </Typography>
          </Grid>
          <Grid xs={12} md={8} lg={9} item>
            {articlesPerVolume.map(({ volume, articles }) => (
              <Fragment key={volume}>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="overline">Volume: {volume}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{ flexDirection: 'column' }}>
                    {articles.map((article, index) => {
                      const lastItem: boolean = index === articles.length - 1;
                      const firstItem: boolean = index === 0;
                      return (
                        <Fragment key={`${volume}-${article.uuid}`}>
                          <Box pt={firstItem ? 1 : 4} mt={2} pb={3} mb={3}>
                            <ArticleDetail article={article} />
                          </Box>
                          {!lastItem && <Divider />}
                        </Fragment>
                      );
                    })}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Fragment>
            ))}
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default ArticleIssue;
