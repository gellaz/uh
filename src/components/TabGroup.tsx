import React from 'react';

interface TabGroupProps {
    tabs: string[];
}

export default function TabGroup({ tabs }: TabGroupProps) {
    return (
        <div className="inline-flex rounded-md shadow-sm" role="group">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    type="button"
                    className={"px-4 py-2 text-sm font-normal text-black bg-transparent border hover:bg-primary/20 hover:text-primary focus:z-10 focus:ring-none focus:ring-none focus:bg-primary focus:text-white " + (index === 0 ? "rounded-l-lg" : index === tabs.length - 1 ? "rounded-r-lg" : "")}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
