import Radio from "../../components/Radio";


export default {
    title: "Player/Radio",
    component: Radio,
  };
  
  const Template = (args) => (
    <div style={{ width: "100%" }}>
      <Radio {...args} />
    </div>
  );
  
  export const Primary = Template.bind({});