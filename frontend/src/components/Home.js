import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <header id='home'>
      <div id='home-container'>
        <div className='text-center'>
          <p>Welcome to</p>
          <h1>
            Nav<span>Bam</span>
          </h1>
        </div>
        <Link to={'builder'} className='btn'>
          Take me to the builder
        </Link>
      </div>
    </header>
  );
};

export default Home;
