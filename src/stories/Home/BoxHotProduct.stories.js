import BoxHotProduct from "../../components/BoxHotProduct";


export default {
    title: "Home/BoxHotProduct",
    component: BoxHotProduct,
  };
  
  const Template = (args) => (
    <div style={{ width: "23%" }}>
      <BoxHotProduct {...args} />
    </div>
  );
  
  export const Primary = Template.bind({});