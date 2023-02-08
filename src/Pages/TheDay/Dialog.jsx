import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/material";

export default function AlertDialog({ label, subject }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Chip
        sx={{ width: "100%" }}
        className="subject__chip"
        label={label}
        clickable
        component={"a"}
        href={/subject/ + subject.appreviation}
        // onClick={handleClickOpen}
      />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{subject.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box display="flex" sx={{ m: 1 }}>
              <Chip
                component={"a"}
                href={/subject/ + subject.appreviation}
                target="_blank"
                sx={{ m: 2 }}
                label={"Materials"}
                onClick={() => {}}
                clickable
              />

              <Chip
                sx={{ m: 2 }}
                label={"Previous Exams"}
                onClick={() => {
                  console.log(subject.PreviousExams);
                }}
                clickable
              />

              <Chip
                sx={{ m: 2 }}
                label={"schdule"}
                onClick={() => {
                  console.log(subject.schdule);
                }}
                clickable
              />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
