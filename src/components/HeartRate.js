import React from 'react';

class HeartRate extends React.Component {
    render() {
        return(
            <div className="boxGrey col-md-2 col-6" >
                <span class="material-icons"             
                style={{
                fontSize:100,
                color:'red'
            }}>favorite</span>
                <p>{this.props.heart}</p>
            </div>

        );
    }
}

export default HeartRate;

/* <Icon name={"favorite"} color='black'/> */