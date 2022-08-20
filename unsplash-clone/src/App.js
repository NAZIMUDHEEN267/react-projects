import "./scss/App.scss";
import { useState } from "react";
import Nav from "./components/Nav";

 function App() {

    const [image, setImage] = useState([]);

    // fetching data through api
    async function data () {
      try {
        const api = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=10`);
        const resources = await api.json();
        setImage(resources);
      } catch (err) {
        console.error("images not loaded due to: " + err);
      }
    }

    // data();

  return (
    <div className="app">
      <Nav />
      {
        image.map(data => (
          <img key={data.id} src={data.urls.small} alt="unsplash.jpg"/>
        ))
      }
    </div>
  )
}

export default App