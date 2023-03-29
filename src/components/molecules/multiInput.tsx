// LIBRARIES
import { type FC, type ReactNode } from "react";
import { FaWindowClose } from "react-icons/fa";

// COMPONENTS
import addClassName from "~/components/helpers/addClassName";
import sanitizeStrArray from "~/components/helpers/sanitizeStrArray";

// PROPS
interface Props {
  inputName?: string;
  label?: string | (() => string);
  labelPosition?: "left" | "right" | "top" | "bottom";
  savedLabel?: string;
  inputClassName?: string;
  labelClassName?: string;
  buttonLabel?: string | ReactNode;
  buttonClassName?: string;
  savedLabelClassName?: string;
  savedValuesClassName?: string;
  placeholder?: string;
  value: string;
  setValue: (input: string) => void;
  allValues: string[];
  setAllValues: (input: string[]) => void;
  allowDuplicates?: boolean;
}

const MultiInput: FC<Props> = ({
  inputName,
  label,
  labelPosition = "top",
  savedLabel = "",
  inputClassName,
  labelClassName,
  buttonLabel = "Add",
  buttonClassName,
  savedLabelClassName,
  savedValuesClassName,
  placeholder,
  value,
  setValue,
  allValues,
  setAllValues,
  allowDuplicates = false,
}) => {
  // HANDLE ADD TO ALL VALUES
  const handleAddToAllValues = () => {
    setAllValues(sanitizeStrArray(allValues, value, allowDuplicates));
    setValue("");
  };

  // HANDLE DELETE VALUE
  const handleDeleteValue = (index: number) => {
    console.log("delete value", index);
    setAllValues(allValues.filter((_, i) => i !== index));
  };

  return (
    <>
      <label
        className={
          "flex min-w-full cursor-pointer" +
          (labelPosition === "top" || labelPosition === "bottom"
            ? " flex-col"
            : "") +
          addClassName(labelClassName)
        }
      >
        <>
          {label && (labelPosition === "top" || labelPosition === "left")
            ? label
            : ""}
          <div className="flex">
            <input
              name={inputName ? inputName : ""}
              type="text"
              value={value}
              className={"w-full p-2" + addClassName(inputClassName)}
              onChange={(e) => setValue(e.target.value)}
              placeholder={placeholder ? placeholder : undefined}
            />
            <button
              className={"btn p-2" + addClassName(buttonClassName)}
              onClick={() => handleAddToAllValues()}
            >
              {buttonLabel}
            </button>
          </div>

          {label && (labelPosition === "bottom" || labelPosition === "right")
            ? label
            : ""}
        </>
      </label>
      <div className="w-full">
        <div
          aria-label={savedLabel}
          className={"w-full" + addClassName(savedLabelClassName)}
        >
          {savedLabel}
        </div>
        <div className="grid w-full grid-flow-col">
          {allValues
            ? allValues.map((value, index) => {
                return (
                  <div
                    key={value}
                    className={
                      "flex items-center p-2" +
                      addClassName(savedValuesClassName)
                    }
                  >
                    {value}
                    <button
                      // Delete Individual value
                      className=""
                    >
                      <FaWindowClose
                        className="m-1 hover:text-error"
                        onClick={() => handleDeleteValue(index)}
                      />
                    </button>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default MultiInput;
