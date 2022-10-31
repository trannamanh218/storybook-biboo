import BrbRecentlyWatched from "../../components/BrbRecentlyWatched";

export default {
  title: "Home/BrbRecentlyWatched.stories",
  component: BrbRecentlyWatched,
};

const Template = (args) => (
  <div style={{ width: "1200px" }}>
    <BrbRecentlyWatched {...args} />
  </div>
);

export const Primary = Template.bind({});
