import ImageData = require('@canvas/image-data')

interface ImageLike {
  width: number
  height: number
  data: Uint8Array | Uint8ClampedArray
}

declare function rotateImageData(image: ImageLike, degrees: number): ImageData

export = rotateImageData
