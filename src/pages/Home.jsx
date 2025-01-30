import EnrollBanner from "../components/EnrollBanner";
import Campuses from "../components/Campuses";
import Courses from "../components/CoursesComp";
import Facilities from "../components/Facilities";
import Testimonials from "../components/Testimonials";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Courses />
      <Campuses />
      <Facilities />
      <Testimonials />
      <EnrollBanner />
    </>
  );
};

export default Home;
