// LIBRARIES
import { type FC } from "react";

// TRPC
import { api } from "utils/api";

// STATE STORES
import { useAddPropFormStore } from "~/components/stores/addPropFormStore";

// COMPONENTS
import MultiInput from "~/components/molecules/multiInput";
import sanitizeStrArray from "~/components/helpers/sanitizeStrArray";

// FC
const AddPropForm: FC = () => {
  // STATE
  const {
    nameInput,
    setNameInput,
    nameError,
    setNameError,
    allNames,
    setAllNames,
    formError,
    setFormError,
  } = useAddPropFormStore();

  // tRPC
  const addPropMutation = api.admin.addProp.useMutation();

  // HANDLERS
  const handleAddProp = () => {
    // Sanitize Input & Mutate
    setAllNames(sanitizeStrArray(allNames, nameInput));
    const sanitized = sanitizeStrArray(allNames, nameInput);
    addPropMutation.mutate(sanitized);
    setNameInput("");
  };

  // RENDER
  return (
    <div
      // Form Container
      aria-label="Add a Prop Form"
      className="flex w-full max-w-5xl items-start justify-center overflow-hidden rounded-lg border border-solid border-neutral-content p-4"
    >
      <div
        // MAIN CONTAINER
        className="flex w-full max-w-3xl flex-col items-center justify-center p-4 md:w-3/4"
      >
        <MultiInput
          // Prop Name
          inputName="propNames"
          label="Prop Name"
          labelPosition="top"
          savedLabel="All Names"
          inputClassName="rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none"
          labelClassName="uppercase tracking-wider"
          buttonLabel="+"
          buttonClassName="uppercase tracking-wider w-20 rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg btn-primary"
          savedLabelClassName="mt-2 p-1"
          placeholder=""
          value={nameInput}
          setValue={setNameInput}
          allValues={allNames}
          setAllValues={setAllNames}
        />
      </div>
      <button className="btn-primary btn" onClick={() => handleAddProp()}>
        Add Prop
      </button>
    </div>
  );
};

export default AddPropForm;
