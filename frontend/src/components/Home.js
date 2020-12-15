import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id='home'>
      <p>Welcome to</p>
      <h1>
        Nav<span>Bam</span>
      </h1>
      <Link to={'builder'} className='btn'>
        Take me to the builder
      </Link>
    </div>
  );
};

export default Home;
