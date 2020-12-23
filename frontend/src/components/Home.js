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
        <Link to={'builder'} className='btn' id='builder-button'>
          Take me to the builder
        </Link>
        <div id='builder-info' className='text-center'>
          <h4>:,(</h4>
          <p>Unfortunately this builder is not optimized for mobile. Please visit on a tablet or computer.</p>
        </div>
      </div>
    </header>
  );
};

export default Home;
