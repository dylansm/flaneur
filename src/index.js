import './scss/main.scss'
import './images/favicon.ico'
import { throttle } from 'lodash'

import { clickTouch } from './js/utils.js'

const header = document.getElementsByTagName('header')[0]
const wrapper = document.getElementById('wrapper')
const burger = document.getElementById('burger-button')

burger.addEventListener(clickTouch, () => {
  wrapper.classList.contains('nav-open') ? closeNavigation() : openNavigation()
  // document.body.classList.contains('nav-open') ? closeNavigation() : openNavigation()
}, false)

document.addEventListener('keyup', (e) => {
  if (e.keyCode === 27) { closeNavigation() }
}, false)

const closeNavigation = () => {
  wrapper.classList.remove('nav-open')
  // document.body.classList.remove('nav-open')
  burger.classList.remove('open')
  header.classList.remove('open')
}

const openNavigation = () => {
  wrapper.classList.add('nav-open')
  // document.body.classList.add('nav-open')
  burger.classList.add('open')
  header.classList.add('open')
}

window.addEventListener('scroll', throttle(onScroll.bind(this), 50), false)

function onScroll () {
  const docTop = (document.body.scrollTop || document.documentElement.scrollTop)
  docTop > 21 ? wrapper.classList.add('fixed') : wrapper.classList.remove('fixed')
}