module.exports = function toReadable (number) {
  const fromNulltoNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tensToNinety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number < 20) return fromNulltoNineteen[number];
  if (number < 100) return tensToNinety[Math.floor(number / 10)] + (number % 10 ? ' ' + fromNulltoNineteen[number % 10] : '');
  if (number < 1000) return fromNulltoNineteen[Math.floor(number / 100)] + ' hundred' + (number % 100 ? ' ' + toReadable(number % 100) : '');

  return '';
}
