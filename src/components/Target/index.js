import "./Target.scss"

const Target = () => {
  return (
    <div className="target">
      <p className="title-cardd">Mục tiêu đọc sách</p>
      <div className="cardd">
        <div className="percent">
          <svg>
            <circle cx="180" cy="150" r="140"></circle>
            <circle
              cx="180"
              cy="150"
              r="140"
              style={{ "--percent": "25" }}
            ></circle>
          </svg>
          <div className="number">
            <h3>24/30</h3>
            <p>Số trang sách đã đọc hôm nay</p>
          </div>
          <button type="button" className="button-reading-goal">
            <span>THAY ĐỔI MỤC TIÊU</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Target
