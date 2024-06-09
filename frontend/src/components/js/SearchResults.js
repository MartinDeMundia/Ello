import React from 'react';
import { Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function SearchResults({ results, onAdd, onRemove }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {results.map((result) => (
        <Card key={result.id} variant="outlined" style={{ width: '300px', display: 'flex', flexDirection: 'column' }}>
          <CardContent style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={result.coverPhotoURL} alt="Cover" style={{ width: '100%', maxWidth: '200px', height: 'auto' }} />
            <Typography variant="h6" style={{ textAlign: 'center', marginTop: '10px' }}>{result.title}</Typography>
            <Typography variant="subtitle1">{`Author: ${result.author}`}</Typography>
            <Typography variant="body1">{`Reading Level: ${result.readingLevel}`}</Typography>
          </CardContent>
          <CardActions style={{ justifyContent: 'space-between' }}>
            <Button size="small" startIcon={<DeleteIcon />} onClick={() => onRemove(result.title)}>Remove from list</Button>
            <Button size="small" startIcon={<AddIcon />} onClick={() => onAdd(result)}>Add to reading list</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default SearchResults;

