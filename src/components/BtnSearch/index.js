import "./BtnSearch.scss";

const BtnSearch = ({ placeholder }) => {
  return (
    <div className="brb-search">
      <div className="icon-brb-search">
        <img src="img/Search.png" alt="anhminhhoa" />
      </div>
      <input type="text" placeholder={placeholder} name="search" />
    </div>
  );
};

BtnSearch.defaultProps = {
  placeholder: "Tìm kiếm chủ đề",
};
export default BtnSearch;
