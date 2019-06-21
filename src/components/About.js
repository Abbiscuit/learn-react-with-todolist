import React from 'react';
import Rainbow from '../hoc/Rainbow';
import Wall from '../wallpaper2.jpg';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <img src={Wall} alt="wall" style={{ width: '100%' }} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea molestias
        sed aspernatur iste similique ipsam ipsa dolorum aliquid minima fugiat
        vel at, maiores consequatur odio voluptate ducimus nemo assumenda optio.
      </p>
    </div>
  );
};

export default Rainbow(About);
