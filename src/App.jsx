import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";

function App() {
  const [newsData, setNewsData] = useState(null); // Holds the fetched news data
  const [search, setSearch] = useState("Bangladesh"); // Default search term

  const API_KEY = import.meta.env.VITE_API_KEY || "your-fallback-key"

  // Function to fetch data from the API
  const getData = async (query) => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles); // Update the news data
    } 
    
    catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Automatically fetch data when the component mounts or search term changes
  useEffect(() => {
    getData(search); // Fetch news for the default or updated search term
  }, [search]);

  return (
    <div>
      <Navbar setSearch={setSearch} getData={getData} />
      <Header setSearch={setSearch} getData={getData} />
      <Card data={newsData} />
    </div>
  );
}

export default App;
