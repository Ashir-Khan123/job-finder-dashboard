import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";

const items = [
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
const AppDropDown = ({onSelection}) => {
  const [jobType, setJobType] = useState("Job type");
  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        onClick: ({ itemData }) => {
          setJobType(itemData.label),
          onSelection(itemData.label)
        }

         
      }}
    >
      <Space className="text-gray-500 py-3 px-2 whitespace-nowrap">
        {jobType}
        <DownOutlined className="pl-4 font-semibold" />
      </Space>
    </Dropdown>
  );
};
export default AppDropDown;
