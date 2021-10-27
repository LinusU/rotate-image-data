/* eslint-env mocha */

'use strict'

const fs = require('fs')
const path = require('path')
const assert = require('assert')

const lodepng = require('lodepng')
const ImageData = require('@canvas/image-data')

const rotateImageData = require('./')

function loadFixture (name) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'fixtures', `${name}.png`), (err, data) => {
      if (err) return reject(err)

      resolve(lodepng.decode(data))
    })
  })
}

function addTestCase (name, degrees) {
  it(`should rotate ${name} by ${degrees} degrees`, () => {
    return Promise.all([
      loadFixture(name),
      loadFixture(`${name}-${degrees}`)
    ]).then((images) => {
      const actual = rotateImageData(images[0], degrees)

      assert.ok(actual instanceof ImageData)

      assert.strictEqual(actual.width, images[1].width)
      assert.strictEqual(actual.height, images[1].height)

      assert.strictEqual(actual.data.length, images[1].data.length, 'The rotated data should match the target data (length)')
      assert.deepStrictEqual(actual.data, images[1].data, 'The rotated data should match the target data (bytes)')
    })
  })
}

describe('Rotate Image Data', () => {
  addTestCase('sample1', 180)
  addTestCase('sample2', 180)
})
