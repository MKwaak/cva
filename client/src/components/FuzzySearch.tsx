import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { TextField, Button, Box, Theme } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Article } from '../shared.types';

const useStyles = makeStyles((theme: Theme) => ({
  searchButton: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
  },
}));

const GET_BY_TERM = gql`
  query getByTerm($searchTerm: [String]!) {
    Get {
      Things {
        Article (
          explore: {
            concepts: $searchTerm
            certainty: 0.77
          }
        ) {
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

export const SEARCH_QUERY_ARTICLES = gql`
  query searchQueryArticles {
    searchQueryArticles
  }
`;

interface FuzzySearchProps {
  onSearchSubmit: {
    (data: {
      noResults: boolean;
      articles?: Article[] | undefined;
    }): void;
  };
  onSearchTermUpdate: {
    (term: string): void;
  };
}

const FuzzySearch: FC<FuzzySearchProps> = ({ onSearchSubmit, onSearchTermUpdate }) => {
  const classes = useStyles({});
  const [runQuery, { data, error }] = useLazyQuery(GET_BY_TERM);
  const [term, setTerm] = useState('');
  const [fieldError, setFieldError] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTerm(event.currentTarget.value);
    if (event.currentTarget.value === '') {
      setFieldError(false);
    }
  };

  const handleInputFocus = (): void => {
    setFieldError(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const formData: FormData = new FormData(event.currentTarget);
    const searchTerm: string = formData.get('searchTerm') as string;
    runQuery({ variables: { searchTerm } });
    onSearchTermUpdate(term);
  };

  useEffect((): void => {
    if (data) {
      setFieldError(false);
      onSearchSubmit({
        noResults: false,
        articles: data?.Get?.Things?.Article,
      });
    }
    if (error) {
      setFieldError(true);
      onSearchSubmit({ noResults: true });
    }
  }, [data, error, onSearchSubmit]);

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="row" flexGrow="1">
        <Box alignSelf="center" flexGrow={1}>
          <TextField
            id="searchTerm"
            name="searchTerm"
            label="Search for Articles"
            variant="outlined"
            type="search"
            fullWidth
            error={fieldError}
            value={term}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </Box>
        <Box alignSelf="center" ml={2}>
          <Button
            className={classes.searchButton}
            variant="contained"
            type="submit"
            color="secondary"
            startIcon={<SearchIcon />}
            disabled={!term}
          >
            Search
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default FuzzySearch;
