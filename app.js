function splitString(str) {
    const separator = '$'; 
    const parts = str.split(separator); 
  
    const part1 = parts[0];
    const part2 = parts[1];
    const part3 = parts[2];
  
    return { part1, part2, part3 };
  }
const str = 'hello$world$today';
const { part1, part2, part3 } = splitString(str);
console.log(part1); 
console.log(part2); 
console.log(part3);