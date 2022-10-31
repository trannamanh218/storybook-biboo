import { Dropdown } from "react-bootstrap-storybook";
import "./radio.scss";

const Radio = () => {
  return (
    <div className="listen-radio-player">
      <div className="navigation-bar-radio">
        <button to="/dateils" className="left-come-back">
          <img src="img/Back Arrow.png" alt="" />
        </button>
        <div className="right-option">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              ...
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ marginbottom: "80px" }}>
              <li>
                <button className="dropdown-item" href="#">
                  <div className="icon">
                    <img src="img/Actions Plus.png" alt="" />
                  </div>
                  <div className="text">Thêm và thư viện</div>
                </button>
              </li>
              <li>
                <button className="dropdown-item" href="#">
                  <div className="icon">
                    <img src="img/Comment.png" alt="" />
                  </div>
                  <div className="text">Viết bài đánh giá</div>
                </button>
              </li>
              <li>
                <button className="dropdown-item" href="#">
                  <div className="icon">
                    <img src="img/chia-se.png" alt="" />
                  </div>
                  <div className="text">Chia sẻ</div>
                </button>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="img-listen-radio-player">
        <img src="img/Sách.png" alt="" />
      </div>
      <div className="information-listen-radio-player">
        <div className="title">
          Chương 01: Bàn về kế hoạch cuộc sống của b..
        </div>
        <div className="text">
          Đoạn 01: Lời mở đầu - Cách cuộc sống vận hành và nh..
        </div>
      </div>

      <div className="range">
        <div id="timeline">
          <span id="current-time">0.45</span>
          <span id="total-time">04.00</span>
          <div className="slider" data-direction="horizontal">
            <div className="progress" style={{ width: "18.1111%" }}>
              <div className="pin" id="progress-pin" datamethod="rewind"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Radio;
