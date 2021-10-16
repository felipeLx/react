import React from 'react';

const weather = [
    {type: "clear"},
    {type: "cloud"},
    {type: "rain"},
    {type: "snow"}
];

function Category(props) {
    return (
      <div className={`Toast Toast--${props.type}`}>
        <main className="Toast__message">
          <header className="Toast__message-category">{props.type}</header>
        </main>
      </div>
    );
  }

  
  class WeatherCategory extends React.Component {
    render() {
      return (
        <div>
          {weather.map((weather, i) => (
            <Category category={weather.type} key={i} />
          ))}
        </div>
      );
    }
  }

export default WeatherCategory;