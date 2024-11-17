/* eslint-disable react/prop-types */

import "./Navbar.css";

const Navbar = ({ setSearch, getData }) => {
  const handleInput = (e) => {
    setSearch(e.target.value); // Update search state
  };

  const handleSearch = () => {
    getData(); // Fetch new data when search button is clicked
  };

  const userInput = (event) => {
    setSearch(event.target.value);
    getData();
  };

  return (
    <div>
      <nav>
        <div>
          <ul>
            <a href="#" onClick={userInput} value="Trending">Trending </a>
            <a href="#" onClick={userInput} value="All News"> All News </a>
          </ul>
        </div>

        <div>
          <h1>DAILY NEWZ</h1>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search News" onChange={handleInput} />
          <button onClick={handleSearch}>Search</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
