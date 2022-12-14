import "./boxdateils.scss";
const BoxDateils = () => {
  return (
    <div className="book-details-biboo">
      <div className="left-book-details-biboo">
        <img src="img/Sách.png" alt="" />
        <div className="ratings-listen-to-read-books">
          <div>
            <img src="img/alert-circle-fill.png" alt="" />
          </div>
          <div>
            <img src="img/alert-circle-fill.png" alt="" />
          </div>
          <div>
            <img src="img/alert-circle-fill.png" alt="" />
          </div>
          <div>
            <img src="img/alert-circle-fill.png" alt="" />
          </div>
          <div>
            <img src="img/alert-circle-fill.png" alt="" />
          </div>
        </div>
      </div>
      <div className="right-book-details-biboo">
        <div className="title-book-details-biboo">
          The Swallow A Novel Can they do that tomorrow night?
        </div>
        <div className="author-book-details-biboo">Lisa Lutz</div>
        <div className="items-right-book-details-biboo">
          <button className="listen-for-free">NGHE AUDIO MIỄN PHÍ</button>
          <button className="proofread">ĐỌC THỬ</button>
          <button className="buy-books">
            <div className="icon">
              <img src="" alt="" />
              <span>MUA NGAY</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default BoxDateils;
