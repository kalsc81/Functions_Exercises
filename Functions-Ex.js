let size;

//creates a line of Hashes
function makeLine(size)
{
    
    let str = '';
    for (let i = 0; i<size ;i++){

        str +=  '#';   
    }
    return str;
}
console.log(makeLine(5));

//print a square using lines
function makeSquare(size)
{
let str1 = '';
for (let i = 0; i < size; i++) {
    
    str1 += '\n'+ makeLine(size);
}
return str1;
 }

console.log(makeSquare(5));


//printing a rectangle using makeline function
let width, height;
function makeRectangle(width, height){
    str2 = ' ';
    for(let i = 0; i < height; i++){
      str2 += '\n' + (makeLine(width));
    }
    return str2; 
}

console.log(makeRectangle(4,3));
console.log('\n');

//printing a right angled triangle
let h;
stairCase = '';
function makeDownwardStair(h) {
    for(let i = 0; i < h; i++) {
        stairCase += makeLine(i + 1) + '\n';
    } 
    return stairCase;
}
console.log(makeDownwardStair(6));
// Printing a line with Spaces 
let numSpaces;
let numChars;

 function makeSpaceLine ( numSpaces, numChars)
 {
    let line = makeLine(numChars);
    for ( i = 0; i < numSpaces; i++)
        {
            line = ' ' + line + ' '; 
        }
        return line;
 }
 console.log(makeSpaceLine(10,4));

//Printing a Isoceles Triangle with #
function makeIsocelesTriangle(height) {
 isoceles = '';
  for (let i = 0; i<height ;i++) {
    isoceles += makeSpaceLine(height-i-1,2*i+1) +'\n';
  }  
  return isoceles; 
}

//Printing a Diamond
function makeDiamond(height) {
    let diamond = makeIsocelesTriangle(height);
    let reverse = "";   
    
     for (let i = 0; i < diamond.length-1; i++) 
        {
            reverse =  diamond[i]  +   reverse;
        }
    diamond += reverse;
        return diamond;
    
}
console.log(makeDiamond(5));