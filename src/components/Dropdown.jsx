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
  const [open, setOpen] = useState(false);
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
      open={open}
      onOpenChange={setOpen}
      trigger={["click"]}
      menu={{
        items,
        selectable: true,
        onClick: handleClick,
      }}
    >
      <Space className="w-full flex items-center text-gray-400 py-3 px-2 cursor-pointer">
        <span>{selected}</span>

        <DownOutlined className="ml-auto" />
      </Space>
    </Dropdown>
  );
}

export default AppDropDown;