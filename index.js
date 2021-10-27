'use strict'

const ImageData = require('@canvas/image-data')

/**
 * @param {ImageData} input
 * @returns {ImageData}
 */
function rotate180 (input) {
  const source = new Uint32Array(input.data.buffer, input.data.byteOffset, input.data.byteLength / 4)
  const output = new Uint32Array(input.width * input.height)

  let dst = 0
  let src = output.length

  while (src !== 0) {
    output[dst++] = source[--src]
  }

  return new ImageData(new Uint8ClampedArray(output.buffer, output.byteOffset, output.byteLength), input.width, input.height)
}

module.exports = function rotateImageData (image, degrees) {
  const normalizedDegrees = (((degrees % 360) + 360) % 360)

  switch (normalizedDegrees) {
    case 180:
      return rotate180(image)
    default:
      throw new Error(`Rotating by ${degrees} degrees not yet implemented`)
  }
}
