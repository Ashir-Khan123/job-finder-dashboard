import { message } from "antd";

function AppApplyMessage() {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.success("Application Submitted Successfully!");
  };

  return (
    <>
      {contextHolder}
      <span onClick={success} className="font-bold">Apply Now</span>
      
    </>
  );
}


export default AppApplyMessage;