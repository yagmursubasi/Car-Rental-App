import type { FC } from "react";
import Hero from "../components/hero";
import Filter from "../components/filter";
import List from "../components/list";
import Footer from "../components/footer";

const Home: FC = () => {
  return (
    <div>
      <Hero />

      <Filter />

      <List />

      <Footer />
    </div>
  );
};

export default Home;
