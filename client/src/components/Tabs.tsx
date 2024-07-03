import { useState } from "react";

function defaultType(
  selectedTabIndex: number,
  tabs: string[],
  handleSelectTab: (newIndex: number) => void
) {
  return (
    <>
      {tabs.map((tab, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              handleSelectTab(i);
            }}
            className={`
              cursor-pointer
              py-2 w-[323px]
              rounded-t-[16px]
              border-solid border-2 border-primary 
              text-[20px] font-noraml ${
                selectedTabIndex === i ? "text-black" : "text-primary"
              }
              ${selectedTabIndex === i ? "bg-primary" : "bg-transparent"}
            `}
          >
            {tab}
          </div>
        );
      })}
    </>
  );
}

function ghostType(
  selectedTabIndex: number,
  tabs: string[],
  handleSelectTab: (newIndex: number) => void
) {
  return (
    <>
      {tabs.map((tab, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              handleSelectTab(i);
            }}
            className={`
            text-left
            cursor-pointer
            py-2 w-[323px]
            text-[20px] ${
              selectedTabIndex === i
                ? "text-purple-text font-bold"
                : "text-[#6B6B6B] font-normal"
            }
            bg-transparent
            ${selectedTabIndex === i ? "underline underline-offset-2" : ""}
          `}
          >
            {tab}
          </div>
        );
      })}
    </>
  );
}

function returnByType(
  type: string,
  selectedTabIndex: number,
  tabs: string[],
  handleSelectTab: (newIndex: number) => void
) {
  if (type.length === 0 || type === "default") {
    return defaultType(selectedTabIndex, tabs, handleSelectTab);
  } else if (type === "ghost") {
    return ghostType(selectedTabIndex, tabs, handleSelectTab);
  }
}

interface Props {
  type?: string;
  tabs: string[];
  onChange?: (newIndex: number) => void;
}

export default function Tabs({ type, tabs, onChange }: Props): JSX.Element {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  function handleSelectTab(newIndex: number) {
    setSelectedTabIndex(newIndex);
    onChange?.(newIndex);
    console.log(selectedTabIndex);
  }

  return (
    <div className="flex flex-row justify-start space-x-[12px]">
      {returnByType(type || "default", selectedTabIndex, tabs, handleSelectTab)}
    </div>
  );
}
