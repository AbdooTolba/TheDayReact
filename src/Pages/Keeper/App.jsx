import React, { useEffect } from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Grid from "@mui/material/Grid";
import FormDialog from "./FormDialog.jsx";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  const [notes, setNotes] = useLocalNotes();

  const handelDelete = (item) => {
    setNotes(notes.filter((n) => n !== item));
  };

  return (
    <>
      <Header setSearch={setSearch} search={search} />
      <Grid sx={{ marginTop: 10 }} container spacing={2}>
        {notes
          .filter((n) => n.title.includes(search) || n.body.includes(search))
          .map((item) => (
            <Grid item xs={12} sm={6}>
              <Note
                title={item.title}
                body={item.body}
                handelDelete={handelDelete}
                item={item}
              />
            </Grid>
          ))}
      </Grid>

      <FormDialog setNotes={setNotes} />
    </>
  );
};

export default App;

function useLocalNotes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    try {
      const notes = window.localStorage.getItem("notes");
      if (notes) {
        setNotes(JSON.parse(notes));
      }
    } catch (error) {}
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("notes", JSON.stringify(notes));
    } catch (error) {}
  }, [notes]);
  return [notes, setNotes];
}
