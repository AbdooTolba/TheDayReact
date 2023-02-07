import React, { useState } from "react";
import { Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import ScheduleDialog from "./ScheduleDialog";

function Schedule({
  name,
  appreviation,
  doctor,
  material,
  PreviousExams,
  schdule,
  description,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ImageList cols={1}>
        <ImageListItem
          sx={{ width: "50vw", height: "auto", cursor: "pointer" }}
          onClick={() => setOpen(true)}
        >
          <img src={schdule} alt="schdule" loading="lazy" />
        </ImageListItem>
      </ImageList>
      <ScheduleDialog open={open} setOpen={setOpen} schdule={schdule} />
    </>
  );
}

export default Schedule;
