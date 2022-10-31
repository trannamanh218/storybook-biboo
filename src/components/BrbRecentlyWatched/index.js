import "./BrbRecentlyWatched.scss";
import { ProgressBar } from "react-bootstrap";

const BrbRecentlyWatched = () => {
  return (
    <div className="brb-recently-watched">
      <div className="left-brb-recently-watched">
        <div>
          <img
            className="left-brb-recently-watched"
            src="img/Rectangle 504.png"
            alt=""
          />
        </div>
      </div>
      <div className="right-brb-recently-watched">
        <p className="watching-right-brb-recently-watched">Đang xem gần đây</p>
        <div className="title-right-brb-recently-watched">
          Barack Obama và sự nghiệp The Audacie <br />
          of the Legend of all the time
        </div>
        <div className="text-right-brb-recently-watched">
          <p>Barack Obama</p>
        </div>
        <div className="right-brb-recently-watched-progress">
          <div className="index-progress">29%</div>
          <ProgressBar now={30} />
        </div>
        <div className="bottom-right-brb-recently-watched">
          <button type="bottom">
            <span>Tiếp tục đọc</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default BrbRecentlyWatched;
