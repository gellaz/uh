import React from "react";

interface TabGroupProps {
  tabs: string[];
  role: string;
}

export default function TabGroup({ tabs, role }: TabGroupProps) {
  return (
    <div className="inline-flex rounded-md shadow-sm" role={role}>
      {tabs.map((tab, index) => (
        <button
          key={role}
          type="button"
          className={
            "focus:ring-none focus:ring-none border bg-transparent px-4 py-2 text-sm font-normal text-black hover:bg-primary/20 hover:text-primary focus:z-10 focus:bg-primary focus:text-white " +
            (index === 0
              ? "rounded-l-lg"
              : index === tabs.length - 1
                ? "rounded-r-lg"
                : "")
          }
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
