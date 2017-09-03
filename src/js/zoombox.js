import { clickTouch } from './utils.js'

export default class Zoombox {
  constructor () {
    // uncomment the following to prevent zoombox in article listing pages
    // const single = document.querySelector('article.single')
    //  if (single) { // don't zoom on listing pages since those images will navigate to single page
    this.figures = document.querySelectorAll('figure.post-image.zoombox')
    if (this.figures) {
      this.initListeners()
    }
    // }
  }

  initListeners () {
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        this.closeZoombox()
      }
    }, false)
    for (const fig of this.figures) {
      const image = fig.getElementsByTagName('img')[0]
      image.addEventListener('click', (e) => {
        if (!document.getElementById('zoombox')) {
          this.zoombox = this.initZoombox()
        }
        const el = e.target
        const node = el.parentNode.cloneNode(true)
        this.zoombox.querySelector('div.inner').appendChild(node)
        window.setTimeout(function () { document.body.classList.add('zoombox') }, 50)
      }, false)
    }
  }

  initZoombox () {
    const container = document.createElement('div')
    container.setAttribute('id', 'zoombox')
    const close = document.createElement('div')
    close.setAttribute('class', 'close')
    close.addEventListener(clickTouch, () => { this.closeZoombox() }, false)
    container.appendChild(close)
    const inner = document.createElement('div')
    inner.setAttribute('class', 'inner')
    container.appendChild(inner)
    document.body.appendChild(container)
    return container
  }

  closeZoombox () {
    document.body.classList.remove('zoombox')
    this.zoombox.querySelector('div.inner').innerHTML = ''
  }
}
