import React, { Suspense, lazy } from "react";

import Header from "../../components/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { useParams } from "react-router-dom";
import data from "../../Data/data.json";

// import TabsPC from "./TabsPc";
// import TabsPhone from "./TabsPhone";

const TabsPC = lazy(() => import("./TabsPc"));
const TabsPhone = lazy(() => import("./TabsPhone"));

function App() {
  const { subjectID } = useParams();

  // get the subjcet from data that matches the subject param
  const subjects = data.semesters.map((semester) =>
    semester.subjects.filter((subject) => subject.appreviation === subjectID)
  );
  const subject = subjects
    .filter((subject) => subject.length > 0)
    .map((subject) => subject[0]);

  document.title = `${subject[0].name}`;
  document.getElementById("favicon").href =
    "https://media.discordapp.net/attachments/1008571067398369291/1072747092805701672/9i0uyhiy_centered_book_book_faceing__main_object_is_book_a_book_1c9248e7-67be-4b89-86ac-96c79d314feb-removebg-preview.png?width=372&height=372";

  return (
    <>
      <CssBaseline />
      <Header title={subject[0].name} isSearch={false} />
      <Suspense fallback={<div>Loading...</div>}>
        <TabsPC {...subject[0]} />
        <TabsPhone {...subject[0]} />
      </Suspense>
    </>
  );
}

export default App;
