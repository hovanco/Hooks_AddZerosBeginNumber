const addZeroBeginNumber = (number, length) => {
  var strExpect = "" + number;
  while (strExpect.length < length) {
    strExpect = "0" + strExpect;
  }
  console.log("strExpect: ", typeof strExpect);
  return strExpect;
};

const addZeroAfterNumber = (number, length) => {
  var strExpect = number + "";
  while (strExpect.length < length) {
    strExpect = strExpect + "0";
  }
  console.log("strExpect: ", typeof strExpect);
  return strExpect;
};

// const addNumberMiddleZeros = (number, length) => {
//   var strExpect = "" + number + "";
//   while (strExpect.length < length) {
//     strExpect = "" + strExpect + "";
//   }
//   console.log("strExpect: ", typeof strExpect);
//   return strExpect;
// };

// function yourFunction(num, length) {
//   num = num.toString();
//   while (num.length < length) {
//     num = "0" + num;
//   }
//   return num;
// }

export { addZeroBeginNumber, addZeroAfterNumber };
