/* eslint-disable react/prop-types */

import "./Header.css";

const Header = ({ setSearch, getData }) => {

  // Handle user input from buttons
  const userInput = (event) => {
    setSearch(event.target.value); // Update search state
    getData(); // Fetch new data based on updated search
  };

  return (
    <div>
      <div className="head">
        <p>Stay Updated with Daily NewZ</p>
      </div>

      <div className="category-btn">
        <button onClick={userInput} value="Sports">Sports</button>
        <button onClick={userInput} value="Politics">Politics</button>
        <button onClick={userInput} value="Entertainment">Entertainment</button>
        <button onClick={userInput} value="Health">Health</button>
      </div>
    </div>
  );
};

export default Header;
