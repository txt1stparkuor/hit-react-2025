import avatar from "../../assets/avatar.jpg";
import "./styles.scss";
function Testimonials() {
  return (
    <div className="testimonials wrapper">
      <h1 className="testimonials__title">Testimonials</h1>
      <div className="testimonial-wrap">
        <i className="bi bi-arrow-left"></i>
        <div className="testimonial">
          <img src={avatar} className="testimonial__avatar" alt="" />
          <div className="testimonial__content">
            <h3 className="testimonial__name">John Fang</h3>
            <p className="testimonial__company">wordfaang.com</p>
            <p className="testimonial__desc">
              Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra
              enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam
              laoreet nulla.
            </p>
          </div>
        </div>
        <i className="bi bi-arrow-right"></i>
      </div>
      <div className="testimonials__paginations">
        <div className="testimonials__circle active"></div>
        <div className="testimonials__circle"></div>
        <div className="testimonials__circle"></div>
        <div className="testimonials__circle"></div>
      </div>
    </div>
  );
}

export default Testimonials;
