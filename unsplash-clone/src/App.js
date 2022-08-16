import { useState } from "react"

 function App() {

    const [image, setImage] = useState([]);

    // fetching data through api
    async function data () {
      try {
        const api = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}`);
        const resources = await api.json();
        setImage(resources);
      } catch (err) {
        console.log(err);
      }
    }

    data();

  return (
    <div className="app">
      {
        image.map(data => (
          <img key={data.id} src={data.urls.small} alt="unsplash.jpg"/>
        ))
      }
    </div>
  )
}

export default App