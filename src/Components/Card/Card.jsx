/* eslint-disable react/prop-types */

import "./Card.css";

const Card = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="no-topic-text">No news available. Please search for something.</p>;
  }

  const readMore = (url) => {
    window.open(url); // Opens the URL in a new tab
  };

  return (
    <div className="card-container">
      {data.map((currentItem, index) => (
        <div className="card" key={index}>
          <img src={currentItem.urlToImage}/>

          <div className="card-content">
            <a href="#" className="title" onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                readMore(currentItem.url);
              }}
            >
              {currentItem.title}
            </a>

            <p>{currentItem.description}</p>
            <button onClick={() => {readMore(currentItem.url); }}> Read More </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
