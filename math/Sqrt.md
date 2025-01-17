### Square Root
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:
```
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
```

Example 2:
```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
```

### Algorithm to mathematically calculate the square root of a number
1. Keep subtracting consecutive odd numbers from the required number.
2. If the result at some point is 0, the number of times the odd number is substracted becomes the square root of the number.

E.g. Required number  = 25
25 - 1 = 24
24 - 3 = 21
21 - 5 = 16
16 - 7 = 9
9  - 9 = 0 

We subtract 5 times (1,3,5,7,9). So the square root of 25 is 5.

### Algorithm  ( My version)
1. We can use recursion. 
2. Initialize a counter to keep track of the current odd number
3. Check if number is 0, return 0
4. Check if the number is less than 0, return (counter-1) -- > To get the floor value
5. Using recursion, subtract consecutive odd numbers from the original number
6. If the result at some point reaches 0, return the number of times the odd numbers were subtracted.
7. That becomes the square root of the required number.

### Code
```
 /**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x, oddCounter=0) {
    if (x===0) return oddCounter;
    if (x < 0) return (oddCounter - 1);
    return mySqrt(x - ((2*oddCounter) + 1), oddCounter = oddCounter + 1)
};
```