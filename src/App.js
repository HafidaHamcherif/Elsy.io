import React from 'react';
import Person from '../src/components/Person';
import HeartRate from '../src/components/HeartRate';

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
        <Person row="box"/> 
        <HeartRate heart= {MIN_HEART}/>
      </div>
    );
  }
}

export default App;
