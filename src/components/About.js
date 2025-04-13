// src/components/About.js

import React from 'react';
import { image } from '../data/user';  // Importing image variable from user.js

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is some content about me.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
