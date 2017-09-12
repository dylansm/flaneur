import throttle from 'lodash/throttle'
import Zoombox from './js/zoombox'
import { clickTouch } from './js/utils'
import './scss/main.scss'
import './images/favicon.ico'

const zoombox = new Zoombox()
const header = document.getElementsByTagName('header')[0]
const wrapper = document.getElementById('wrapper')
const burger = document.getElementById('burger-button')

// burger.addEventListener(clickTouch, () => {
burger.addEventListener('click', () => {
  wrapper.classList.contains('nav-open') ? closeNavigation() : openNavigation()
}, false)

document.addEventListener('keyup', (e) => {
  if (e.keyCode === 27) {
    closeNavigation()
  }
}, false)

const closeNavigation = () => {
  wrapper.classList.remove('nav-open')
  burger.classList.remove('open')
  header.classList.remove('open')
}

const openNavigation = () => {
  wrapper.classList.add('nav-open')
  burger.classList.add('open')
  header.classList.add('open')
}

window.addEventListener('scroll', throttle(onScroll, 50), false)

var lastScrollY = 0;
var timeoutHideHeader;

function onScroll () {
  const docTop = (document.body.scrollTop || document.documentElement.scrollTop)
  // docTop > 21 ? wrapper.classList.add('fixed') : wrapper.classList.remove('fixed')
  if (docTop > 60) {
    if (lastScrollY > docTop) {
      wrapper.classList.add('reveal')
      window.clearTimeout(timeoutHideHeader)
      timeoutHideHeader = window.setTimeout(() => { wrapper.classList.remove('reveal') }, 2000)
    } else {
      wrapper.classList.remove('reveal')
    }
    wrapper.classList.add('fixed')
  } else {
    wrapper.classList.remove('fixed')
  }
  lastScrollY = docTop
}

// use link from header on first image in article listing
// const listing = document.querySelectorAll('article.listing')
// if (listing.length) {
  // for (var article of listing) {
    // const headerLink = article.querySelector('h2').querySelector('a').href
    // const firstImage = article.querySelector('img')
    // if (firstImage) {
      // firstImage.addEventListener(clickTouch, () => {
        // window.location.href = headerLink
      // })
    // }
  // }
// }

const postImages = document.querySelectorAll('figure.post-image')
for (var fig of postImages) {
  const caption = fig.getAttribute('data-caption')
  const figCaption = fig.querySelector('figcaption')
  figCaption.innerHTML = caption
}
