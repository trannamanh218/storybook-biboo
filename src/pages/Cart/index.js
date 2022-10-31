import { Link } from "react-router-dom";
import Menu from "../../components/Menu";
import './cart.scss'

const Cart = () => {
  return (
    <div className="cart">
      <div className="biboo">
        <Menu/>
        <div className="brb-items-left cart">
          <Link to="/dateils" className="icon-cart">
            <img src="img/Back Arrow.png" alt="" />
          </Link>
          <div className="title-cart">
            <p>Giỏ hàng</p>
          </div>
          <div className="products-cart">
            <ul>
              <li>
                <div className="left">
                  <div className="img-product">
                    <img src="img/Rectanglee1.png" alt="" />
                  </div>
                  <div className="information-product">
                    <div className="title">
                      <p>
                        Đàn ông sao hỏa đàn bà sao kim - Bí quyết giữ gìn hạnh
                        phúc gia đình
                      </p>
                    </div>
                    <div className="author">
                      <p>Nuyễn Hiến Lê</p>
                    </div>
                    <div className="piece">
                      <div className="left">
                        <p>1.800.000</p>
                      </div>
                      <div className="right">
                        <p>1.200.000 Đ</p>
                      </div>
                    </div>
                  </div>
                  <div className="product-selection">
                    <img src="img/checkmark-circle-fill.png" alt="" />
                  </div>
                </div>
                <div className="right">
                  <div className="delete-product">
                    <img src="img/delete.png" alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="left">
                  <div className="img-product">
                    <img src="img/Rectanglee2.png" alt="" />
                  </div>
                  <div className="information-product">
                    <div className="title">
                      <p>Mexican Gothic</p>
                    </div>
                    <div className="author">
                      <p>Nuyễn Hiến Lê</p>
                    </div>
                    <div className="piece">
                      <div className="left">
                        <p>1.800.000</p>
                      </div>
                      <div className="right">
                        <p>1.200.000 Đ</p>
                      </div>
                    </div>
                  </div>
                  <div className="product-selection">
                    <div></div>
                  </div>
                </div>
                <div className="right">
                  <div className="delete-product">
                    <img src="img/detele2.png" alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="left">
                  <div className="img-product">
                    <img src="img/Rectanglee3.png" alt="" />
                  </div>
                  <div className="information-product">
                    <div className="title">
                      <p>Way of the Nameless</p>
                    </div>
                    <div className="author">
                      <p>Nuyễn Hiến Lê</p>
                    </div>
                    <div className="piece">
                      <div className="left">
                        <p>1.800.000</p>
                      </div>
                      <div className="right">
                        <p>1.200.000 Đ</p>
                      </div>
                    </div>
                  </div>
                  <div className="product-selection">
                    <div></div>
                  </div>
                </div>
                <div className="right">
                  <div className="delete-product">
                    <img src="img/detele2.png" alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="footer-cart">
            <div className="left">
              <div className="title">
                <p>Hình thức thanh toán</p>
              </div>
              <div className="Payment-methods">
                <div className="icon">
                  <img src="img/MoMo_Logo 1.png" alt="" />
                </div>
                <div className="text">Thanh toán MOMO</div>
              </div>
            </div>
            <div className="right">
              <div className="title">
                <p>Mã giảm giá</p>
              </div>
              <div className="apply-button">
                <input type="text" placeholder="Nhập mã giảm giá" />
                <div className="text-right">ÁP DỤNG</div>
              </div>
              <div className="warning">
                <div className="icon-warning">
                  <img src="img/warning.png" alt="" />
                </div>
                <div className="text-warning">Mã giảm giá không đúng</div>
              </div>
            </div>
          </div>
        </div>
        <div className="brb-items-right">
          <div className="option-brb-items-right dp-flex">
            <div className="cart-option-brb-items-right">
              <img src="img/Cart.png" alt="" />
            </div>
            <div className="bell-option-brb-items-right">
              <img src="img/Group 321.png" alt="" />
            </div>
            <div className="user-option-brb-items-right">
              <img src="img/Avatar.png" alt="" />
            </div>
          </div>
          <div className="billing-Information">
            <div className="title">Thông tin thanh toán</div>
            <div className="order-value">
              <div className="provisional">
                <div className="title">Tạm tính</div>
                <div className="piece">1.200.000 đ</div>
              </div>
              <div className="endow">
                <div className="title">Áp dụng mã giảm giá</div>
                <div className="piece">-400.000 đ</div>
              </div>
              <div className="total-order">
                <div className="title">Tổng đơn hàng</div>
                <div className="piece">800.000 đ</div>
              </div>
            </div>
            <button className="button-pay">THANH TOÁN ĐƠN HÀNG</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart