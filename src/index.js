module.exports = function toReadable(number) {
  const fromNulltoNineteen = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tensToNinety = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let result = '';

  if (number < 20) {
    result = fromNulltoNineteen[number];
  } else if (number < 100) {
    const tens = Math.floor(number / 10);
    const units = number % 10;

    result = tensToNinety[tens];

    if (units > 0) {
      result = `${result} ${fromNulltoNineteen[units]}`;
    }
  } else if (number < 1000) {
    const hundreds = Math.floor(number / 100);
    const rest = number % 100;

    result = `${fromNulltoNineteen[hundreds]} hundred`;

    if (rest > 0) {
      result = `${result} ${toReadable(rest)}`;
    }
  }
  return result;
};
