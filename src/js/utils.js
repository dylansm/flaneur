function getTouchEnabled () {
  return ("ontouchstart" in window || !!(navigator.msMaxTouchPoints))
}

export const touchEnabled = getTouchEnabled()
export const clickTouch = getTouchEnabled() ? 'touchstart' : 'click'
