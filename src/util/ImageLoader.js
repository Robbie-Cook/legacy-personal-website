import React, { Component } from "react"
/**
 *  Load images from a given folder location
 */

class ImageLoader {
  // Import all photos from carousel folder
  importAll(r) {
    return r.keys().map(r)
  }

  loadImages(path) {
    return this.importAll(require.context(path, false, /\.(png|jpe?g|svg)$/))
  }
}

export { ImageLoader }
