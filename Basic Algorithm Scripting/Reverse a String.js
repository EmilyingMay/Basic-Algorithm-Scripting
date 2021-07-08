function reverseString(str) {
 const a = str.split("");
 const b = a.reverse();
 const c = b.join("");
 console.log(c);

 return c;
 
} 

reverseString("hello");