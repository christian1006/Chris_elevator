# [Binary addition](https://www.codewars.com/kata/binary-addition)

Convert from base 10 to binary:


binary-addition: Function
* Args: 2 args
  * each arg is a number
* Return: String
  * Sum of two arguments in binary
* Behavior: Takes 2 numbers, returns sum as binary string

```

function addBinary(a,b) {
    var c = a + b;
    var res = '';
    while (c >= 1) {
      var res = c % 2 + res;
      c = Math.floor(c / 2);
    }
    return res;
  }

```


### Index
* [Input Classifications](#input-classifications)
* [Solution Explanation](#solution-explanation)
* [Bugs & Challenges](#bugs-challenges) 
* [Language Features](#language-features)
* [Use Cases](#use-cases)
* [Learning Journal](#learning-journal)
* [Conclusion](#conclusion)

---

## Input Classifications

We assume that our function will be passed number.

We keep in mind if number is negative or starting with 0.  

Take in account what we came up with. 


[TOP](#index)

___

## Solution Explanation

Our function takes two arguments (a,b). We declare a new variable 'c' which is the sum of our arguments.
We declare variable 'res' which is gonna be our return value. We use modulus operator '%' to find the remainder and add it to our return value. We use 'c' as the highest power of our number and we divide 'c' by 2 after every step we take.

[TOP](#index)


___


## Challenges & Bugs

The biggest challenge was to solve this kata without using built-feature '.toString(2)'

[TOP](#index)

___

## Language Features

 Built-in language features I used are 'Math.floor' that  returns the largest integer less than or equal to a given number and 'while' loop.

[TOP](#index)

---

## Use Cases

Binary numbers are often used to operate computers


[TOP](#index)

---

## Learning Journal

Things I learned studying this problem: Math.floor


New vocabulary: Binary number


Things I struggled with: Solving the kata



[TOP](#index)

___

## Conclusion

After kata was solved I built a small app based on this kata. In this case I needed my 'solution.js' file and I added handler 'binary-addition-handler.js' file and render 'binary-addition-render.js' file
to draw DOM elements. All these files were added to index.html. Some Bootstrap was added to make it less
ugly.

[TOP](#index)
___


