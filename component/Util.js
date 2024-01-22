export default function changeCurrency(num) {
  return Number(num.toFixed(3)).toLocaleString();
}

export const splitPrice = (price, char = ",") => {
  return price ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, char) : '';
};

export const StringtoLowerCase = (str) => {
  return str.toLowerCase();
};

export const showDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString('fa-IR')
}

export const showTime = date => {
  const d = new Date(date);
  return d.toLocaleTimeString('fa-IR')
}
