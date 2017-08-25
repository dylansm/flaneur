import { clickTouch } from './utils.js'

export default class Lockbox {
  constructor () {
    const single = document.querySelector('article.single')
    if (single) {
      this.figures = document.querySelectorAll('figure.post-image')
      if (this.figures) {
        this.initListeners()
      }
    }
  }

  initListeners () {
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        this.closeLockbox()
      }
    }, false)
    for (const fig of this.figures) {
      const image = fig.getElementsByTagName('img')[0]
      image.addEventListener('click', (e) => {
        if (!document.getElementById('lockbox')) {
          this.lockbox = this.initLockbox()
        }
        const el = e.target
        const node = el.parentNode.cloneNode(true)
        this.lockbox.querySelector('div.inner').appendChild(node)
        window.setTimeout(function () { document.body.classList.add('lockbox') }, 50)
      }, false)
    }
  }

  initLockbox () {
    const container = document.createElement('div')
    container.setAttribute('id', 'lockbox')
    const close = document.createElement('div')
    close.setAttribute('class', 'close')
    close.addEventListener(clickTouch, () => { this.closeLockbox() }, false)
    container.appendChild(close)
    const inner = document.createElement('div')
    inner.setAttribute('class', 'inner')
    container.appendChild(inner)
    document.body.appendChild(container)
    return container
  }

  closeLockbox () {
    document.body.classList.remove('lockbox')
    this.lockbox.querySelector('div.inner').innerHTML = ''
  }
}
