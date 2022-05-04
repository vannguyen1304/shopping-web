import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="container-fluid">
      <div className="row">
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
          <h5>chăm sóc khách hàng</h5>
          <ul>
            <li>Trung Tâm Trợ Giúp</li>
            <li>Hướng Dẫn Mua Hàng</li>
            <li>Hướng Dẫn Bán Hàng</li>
            <li>Thanh toán</li>
          </ul>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
          <h5>về chúng tôi</h5>
          <ul>
            <li>giới thiệu</li>
            <li>tuyển dụng</li>
            <li>chính sách bảo mật</li>
            <li>Liên hệ với truyền thông</li>
            <li>chương trình tiếp thị liên kết</li>
          </ul>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
          <h5>theo dõi chúng tôi trên</h5>
          <ul>
            <li>facebook</li>
            <li>instagran</li>
            <li>linkedln</li>
          </ul>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
          <h5>tải ứng dụng tại</h5>

          <ul>
            <li>
              <i className="fa-brands fa-apple"></i> app store
            </li>
            <li>
              <i className="fa-brands fa-google-play"></i>google play
            </li>
          </ul>
        </div>
        <h4>
          Create by <a href="#">@Nguyen Van Nguyen</a>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
