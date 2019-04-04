import React from 'react';

import { Image } from 'react-bootstrap';

import img404 from '../../images/404.png';

function NotFound() {
  return (
    <div>
      <Image
        src={img404}
        alt="Page not found"
        className="img-responsive rounded mx-auto d-block" />
    </div>
  );
}

export default NotFound;