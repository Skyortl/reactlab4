import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import City from "./City/City";

function App() {
  const creareCityObj = (name, creationYear, districts, image) => ({
    name,
    creationYear,
    districts,
    image,
  });
  const creareImageObj = (src, alt) => ({
    src,
    alt,
  });
  const cities = [
    creareCityObj(
      "name1",
      "1900",
      ["dist1", "dist2", "dist3"],
      creareImageObj(
        "https://pix10.agoda.net/hotelImages/3375/-1/f73547b49eadee36c6346f52a5b4f4fe.jpg?s=1024x768",
        "city1"
      )
    ),
    creareCityObj(
      "name2",
      "1800",
      ["dist1", "dist2"],
      creareImageObj(
        "https://www.juliusbaer.com/fileadmin/_processed_/8/5/csm_Peoples_Square_ed751964ea.jpg",
        "city2"
      )
    ),
    creareCityObj(
      "name3",
      "2222",
      ["dist1", "dist2", "dist3", "dist4"],
      creareImageObj(
        "https://anga.ua/files/anga/reg_images/vydy_z_burshchytskoho_v_dvalu_0001.jpg",
        "city3"
      )
    ),
  ];
  return (
    <div className="App">
      {cities.map((city) => (
        <City key={city.name} city={city}></City>
      ))}
    </div>
  );
}

export default App;
