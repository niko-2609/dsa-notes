### Longest consecutive subsequence
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:
```
Input: nums = [100,4,200,1,3,2]
Output: 4
length is 4
```
Example 2:
```
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```


### Algorithm
1. Check if the array is empty. If it's empty, return 0.
2. Maintain a variable to hold the longest streak.
3. Initialize a new hashset for this problem. To construct a new hashset from an array, use the following code
```
const arr = new Array().fill(20)
const set = new HashSet(arr)
```
4. Iterate over the values in the set.
5. Check for the current item in the set. 
6. If the `currentItem - 1` does not exist in the set, this can be considered as the first element in the subsequence.
7. We also set the currentStreak to 1.
8. Once we have the possible first item of the subsequence, we check all the consecutive numbers `like n+2, n+3, n+4 etc...` are in the array.
9. If the consecutive numbers are found in the set, increment the currentStreak by 1.
10. After all this, check the maximum between currentStreak and longestSteak. Whichever is greater, we put that in longestStreak.
11. Finally, return the longestStreak.

### Code
```
var longestConsecutive = function(nums) {
    if(nums.length === 0 ) return 0;
    const set = new Set(nums);
    let longestStreak = 0;

    for (const num of set) {

        // check if the number is the first number in sequence
        if(!set.has(num-1)) {
            let currentNum = num;
            let currentStreak = 1;

            // keep iterating and checking for the next number and 
            // calculating the longest streak.
            while(set.has(currentNum+1)){
                currentNum += 1;
                currentStreak += 1;
            }

            // set longest streak to the max of current streak and lognest streak
            longestStreak = Math.max(longestStreak, currentStreak)
        }
    }

    // return longest streak
    return longestStreak;
}
```
