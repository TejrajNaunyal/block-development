import { useBlockProps } from "@wordpress/block-editor";

// save.js

const TabSave = ({ attributes }) => {
  const { tabs } = attributes;

  return (
    <div {...useBlockProps.save({ className: "horizontal-tabs" })}>
      <div className="tab-list">
        {tabs.map((tab, index) => (
          <div key={index} className="tab">
            <h3>{tab.title}</h3>
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div key={index} className="content">
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSave;
