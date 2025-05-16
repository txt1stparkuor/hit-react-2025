import "./styles.scss";
function Testimonial() {
  return (
    <div className="testimonial-container">
      <h2>What people are saying...</h2>
      <div className="testimonials wrapper  ">
        <div className="testimonial">
          <div className="testimonial__avatar">
            <img
              src="https://start-bootstrap-ten.vercel.app/assets/testimonials-1-CNxFrjqD.jpg"
              alt=""
            />
          </div>
          <h3 className="testimonial__name">Margaret E.</h3>
          <p className="testimonial__comment">
            "This is fantastic! Thanks so much guys!"
          </p>
        </div>
        <div className="testimonial">
          <div className="testimonial__avatar">
            <img
              src="https://start-bootstrap-ten.vercel.app/assets/testimonials-2-Ui5WBQGD.jpg"
              alt=""
            />
          </div>
          <h3 className="testimonial__name">Fred S.</h3>
          <p className="testimonial__comment">
            "Bootstrap is amazing. I’ve been using it to create lots of super
            nice landing pages."
          </p>
        </div>
        <div className="testimonial">
          <div className="testimonial__avatar">
            <img
              src="https://start-bootstrap-ten.vercel.app/assets/testimonials-3-CdIuPdtQ.jpg"
              alt=""
            />
          </div>
          <h3 className="testimonial__name">Sarah W.</h3>
          <p className="testimonial__comment">
            "Thanks so much for making these free resources available to us!"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
