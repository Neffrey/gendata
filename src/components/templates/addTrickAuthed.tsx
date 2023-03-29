// COMPONENTS
import AddTrickForm from "~/components/organisms/addTrickForm";
import GetAllProps from "~/components/queries/allProps";
// FC
const AddTrickAuthed = () => {
  // RETURN
  return (
    <>
      <AddTrickForm />
      <GetAllProps />
    </>
  );
};
export default AddTrickAuthed;
