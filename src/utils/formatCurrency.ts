// create function to format number into currency idr
const formatCurrency = (number: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(number);
};

export default formatCurrency;
