import Breadcrumb from "../components/Breadcrumb";
import about from "../assets/images/about.png";

const AboutUs = () => {
  return (
    <div>
      <Breadcrumb title="About Us" />
      <div className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>SUBHAS INTER COLLEGE</h1>
            <p>
              <b>
                MIT Art Design and Technology University has been making
                concerted efforts for taking a leap towards the world class
                education.
              </b>
              <br />
              It is amongst the leading Government recognized Private University
              within the ambit of the renowned MIT Group of Institutions, Pune.
              MIT ADT University is a multi-disciplinary university which is
              famous for its sprawling lush green campus of 125 acres and
              picturesque location, spanning over the large area of 125 acres.
              University is the manifestation of the serenity of Mother Nature
              and aesthetically built on the banks of Mula-Mutha river.
              <br />
              The University is driven by the vision of delivering the world –
              class value-based education and Holistic development of the
              student’s personality, enabling them to transform themselves into
              a Future Global Leaders.
            </p>
          </div>
          <div className="about-col">
            <img src={about} alt="About" />
          </div>
        </div>

        <div className="mission">
          <h1>Mission</h1>
          <p>
            The Mission of MIT Art, Design and Technology University is to
            provide impetus to faculty, learners, and staff by developing their
            innate intellectual capabilities, creative abilities and
            entrepreneurial mind-set for the socio-economic development of the
            nation. We empower learners to become adaptive and agile global
            professionals through unique specialized programs building
            academia-industrial partnership. We nurture learners to be
            intellectually curious, technologically equipped, mentally sound,
            physically fit, spiritually elevated, socio-culturally sensitive,
            environmentally conscious through continuous holistic education for
            the ever-evolving world. We provide technology-enabled
            learner-driven curriculum, value added courses, simulated learning
            environments, state-of-the-art infrastructure and opportunities for
            community engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
