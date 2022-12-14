import Accordion from "react-bootstrap/Accordion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";
import BoxDateils from "../../components/BoxDateils/BoxDateils";
import BoxProduct from "../../components/BoxProduct";
import Button2 from "../../components/Button2";
import "./dateils.scss";
const Dateils = () => {
  return (
    <div className="containerr detail">
      <div className="roww">
        <div className="col-1a">
          <div className="tab-bar-menu-biboo">
            <Link to="/" className="logo-biboo">
              <img src="img/Logo.png" alt="" />
            </Link>
            <ul className="item-tab-bar-menu">
              <li>
                <Link to="/">
                  <img src="img/Home.png" alt="" />
                </Link>
              </li>
              <li>
                <Link to="/seach">
                  <img src="img/Search2.png" alt="" />
                </Link>
              </li>
              <li>
                <Link to="/categoryleft">
                  <img src="img/Feed List.png" alt="" />
                </Link>
              </li>
              <li>
                <Link to="/individualleft">
                  <img src="img/Profile.png" alt="" />
                </Link>
              </li>
            </ul>
            <div className="cover-img-tab-bar-menu">
              <img src="img/Layer 1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-11b">
          <div className="details-biboo">
            <div className="listen-to-read-books">
              <div className="header-listen-to-read-books">
                <div className="left-come-back">
                  <Link to="/">
                    <img src="img/Back Arrow.png" alt="" />
                  </Link>
                </div>
                <div className="right-icon">
                  <Link to="#" className="cart-right-icon">
                    <img src="img/Cart.png" alt="" />
                  </Link>
                  <Link to="#" className="bell-right-icon">
                    <img src="img/Group 321.png" alt="" />
                  </Link>
                  <Link to="#" className="avata-right-icon">
                    <img src="img/Avatar.png" alt="" />
                  </Link>
                </div>
              </div>
              <BoxDateils/>
            </div>
            <div className="book-details-details-biboo">
              <Tabs
                defaultActiveKey="gioithieu"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="gioithieu" title="Gi???i Thi???u">
                  <div className="time-books">
                    <div className="title">Th???i l?????ng:</div>
                    <div className="text">2 ti???ng 45 ph??t</div>
                  </div>
                  <div className="number-books">
                    <div className="title">S??? trang:</div>
                    <div className="text">203 trang</div>
                  </div>
                  <div className="Category-books">
                    <div className="title">Th??? lo???i:</div>
                    <div className="text">Ti???u thuy???t</div>
                  </div>
                  <div className="introduce-book">
                    <div className="title">Gi???i thi???u v??? cu???n s??ch</div>
                    <div className="text">
                      The war against Voldemort is not going well, even the
                      Muggles have been affected. Dumbledore is absent from
                      Hogwarts for long stretc hes of time, and the Order of the
                      Phoenix has alread. The war against Voldemort is not going
                      well, even the Muggles have been affected. Dumbledore is
                      absent from Hogwarts for long stretc hes of time, and the
                      Order of the Phoenix has alread.The war against Voldemort
                      is not going well, even the Muggles have been affected.
                      Dumbledore is absent from Hogwarts for long stretc hes of
                      time, and the Order of the Phoenix has alread.
                    </div>
                  </div>
                  <div className="Table-of-contents">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Ch????ng 01: B??n v??? k??? ho???ch cu???c s???ng trong 30 ph??t
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="paragraph paragraph-one">
                            <div className="title">
                              ??o???n 01: L???i m??? ?????u - C??ch cu???c s???ng v???n h??nh v??
                              nh???ng l???i cam k???t v???i cu???c ?????i c???a ch??nh m??nh
                            </div>
                            <div className="option-paragraph">
                              <Link to="/pdf" className="read-a-book">
                                ?????C EBOOOK
                              </Link>
                              <Button2/>
                            </div>
                          </div>
                          <div className="paragraph paragraph-two">
                            <div className="title">
                              ??o???n 02: H?????ng d???n t???o b???n ????nh gi?? c??ng vi???c chi
                              ti???t trong v??ng 24 ng??y thay ?????i cu???c s???ng b???n
                            </div>
                            <div className="option-paragraph">
                              <Link to="/pdf" className="read-a-book">
                                ?????C EBOOOK
                              </Link>
                              <Button2/>
                            </div>
                          </div>
                          <div className="paragraph paragraph-three">
                            <div className="title">
                              ??o???n 03: ??o???n 03: S???n ph???m khi???n b???n ch??a th??nh
                              c??ng trong c??ng vi???c kinh doanh c???a m??nh.
                            </div>
                            <div className="option-paragraph">
                              <div className="key-Paragraph">
                                <div className="icon-key-paragraph">
                                  <img src="img/Lock.png" alt="" />
                                </div>
                                <div className="text-key-paragraph">
                                  CH??A M??? KH??A
                                </div>
                              </div>
                              <button className="listen-radio">
                                <div className="icon">
                                  <img src="img/Cart2.png" alt="" />
                                </div>
                                <span>MUA S??CH ????? M??? KH??A TO??N B???</span>
                              </button>
                            </div>
                          </div>
                          <div className="paragraph paragraph-four">
                            <div className="title">
                              ??o???n 04: B?? quy???t gi??p b???n th??nh c??ng
                            </div>
                            <div className="option-paragraph">
                              <div className="key-Paragraph">
                                <div className="icon-key-paragraph">
                                  <img src="img/Lock-black.png" alt="" />
                                </div>
                                <div className="text-key-paragraph">
                                  CH??A M??? KH??A
                                </div>
                              </div>
                              <button className="listen-radio">
                                <div className="icon">
                                  <img src="img/Cart2.png" alt="" />
                                </div>
                                <span>MUA S??CH ????? M??? KH??A TO??N B???</span>
                              </button>
                            </div>
                          </div>
                          <div className="paragraph paragraph-four">
                            <div className="title">
                              ??o???n 05: 24 Th??i quen t???t ????? th??nh c??ng
                            </div>
                            <div className="option-paragraph">
                              <div className="key-Paragraph">
                                <div className="icon-key-paragraph">
                                  <img src="img/Lock-black.png" alt="" />
                                </div>
                                <div className="text-key-paragraph">
                                  CH??A M??? KH??A
                                </div>
                              </div>
                              <button className="listen-radio">
                                <div className="icon">
                                  <img src="img/Cart2.png" alt="" />
                                </div>
                                <span>MUA S??CH ????? M??? KH??A TO??N B???</span>
                              </button>
                            </div>
                          </div>
                          <div className="paragraph paragraph-two">
                            <div className="title">
                              T???ng k???t ch????ng 01: B??n v??? k??? ho???ch cu???c s???ng
                              trong 30p
                            </div>
                            <div className="option-paragraph">
                              <button className="read-a-book">
                                ?????C EBOOOK
                              </button>
                              <Button2/>
                            </div>
                          </div>
                          <div className="paragraph paragraph-five">
                            <div className="title">
                              ??n luy???n ki???n th???c ch????ng 01
                            </div>
                            <div className="option-paragraph">
                              <div className="read-a-book">8/10 C??U</div>
                              <Link to="/question" className="listen-radio">
                                <div className="icon">
                                  <img src="img/Read Book.png" alt="" />
                                </div>
                                <span>L??M B??I NGAY</span>
                              </Link>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Ch????ng 02: B??n v??? k??? ho???ch cu???c s???ng trong 120 ph??t
                          gi??p b???n c?? t???m nh??n
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          Ch????ng 03: Th??nh c??ng ?????n t??? nh???ng ??i???u nh??? nh???t nh???t
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          Ch????ng 04: B??n v??? t??m th??? kh???i nghi???p
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Tab>
                <Tab eventKey="danhgia" title="????nh gi??">
                  <h1>Trang ????nh gi??</h1>
                </Tab>
              </Tabs>
            </div>
            <div className="suggested-book">
             <BoxProduct/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dateils;
