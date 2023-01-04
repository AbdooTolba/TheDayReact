import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Chip from '@mui/material/Chip';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';


export default function AlertDialog({label,subjects}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Chip label={label} clickable onClick={handleClickOpen}  />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {subjects.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
  <Box sx={{m : 2}}>
    <Grid container spacing={2} >
      <Grid item xs={4}>
          <Chip label={"Materials"}  clickable/>
      </Grid>
      <Grid item xs={4}>

          <Chip label={"Previous Exams"} clickable/>
      </Grid>
          <Grid item xs={4}>

          <Chip label={"schdule"} clickable/>
      </Grid>
    
    </Grid>
  </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}