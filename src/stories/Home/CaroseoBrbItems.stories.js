import CaroseoBrbItems from "../../components/CaroseoBrbItems";

export default {
    title: "Home/Caroseo",
    component: CaroseoBrbItems,
  };
  
  const Template = (args) => (
    <div style={{ width: "65%" }}>
      <CaroseoBrbItems {...args} />
    </div>
  );
  
  export const Primary = Template.bind({});