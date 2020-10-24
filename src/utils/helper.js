export const getPaddedNumberWithZero = ({ number, paddedNumber }) => {
  return String(number).padStart(paddedNumber, '0');
};

export const formatTime = time => {
  const hours = getPaddedNumberWithZero({
    number: Math.floor(time / 3600000),
    paddedNumber: 2,
  });
  const minutes = getPaddedNumberWithZero({
    number: Math.floor(time / 60000) % 60,
    paddedNumber: 2,
  });
  const seconds = getPaddedNumberWithZero({
    number: Math.floor(time / 1000) % 60,
    paddedNumber: 2,
  });
  const miliseconds = getPaddedNumberWithZero({
    number: Math.floor(time / 10) % 100,
    paddedNumber: 3,
  });
  return `${hours} : ${minutes} : ${seconds} : ${miliseconds}`;
};
