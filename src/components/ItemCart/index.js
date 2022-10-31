import "./itemcart.scss";
const ItemCart = () => {
  return (
    <li>
      <div className="left">
        <div className="img-product">
          <img src="img/Rectanglee1.png" alt="" />
        </div>
        <div className="information-product">
          <div className="title">
            <p>
              Đàn ông sao hỏa đàn bà sao kim - Bí quyết giữ gìn hạnh phúc gia
              đình
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
  );
};
export default ItemCart;
