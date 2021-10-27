# Rotate Image Data

Rotate a decoded raw image.

**Note:** Currently only 180 degrees rotation is implemented.

## Installation

```sh
npm install --save rotate-image-data
```

## Usage

```js
const rotateImageData = require('rotate-image-data')

const result = rotateImageData(image, 180)

console.log(result.width)
//=> 128

console.log(result.height)
//=> 256

console.log(result.data)
//=> Uint8ClampedArray [ ... ]
```

## API

### `rotateImageData(image, degrees)`

Rotate the image with the supplied number of degrees.

The `image` argument should be a `ImageData` instance, or any object with the following properties:

- `width: Number` - The width of the image, in pixels
- `height: Number` - The height of the image, in pixels
- `data: Buffer | TypedArray` - The image data, stored as raw pixel data in the RGBA order

Returns an `ImageData` instance.

## Related

- [`resize-image-data`](https://github.com/LinusU/resize-image-data) - Resize a decoded raw image
