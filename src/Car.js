import React from 'react';

class Car extends React.Component {
    constructor(zoom) {
        super(zoom);

        this.state = {
            zoom: this.props.zoom === "true",
            color: "#000000"
        };
    }
    redColor = () => {
        this.setState({ color: "#FF0000" });
    }
    blackColor = () => {
        this.setState({ color: "#000000" });
    }
    render() {
        return (
            <>
                <h2 onClick={() => this.state.color === "#000000" ? this.redColor() : this.blackColor()} style={{color: this.state.color}}>I am a car</h2>
                {this.state.zoom ? <h3>Vroom vroom</h3> : ""}
            </>
        );
    }
}

export default Car;