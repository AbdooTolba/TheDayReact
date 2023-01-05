import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function BasicCard({title, body, handelDelete, item}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
       
        <Typography variant="h5" component="div">
          {title}
        </Typography>
      
        <Typography variant="body2">
          {body}
        
        </Typography>
        <Button
        sx={{position: "relative", left: "90%"}}
              
              onClick={()=> handelDelete(item)}
            > 
  <IconButton aria-label="delete">
  <DeleteIcon />
</IconButton>
             </Button>
      </CardContent>
      
    </Card>
  );
}