import FooterRadio from "../../components/FooterRadio";

export default {
  title: "Player/FooterRadio",
  component: FooterRadio,
};

const Template = (args) => (
  <div>
    <FooterRadio {...args} />
  </div>
);

export const Primary = Template.bind({});
