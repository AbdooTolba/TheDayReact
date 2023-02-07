function Schedule({
  name,
  appreviation,
  doctor,
  material,
  PreviousExams,
  schdule,
  description,
}) {
  return (
    <div>
      <h1> Schedule </h1>
      <img src={schdule} alt="schedule" border="0" />
    </div>
  );
}

export default Schedule;
