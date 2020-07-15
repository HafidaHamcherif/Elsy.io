import React from 'react';
import Person from '../src/components/Person';

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;

class App extends React.Component {
  render() {
    return(
      <div className='container-fluid'>
        <Person className= "box"  className= "col-md-2" className= "col-6"/>
      </div>
    );
  }
}

export default App;
