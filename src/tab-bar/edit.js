import { __ } from "@wordpress/i18n";
const { useState } = wp.element;
const { TextControl, Button } = wp.components;
const { RichText } = wp.blockEditor;

const TabEdit = ({ attributes, setAttributes }) => {
  const { tabs } = attributes;
  const [activeTab, setActiveTab] = useState(0);

  const addTab = () => {
    const newTab = {
      title: 'New Tab',
      content: '',
    };

    setAttributes({
      tabs: [...tabs, newTab],
    });
  };

  const updateTab = (index, property, value) => {
    const updatedTabs = [...tabs];
    updatedTabs[index][property] = value;

    setAttributes({
      tabs: updatedTabs,
    });
  };

  const removeTab = (index) => {
    const updatedTabs = [...tabs];
    updatedTabs.splice(index, 1);

    setAttributes({
      tabs: updatedTabs,
    });
  };

  return (
    <div className="horizontal-tabs">
      <div className="tab-list">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? 'active-tab' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div key={index} className={`content ${index === activeTab ? 'active-content' : 'hidden-content'}`}>
            <TextControl
              label="Tab Title"
              value={tab.title}
              onChange={(value) => updateTab(index, 'title', value)}
            />
            <RichText
              placeholder="Tab Content"
              value={tab.content}
              onChange={(value) => updateTab(index, 'content', value)}
            />
            <Button isDestructive onClick={() => removeTab(index)}>
              Remove Tab
            </Button>
          </div>
        ))}
      </div>
      <Button isPrimary onClick={addTab}>
        Add Tab
      </Button>
    </div>
  );
};

export default TabEdit;
