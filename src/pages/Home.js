import Hero from "../components/Hero";
import Navigasi from "../components/Navigasi";
import Himage from "./../image/7.jpeg"

const Home = () => {
  return (
    <>
      <Navigasi />
      <Hero image={Himage} />
    </>
  );
};

export default Home;
