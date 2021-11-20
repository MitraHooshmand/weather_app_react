import "./App.css";

export default function App() {
  let WeatherData = {
    city: "Tehran",
    temp: "15",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: "11%",
    wind: "5km/h",
    desc: "overcast clouds",
  };
  return (
    <div className="App">
      <div className="card card-bg">
        <div className="card-body">
          <div className="row">
            <div className="col-5">
              <h2>{WeatherData.city}</h2>
              <span>,IR</span>
            </div>
            <div className="col-4"></div>
            <div className="col-3">
              <a href="/" className="currentTemp">
                Current Temp 📍
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <h1>
                <span>{WeatherData.temp} </span>
                <span className="cilciusFarenhayt">
                  <a href="/" className="active">
                    °C{" "}
                  </a>
                  |<a href="/">°F</a>
                </span>
              </h1>
              <div className="col">
                <h3>{WeatherData.desc}</h3>
              </div>
            </div>
            <div className="col-6">
              <img src={WeatherData.imgUrl} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-4 summeriInfo">
              <i className="far fa-clock smallIcon"></i>
              <p>Fri 9:26</p>
            </div>
            <div className="col-4 summeriInfo">
              <i className="fas fa-tint smallIcon"></i>
              <p>Humidity:</p>
              <p>{WeatherData.humidity}</p>
            </div>
            <div className="col-4 summeriInfo">
              <i className="fas fa-wind smallIcon"></i>
              <p>Wind:</p>
              <p> {WeatherData.wind}</p>
            </div>
          </div>

          <form>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-8">
                <input
                  className="form-control"
                  list="datalistOptions"
                  placeholder="Type to search..."
                />
              </div>
              <div className="col-2">
                <button type="submit" className="btn btn-success">
                  GO
                </button>
              </div>
            </div>
            <hr />
          </form>

          <div className="row">
            <div className="col-12">
              <div className="openSourceContainer">
                <a
                  href="https://github.com/mita4824/weatherApp"
                  className="openSource"
                >
                  Open-Source{" "}
                </a>
                <span className="small">Code by Mitra Hsh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
