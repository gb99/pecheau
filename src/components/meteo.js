import React from "react";

class Meteo extends React.Component {
    
    constructor(props) {
      super(props);
      this.isLoaded = false;
      this.x = this.props.x;
      this.y = this.props.y;
    }

    componentDidMount() {
        //
    }

    render() {
      const isLoaded = this.loaded;
      if (!isLoaded) {
        return <div>Loading...meteo for x={this.x} and y={this.y}</div>;
      } else {
        return (
         <div>
            Loaded
          </div>
        );
      }
    }
  }

  export default Meteo;