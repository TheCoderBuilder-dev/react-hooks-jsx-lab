// src/components/Home.js
import { name, city } from '../data/user'; // Ensure these are correct

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: 'firebrick' }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
