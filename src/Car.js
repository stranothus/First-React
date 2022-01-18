import React from 'react';

class Car extends React.Component {
    constructor(zoom) {
        super(zoom);

        this.state = {
            zoom: this.props.zoom === "true",
            color: "#000000"
        };
    }
    render() {
        return (
            <>
                <h2>I am a car</h2>
                {this.state.zoom ? <h3>Vroom vroom</h3> : ""}
            </>
        );
    }
}

export default Car;