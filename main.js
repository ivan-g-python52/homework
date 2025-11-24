'use strict';
const names = ["иван", "АННА", "петр", "ОЛЬГА"];

function formatNames(namesArray) {
  return namesArray.map(name => {
    const lowerCaseName = name.toLowerCase();
    const firstLetter = lowerCaseName.charAt(0).toUpperCase();
    const restOfName = lowerCaseName.slice(1);
    return firstLetter + restOfName;
  });
}
console.log(formatNames(names));