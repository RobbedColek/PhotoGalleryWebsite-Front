import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

import NotFound from './NotFound.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
		<Header />
			<NotFound />
		<Footer />
      </div>
    );
  }
}

export default App;