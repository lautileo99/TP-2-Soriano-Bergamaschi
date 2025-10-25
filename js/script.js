import DirectionReveal from 'direction-reveal';

// Init with default setup
const directionRevealDemo = DirectionReveal();

// Init with all options at default setting
const directionRevealDefault = DirectionReveal({
  selector: '.direction-reveal',
  itemSelector: '.direction-reveal__card',
  animationName: 'swing',
  animationPostfixEnter: 'enter',
  animationPostfixLeave: 'leave',
  enableTouch: true,
  touchThreshold: 250
});