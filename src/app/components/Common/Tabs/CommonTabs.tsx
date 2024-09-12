import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../../../lib/utils";
import style from "./styles.module.scss";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  className?: string;
}

const CommonTabs: React.FC<TabsProps> = ({ tabs, className = "p-4" }) => {
  const [activeTab, setActiveTab] = useState(0);

  const renderButtonBg = (index: number) => {
    if (index === 0) {
      return "bg-cyan-800 text-white";
    }
    if (index === 1) {
      return "bg-cyan-900 text-white";
    }
    if (index === 2) {
      return "bg-cyan-950 text-white";
    }
  };

  return (
    <div className="w-full">
      {/* Tab Labels */}
      <div className={cn(style.containerTab)}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-12 py-2 font-semibold rounded-tr-xl ${
              activeTab === index ? "bg-white" : renderButtonBg(index)
            }`}
            style={{
              cursor: tabs.length > 1 ? "pointer" : "default",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={cn("bg-white bg-opacity-40 rounded-b-xl", className)}
      >
        {tabs[activeTab].content}
      </motion.div>
    </div>
  );
};

export default CommonTabs;
