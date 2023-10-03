import React from "react";
import Slider from "react-slick";
import Lightbox from "react-image-lightbox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-lightbox/style.css";

var photos = [
  "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
  "https://source.unsplash.com/Dm-qxdynoEc/800x799",

  "https://source.unsplash.com/qDkso9nvCg0/600x799",
  "https://source.unsplash.com/qDkso9nvCg0/600x799",
  "https://source.unsplash.com/qDkso9nvCg0/600x799"
];
class Certification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: photos,
      current: ""
    };
  }

  getSliderSettings() {
    return {
      dots: true,
      autoplay: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
  }

  handleClickImage = (e, image) => {
    e && e.preventDefault();

    this.setState({
      current: image
    });
  };

  handleCloseModal = e => {
    e && e.preventDefault();

    this.setState({
      current: ""
    });
  };

  render() {
    const settings = this.getSliderSettings();
    const { images, current } = this.state;

    return (
      <div className="carousel">
        <Slider {...settings}>
          {images.map(image => (
            <div>
              <img
                src={image}
                alt="logo"
                onClick={e => this.handleClickImage(e, image)}
              />
              <div>hello</div>
            </div>
          ))}
        </Slider>

        {current && (
          <Lightbox mainSrc={current} onCloseRequest={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default Certification;
