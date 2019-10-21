import React from 'react';
import './ImageSearch.scss';

function ImageSearch({ handleInput, onButtonSubmit }) {

  return (
    <div className="image-search">
      <h1 className="image-search__heading">Simple facial recognition App using the Clarifai API. </h1>
      <div className="image-search__section">
        <h2 className="image-search__heading-2">Enter a URL to detect faces!</h2>
        <input className="image-search__input" onChange={handleInput} />
        <button className="image-search__button" onClick={onButtonSubmit}>Submit</button>
      </div>
    </div>
  );

}

export default ImageSearch;