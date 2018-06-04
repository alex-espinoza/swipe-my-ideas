setTimeout(function() {
  document.body.classList.add('show');
}, 100);

tippy('.disclaimer-link', {
  theme: 'bin',
  arrow: true,
  arrowType: 'sharp',
  allowTitleHTML: true,
  size: 'large',
  interactive: true,
});
