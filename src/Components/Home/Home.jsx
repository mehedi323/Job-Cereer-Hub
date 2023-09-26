import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategory from "../JobCategory/JobCategory";

 
const Home = () => {
  return (
    <div> 
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
      <h2>This is a home pages</h2>
    </div>
  );
};

export default Home;