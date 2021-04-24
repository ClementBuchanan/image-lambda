'use strict';

import { s3Handler } from "./s3Handler";
const imageMagic = require("image-magic");

class ResizerHandler {
  constructor() { }

  async process(event) {
    const { size, image } = event.pathParameters
    return await this.resize(size, image)
  }
  async resize(size, path) {
    try {
      const sizeArray = size.split('x')
      const width = parseInt(sizeArray[0])
      const height = parseInt(sizeArray[1])
      const Key = path
      const newKey = '' + width + 'x' + height + '/' + path
      const Bucket = process.env.BUCKET
      const streamResize = imageMagic()
        .resize(width, height)
        .toFormat('png')

      const readStream = s3Handler.readStream({ Bucket, Key })
      const { writeStream, uploaded } = s3Handler.writeStream({ Bucket, Key: newKey })

      readStream
        .pipe(streamResize)
        .pipe(writeStream)

      await uploaded
      return newKey
    } catch (e) {
      console.log(e);
    }
  }
}

