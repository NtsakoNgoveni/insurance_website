import {images} from "../../images";
import "./banner.scss";

const Banner = () => {
  return <div>
    <div className="banner container">
      <picture>
        <source media="(max-width:768px" srcSet={images.works_mobile} />
        <img src={images.works_desktop} alt="" />
      </picture>
      <div className="banner__wrapper">
        <div className="title">
          <h2 className="title1">Find Out More <br /> About How We Work
          </h2>
        </div>
        <div className="btn">How We Work</div>
      </div>
    </div>
  </div>;
};

export default Banner;
