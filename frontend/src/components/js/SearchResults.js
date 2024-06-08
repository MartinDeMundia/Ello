import React from 'react';
import { Typography } from '@mui/material';

function SearchResults({ results }) {
  return (
    <div>
      {results.map((result) => (
        <Typography key={result.id}>{result.title}</Typography>
      ))}
    </div>
  );
}

export default SearchResults;