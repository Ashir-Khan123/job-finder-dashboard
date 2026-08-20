import { Collapse } from 'antd';


const AppAccordion = ({job}) => {

const items = [
  {
    key: "1",
    label: "Job Overview",
    children: (
      <p className="text-gray-700 p-3 font-semibold">
        {job.description}
      </p>
    ),
  },
  {
    key: "2",
    label: "What You'll Do",
    children: (
      <ul className="list-disc pl-7 py-4 text-gray-700 font-semibold space-y-3">
        <li>Assist in collecting and preparing data for projects.</li>
        <li>Support the team with data analysis and experimentation.</li>
        <li>Collaborate with engineers and data scientists.</li>
        <li>Document findings and communicate results.</li>
      </ul>
    ),
  },
  {
    key: "3",
    label: "Requirements",
    children: (
      <ul className="list-disc pl-7 py-4 text-gray-700 font-semibold space-y-2">
        {job.requirements.map((requirement, index) => (
          <li key={index}>{requirement}</li>
        ))}
      </ul>
    ),
  },
];

  const onChange = key => {
    console.log(key);
  };
  
  return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;

};
export default AppAccordion;