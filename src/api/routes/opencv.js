import { Router } from 'express';
import * as cv from 'opencv4nodejs';
import { join } from 'path';
import { writeFile, readFile } from 'fs-extra';
import { error } from '../utils';

const router = Router();
router.get(
  '*',
  error.handler(async (req, res, next) => {
    // let img, imgCopy;

    // // try {
    // imgCopy = cv
    //   .imread(join(process.env.RAZZLE_PUBLIC_DIR, 'img.jpg'))
    //   .resizeToMax(500);
    // // } catch (err) {
    // //   throw err;
    // // }

    // try {
    //   await writeFile(
    //     join(process.env.RAZZLE_PUBLIC_DIR, 'img copy.jpg'),
    //     imgCopy
    //   );
    // } catch (err) {
    //   throw err;
    // }
    // res.send(img);
    // const {
    //   cv,
    //   getDataFilePath,
    //   drawBlueRect
    // } = require('../utils');
    // cv.
    const image = cv.imread(join(process.env.RAZZLE_PUBLIC_DIR, 'img2.jpg'));
    const classifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2);

    // detect faces
    const { objects, numDetections } = classifier.detectMultiScale(
      image.bgrToGray()
    );
    console.log('faceRects:', objects);
    console.log('confidences:', numDetections);

    if (!objects.length) {
      throw new Error('No faces detected!');
    }

    // draw detection
    const numDetectionsTh = 10;
    objects.forEach((rect, i) => {
      const thickness = numDetections[i] < numDetectionsTh ? 1 : 2;
      // cv.drawBlueRect(image, rect, { thickness });
    });

    cv.imshowWait('face detection', image);
    console.log('finish');
    try {
      await writeFile(
        join(process.env.RAZZLE_PUBLIC_DIR, 'img2 copy.jpg'),
        image
      );
    } catch (err) {
      throw err;
    }
    const file = await readFile(
      join(process.env.RAZZLE_PUBLIC_DIR, 'img2 copy.jpg')
    );
    res.sendFile(file);
  })
);

export default router;
