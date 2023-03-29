// COMPONENTS
import AddPropForm from "~/components/organisms/addPropForm";
import SortableTable from "~/components/molecules/sortableTable";
import GetAllProps from "~/components/queries/allProps";

// TABLE COLUMNS
const columns = [
  { title: "Date", accessor: "date", type: "date" },
  { title: "Status", accessor: "status" },
  { title: "User", accessor: "user" },
  { title: "Chore", accessor: "name", gridSpan: 2 },
  { title: "Comment", accessor: "comment", gridSpan: 4 },
  {
    title: "Difficult",
    accessor: "isDifficult",
    type: "boolean",
    justify: "center",
  },
  { title: "Points", accessor: "points", justify: "center" },
  { title: "Delete", accessor: "", type: "delete", justify: "center" },
];

// FC
const AddPropAdminAuthed = () => {
  // RETURN
  return (
    <>
      <AddPropForm />
      <SortableTable
        columns={columns}
        data={}
        editMutation={}
        deleteMutation={}
      />
      <GetAllProps />
    </>
  );
};
export default AddPropAdminAuthed;
