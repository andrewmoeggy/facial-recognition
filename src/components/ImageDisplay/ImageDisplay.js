import React from 'react';
import './ImageDisplay.scss';

const ImageDisplay = ({ image, box }) => {
  let imgDisplay = '';
  image === '' ?
    imgDisplay = '' :
    imgDisplay = <img className="image-display__image" src={image} alt="searched-face" />;

  return (
    <div className="image-display">
      {imgDisplay}
      <div className="bounding-box" style={{ top: box.topRow, left: box.leftCol, bottom: box.bottomRow, right: box.rightCol }}></div>
    </div>
  );
}
// topRow: 11.669046
// bottomRow: 102.37377000000001
// leftCol: 169.489161
// rightCol: 125.145918


export default ImageDisplay;