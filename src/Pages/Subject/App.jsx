import Header from "../../components/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { useParams } from "react-router-dom";
import data from "../../Data/data.json";

import TabsPC from "./TabsPc";
import TabsPhone from "./TabsPhone";

function App() {
  const { subjectID } = useParams();

  // get the subjcet from data that matches the subject param
  const subjects = data.semesters.map((semester) =>
    semester.subjects.filter((subject) => subject.appreviation === subjectID)
  );
  const subject = subjects
    .filter((subject) => subject.length > 0)
    .map((subject) => subject[0]);

  return (
    <>
      <CssBaseline />
      <Header title={subject[0].name} isSearch={false} />
      <TabsPC {...subject[0]} />
      <TabsPhone
        {...subject[0]}
        sx={{
          display: {
            sm: "none",
            xs: "block",
          },
        }}
      />
    </>
  );
}

export default App;
