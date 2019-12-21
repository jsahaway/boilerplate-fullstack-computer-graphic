import React from 'react';

// import { imread } from 'opencv4nodejs';
// const path = require('path');
// import asset from './img.jpg';

export default class Blop extends React.Component {
  renderImage(img) {
    const { canvas } = this;
    // const matRGBA =
    //   img.channels === 1
    //     ? img.cvtColor(cv.COLOR_GRAY2RGBA)
    //     : img.cvtColor(cv.COLOR_BGR2RGBA);

    // canvas.height = img.rows;
    // canvas.width = img.cols;
    // const imgData = new ImageData(
    //   new Uint8ClampedArray(matRGBA.getData()),
    //   img.cols,
    //   img.rows
    // );
    // const ctx = canvas.getContext('2d');
    // ctx.putImageData(imgData, 0, 0);
  }

  componentDidMount() {
    // const img = cv.imread(asset).resizeToMax(500);
    this.renderImage();
  }

  render() {
    return (
      <div>
        <h1> opencv4nodejs with webpack and react </h1>
        <canvas
          ref={el => {
            this.canvas = el;
          }}
        ></canvas>
      </div>
    );
  }
}
