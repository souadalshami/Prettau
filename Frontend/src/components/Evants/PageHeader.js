import background from "../../assets/images/backgrounds/page-header-bg.jpg";
import page_header_shape_1 from "../../assets/images/shapes/page-header-shape-1.png";
import page_header_shape_2 from "../../assets/images/shapes/page-header-shape-2.png";
import page_header_shape_3 from "../../assets/images/shapes/page-header-shape-3.png";
import page_header_shape_4 from "../../assets/images/shapes/page-header-shape-4.png";
import { Link } from 'react-router-dom'

function PageHeader() {
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="page-header__shape-1 float-bob-y">
        <img src={page_header_shape_1} alt="" />
      </div>
      <div className="page-header__shape-2 float-bob-x">
        <img src={page_header_shape_2} alt="" />
      </div>
      <div className="page-header__shape-3 float-bob-y">
        <img src={page_header_shape_3} alt="" />
      </div>
      <div className="page-header__shape-4 float-bob-x">
        <img src={page_header_shape_4} alt="" />
      </div>
      <div className="container">
        <div className="page-header__inner">
          <h2>Events</h2>
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span className="icon-down-arrow"></span>
            </li>
            <li>Events</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
