const nameInverter = function(name) {
  const honorific = ["Dr.", "Mr.", "Ms.", "Mrs."];
  if (name === undefined) {
    return console.log("Error name undefined!");
 
  } else {
    const nameArr = name.split(' ');
    const emptyString = "";
    const includesHonor = honorific.includes(nameArr[0]);
    if (name === '') {
      return '';
    } else if (countWords(name) === 1 && includesHonor) {
      return emptyString;
    } else if (countWords(name) === 1) {
      let nameNoSpace = name.trim();
      return nameNoSpace;
    } else if (countWords(name) === 2 && includesHonor) {
      return name;
    } else if (countWords(name) === 2) {
      let nameReversed = name.split(" ").reverse().join(", ");
      return nameReversed;
    } else if (honorific && countWords(name) === 3) {
      return nameArr[0] + " " + nameArr[2] + ", " + nameArr[1];
    }
  }
};

console.log(nameInverter());

const countWords = (str) => {
  str = str.replace(/(^\s*)|(\s*$)/gi,"");
  str = str.replace(/[ ]{2,}/gi," ");
  str = str.replace(/\n /,"\n");
  return str.split(' ').length;
};



module.exports = nameInverter;
