import "./App.scss";

import sun from "./imgs/sun.png";
import wind from "./imgs/wind.png";
import humidity from "./imgs/drop.png";

function App() {
	return (
		<div className="App">
			<div className="App-top">
				<p>
					<span className="Header-City">New York, NY</span> is looking{" "}
					<span className="Header-Forecast">sunny</span> on{" "}
					<span className="Header-Date">
						Wednesday the 28<span className="Date-th">th</span>
					</span>
				</p>
			</div>
			<div className="App-middle">
				<div className="Wind-Speed-Container">
					<img src={wind} alt="" />
					<p>
						7 <span className="unit">mph</span>
					</p>
				</div>
				<div className="Main-forecast-container">
					<div className="Main-Forecast-image">
						<img src={sun} alt="" />
						<p>6</p>
					</div>
					<p>28°</p>
					<div className="High-Low-container">
						<p>25°</p>
						<p>32°</p>
					</div>
				</div>
				<div className="Humidity-container">
					<img src={humidity} alt="" />
					<p>
						67<span className="unit">%</span>
					</p>
				</div>
			</div>
			<div className="App-bottom">
				<button></button>
				<div className="Time-interval-container">
					<p>5pm</p>
					<p>6pm</p>
					<p>7pm</p>
					<p>8pm</p>
					<p>9pm</p>
				</div>
				<div className="Time-interval-temps"></div>
			</div>
		</div>
	);
}

export default App;
