### Plus One
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:
```
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
```

Example 2:
```
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
```

Example 3:
```
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
```


### Algorithm ( My version)
1. Conver the array to string jusing `Array.prototype.join('')`.
2. Convert the string to BigInt.
3. Add 1 to this new BigInt.
4. Convert this BigInt to string and split it into array of individual digits.
5. Change the type of each element in array to Number `Array.prototype.map(Number)`



### Code
```
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let digitStr = digits.join('');
    let number = BigInt(digitStr)
    number = number + BigInt(1)
    let result = number.toString().split('')
    return result.map(Number)
};
```