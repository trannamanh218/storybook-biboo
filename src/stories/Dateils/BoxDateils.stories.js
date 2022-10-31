import BoxDateils from "../../components/BoxDateils/BoxDateils";


export default {
  title: "Dateils/BoxDateils",
  component: BoxDateils,
};

const Template = (args) => (
  <div style={{ width: "100%", paddingTop: "50px" }} className="listen-to-read-books">
    <BoxDateils {...args} />
  </div>
);

export const Primary = Template.bind({});