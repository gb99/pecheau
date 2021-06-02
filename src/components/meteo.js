import React from "react";

class Meteo extends React.Component {
    
    constructor(props) {
      super(props);
      this.x = this.props.x;
      this.y = this.props.y;
      this.state = {
        isLoaded: false,
        error: null,
        weatherText: null,
        weatherIcon: null
      }
    }

    componentDidMount() {
      var apiKey = '275d268238364a9f865160315210206';
      var apiUrl = 'http://api.worldweatheronline.com/premium/v1/weather.ashx';
      var requestUrl = `${apiUrl}?key=${apiKey}&q=${this.y},${this.x}&mca=no&fx=no&lang=fr&format=json`;
      fetch(requestUrl)
      .then(res => res.json())
      .then(
        (result) => {
          if(result.data.error) {
            this.setState({
              isLoaded: true,
              error: true
            });
          } else {
            var weatherText;
            if (result && result.data && result.data.current_condition && result.data.current_condition[0] && result.data.current_condition[0].lang_fr && result.data.current_condition[0].lang_fr[0])
              weatherText = result.data.current_condition[0].lang_fr[0].value;
            else if (result && result.data && result.data.current_condition && result.data.current_condition[0] && result.data.current_condition[0].weatherDesc && result.data.current_condition[0].weatherDesc[0])
              weatherText = result.data.current_condition[0].weatherDesc[0].value;
            var weatherIcon;
              if (result && result.data && result.data.current_condition && result.data.current_condition[0] && result.data.current_condition[0].weatherIconUrl && result.data.current_condition[0].weatherIconUrl[0])
              weatherIcon = result.data.current_condition[0].weatherIconUrl[0].value;
            this.setState({
              isLoaded: true,
              weatherText: weatherText,
              wearherIcon: weatherIcon
            });
          }
        }
      )
    }

    render() {
      const { isLoaded, error, weatherText, weatherIcon } = this.state;
      if (!isLoaded) {
        return <div>Chargement de la météo...</div>;
      } else if (error) {
        return <div>La météo n'a pas pu être chargée.</div>;
      } else {
        return (
         <div>
            {weatherText}
          </div>
        );
      }
    }
  }

  export default Meteo;