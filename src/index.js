import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';
import Spinner from './Spinner.js';
import useLocation from './useLocation.js';

const App = () => {
  const [lat, errorMessage] = useLocation()

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  }else if(lat){
    content = <SeasonDisplay lat={lat} />;
  }else{
    content = <Spinner message="Please Accept Location Request" />;
  }

  return(
    <div className="red border">
      {content}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));