let sum = (number) => String(number).split('').reduce((acc, ele) => acc + Number(ele), 0); 
console.log(sum(5));           // 5
sum(496);          // 19
sum(123456789);    // 45