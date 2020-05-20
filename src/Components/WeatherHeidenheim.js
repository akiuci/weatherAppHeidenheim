import React from 'react';
import '../App.css';
import axios from 'axios';

class WeatherHeidenheim extends React.Component {

	constructor() {
		super();
		this.state = {
			feels_like: '',
			humidity: '',
			pressure: '',
			temp: '',
			temp_max: '',
			temp_min: ''
		};
	}

	componentDidMount() {
		this.checkWeatherInformation();
	}

	checkWeatherInformation = () => {
		const url = 'https://api.openweathermap.org/data/2.5/weather?q=heidenheim&units=metric&appid=ef5df060095fcedae3c2cf0f42a64442';

		axios.get(url)
			.then(response => {
				console.log(response.data);
				console.log(response.data.main.feels_like);

				this.setState({feels_like: response.data.main.feels_like.toFixed()});
				this.setState({humidity: response.data.main.humidity.toFixed()});
				this.setState({pressure: response.data.main.pressure.toFixed()});
				this.setState({temp: response.data.main.temp.toFixed()});
				this.setState({temp_max: response.data.main.temp_max.toFixed()});
				this.setState({temp_min: response.data.main.temp_min.toFixed()});


			})
			.catch(error => {
				console.log(error);
			});
	};


	render() {
		return (
			<div>
				<h1>Current Weather in Heidenheim</h1>
				<p>
					Current Temperature: {this.state.temp} °C<br />
					(feels like: {this.state.feels_like} °C) <br />
					<br />
					Humidity: {this.state.humidity} % <br />
					Pressure: {this.state.pressure} Pa<br />
					<br />
					Max. Temp: {this.state.temp_max} °C<br />
					Min. Temp: {this.state.temp_min} °C<br />

				</p>
			</div>

		);
	}
}

export default WeatherHeidenheim;
