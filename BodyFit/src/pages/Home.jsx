import HeroBanner from "../components/HeroBanner"
import SearchExercises from "../components/SearchExercises"
import Exercises from "../components/Exercises"
import {Helmet} from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - BodyFit</title>
        <meta
          name="description"
          content="Find the best workouts and fitness routines with BodyFit."
        />
      </Helmet>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </div>
  )
}

export default Home
