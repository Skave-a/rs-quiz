const abc = 'abcdefghijklmnopqrstuvwxyz';

export const RNDstring = () => {
  let rs = '';
  while (rs.length < 6) {
    rs += abc[Math.floor(Math.random() * abc.length)];
  }
  return rs;
};
