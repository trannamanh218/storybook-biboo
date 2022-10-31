import { Link } from "react-router-dom";
import BoxHotProduct from "../BoxHotProduct";
import Target from "../Target";
import "./BrbItemsRight.scss"
const BrbItemsRight = () => {
  return (
    <div className="brb-items-right">
      <div className="option-brb-items-right dp-flex">
        <div className="cart-option-brb-items-right">
          <img src="img/Cart.png" alt="" />
        </div>
        <div className="bell-option-brb-items-right">
          <img src="img/Group 321.png" alt="" />
        </div>
        <Link to="/login" className="user-option-brb-items-right">
          <img src="img/Avatar.png" alt="" />
        </Link>
      </div>
      <div className="listen-a-lot-brb-items-right">
        <div className="title-listen-a-lot">
          <p>Nghe Nhiều Nhất</p>
        </div>
        <BoxHotProduct/>
      </div>
      <Target/>
    </div>
  );
};
export default BrbItemsRight;
