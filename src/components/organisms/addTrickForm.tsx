// LIBRARIES
import { type FC } from "react";

// STATE STORES
import { useAddTrickFormStore } from "~/components/stores/addTrickFormStore";

// COMPONENTS
import Input from "~/components/molecules/input";
import MultiInput from "~/components/molecules/multiInput";

// FC
const AddTrickForm: FC = () => {
  const {
    nameInput,
    setNameInput,
    nameError,
    setNameError,
    allNames,
    setAllNames,
    propInput,
    setPropInput,
    propError,
    setPropError,
    tagsInput,
    setTagsInput,
    tagsError,
    setTagsError,
    allTags,
    setAllTags,
    videoUrlInput,
    setVideoUrlInput,
    videoUrlError,
    setVideoUrlError,
    prereqInput,
    setPrereqInput,
    prereqError,
    setPrereqError,
    tryNextInput,
    setTryNextInput,
    tryNextError,
    setTryNextError,
    formError,
    setFormError,
  } = useAddTrickFormStore();
  return (
    <div
      // Form Container
      aria-label="Add a Trick Form"
      className="flex w-full max-w-5xl items-start justify-center overflow-hidden rounded-lg border border-solid border-neutral-content p-4"
    >
      <div
        // MAIN CONTAINER
        className="flex w-full max-w-3xl flex-col items-center justify-center p-4 md:w-3/4"
      >
        <MultiInput
          // Trick Name
          inputName="trickNames"
          label="Trick Name"
          labelPosition="top"
          savedLabel="All Names"
          inputClassName="rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none"
          labelClassName="uppercase tracking-wider"
          buttonClassName="uppercase tracking-wider w-20 rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg btn-primary"
          savedLabelClassName="mt-2 p-1"
          placeholder=""
          value={nameInput}
          setValue={setNameInput}
          allValues={allNames}
          setAllValues={setAllNames}
        />
        <Input
          // YOUtUBE VIDEO ID
          inputName="youtube-id"
          label="Youtube Video ID"
          labelPosition="top"
          inputClassName=""
          labelClassName=""
          placeholder=""
          value={videoUrlInput}
          setValue={setVideoUrlInput}
        />
      </div>
      <div
        // SIDEBAR CONTAINER
        className="flex w-full flex-col items-center justify-center p-4 md:w-1/4"
      >
        <Input
          // PROP TAG
          inputName="prop"
          label="Prop Type"
          labelPosition="top"
          inputClassName="rounded-lg"
          labelClassName="uppercase tracking-wider"
          placeholder=""
          value={propInput}
          setValue={setPropInput}
        />
        <MultiInput
          // TRICK TAGS
          inputName="trickTags"
          label="Tags"
          labelPosition="top"
          savedLabel="All Tags"
          inputClassName="rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none"
          labelClassName="uppercase tracking-wider"
          buttonClassName="uppercase tracking-wider w-20 rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg btn-primary"
          savedLabelClassName="mt-2 p-1"
          placeholder=""
          value={tagsInput}
          setValue={setTagsInput}
          allValues={allTags}
          setAllValues={setAllTags}
        />
        <button
          className="btn-primary btn"
          onClick={() => {
            console.log({
              nameInput,
              setNameInput,
              nameError,
              setNameError,
              allNames,
              setAllNames,
              propInput,
              setPropInput,
              propError,
              setPropError,
              tagsInput,
              setTagsInput,
              tagsError,
              setTagsError,
              allTags,
              setAllTags,
              videoUrlInput,
              setVideoUrlInput,
              videoUrlError,
              setVideoUrlError,
              prereqInput,
              setPrereqInput,
              prereqError,
              setPrereqError,
              tryNextInput,
              setTryNextInput,
              tryNextError,
              setTryNextError,
              formError,
              setFormError,
            });
          }}
        >
          LOG DATA
        </button>
      </div>
    </div>
  );
};

export default AddTrickForm;
