import React from 'react';

class Person extends React.Component {
    render () {
        return(
            <div style={{
                fontSize: 100,
                color: 'black'
            }}>            
                <span className="material-icons">directions_walk</span>    
            </div>
        );
    }
}

export default Person;
