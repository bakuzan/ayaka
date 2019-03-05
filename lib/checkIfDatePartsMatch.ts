const checkIfDatePartsMatch = (
  d1: string | number | Date,
  d2: string | number | Date
) => {
  const dx = new Date(d1);
  const dy = new Date(d2);
  return {
    year: dx.getFullYear() === dy.getFullYear(),
    month: dx.getMonth() === dy.getMonth(),
    date: dx.getDate() === dy.getDate()
  };
};

export default checkIfDatePartsMatch;
