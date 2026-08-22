import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const jobTypeItems = [
  {
    key: "1",
    label: "Full Time",
  },
  {
    key: "2",
    label: "Part Time",
  },
  {
    key: "3",
    label: "Contract",
  },
  {
    key: "4",
    label: "Internship",
  },
];

const locationItems = [
  {
    key: "1",
    label: "Karachi",
  },
  {
    key: "2",
    label: "Lahore",
  },
  {
    key: "3",
    label: "Islamabad",
  },
];

function AppDropDown({ type, onSelection }) {
  
  const [selected, setSelected] = useState(
    type === "location" ? "Location" : "Job Type"
  );

  const items = type === "location" ? locationItems : jobTypeItems;

  const handleClick = ({ key }) => {
    const selectedItem = items.find((item) => item.key === key);

    setSelected(selectedItem.label);
    onSelection(selectedItem.label);
  };

  return (
    <Dropdown
      menu={{
        items: items,
        selectable: true, 
        onClick: handleClick,
      }}
    > 
      <Space className="w-full text-gray-400 py-3 px-2 whitespace-nowrap cursor-pointer hover:shadow-md hover:bg-gray-50">
        {selected}
        <DownOutlined className="ml-auto" />
      </Space>
    </Dropdown>
  );
}

export default AppDropDown;