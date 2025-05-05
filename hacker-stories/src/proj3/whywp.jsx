import whywp from '../3images/walkdog.png';

export default function WhyWaddlePup() {
    return (
      <section className="container mt-5 pt-5 pb-5">
        <div className="row align-items-start">
          <div className="col-md-6">
            <h2 className="fw-bold">Why WaddlePup?</h2>
            <p>
              WaddlePup is designed to help you care for your pup with ease, confidence,
              and consistency—keeping everything in one place so you never miss a beat.
            </p>
            <p>
              With features like personalized dog profiles, daily health logs, and
              weather-based walk recommendations, the app helps ensure your dog’s
              well-being is always a priority.
            </p>
            <p>
              WaddlePup simplifies the day-to-day—so you can spend less time worrying,
              and more time wagging.
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
              <img src={whywp} alt="dog" className="img-fluid mb-3 rounded" style={{maxWidth: '65%'}} />
          </div>
        </div>
      </section>
    );
  }
  