var floatingLabel = require('floating-label')
var useDocumentElement

floatingLabel.init()

function scrollTo (to, duration) {
  // check if we should use document.body or document.documentElement
  if (!useDocumentElement) {
    document.documentElement.scrollTop = 1
    useDocumentElement = (document.documentElement.scrollTop === 1)
  }

  var element = useDocumentElement ? document.documentElement : document.body
  var start = element.scrollTop
  var change = to - start
  var currentTime = 0
  var increment = 20
  var animateScroll

  animateScroll = function animateScroll () {
    currentTime += increment

    var val = Math.easeInOutQuad(currentTime, start, change, duration)

    element.scrollTop = val

    if (currentTime < duration) {
      setTimeout(animateScroll, increment)
    }
  }

  if (duration === 0) {
    element.scrollTop = to
  } else {
    animateScroll()
  }
}

function scrollToAnchor (evt) {
  evt = evt || window.event

  if (!/^#/.test(evt.target.getAttribute('href'))) {
    return
  }

  evt.preventDefault()

  var targetSelector = evt.target.getAttribute('href')
  var target = document.querySelector(targetSelector)

  scrollTo(target.offsetTop, 300)
}

if (/thanks/.test(window.location.search)) {
  var thankYouMessage = document.querySelector('p.thanks-message')

  thankYouMessage.classList.remove('hidden')
  thankYouMessage.style.height = 'auto'
  thankYouMessage.style.height = thankYouMessage.clientHeight + 'px'

  setTimeout(function () {
    thankYouMessage.classList.add('hiding')

    setTimeout(function () {
      thankYouMessage.classList.add('hidden')
      thankYouMessage.classList.remove('hiding')
      thankYouMessage.style.height = '0'
    }, 200)
  }, 10000)
}

Math.easeInOutQuad = function easeInOutQuad( t, b, c, d ) {
  t /= d / 2;

  if ( t < 1 ) {
    return c / 2 * t * t + b;
  }

  t--;

  return -c / 2 * ( t * ( t - 2 ) - 1 ) + b;
};

document.body.addEventListener('click', scrollToAnchor)
document.body.addEventListener('touchend', scrollToAnchor)
