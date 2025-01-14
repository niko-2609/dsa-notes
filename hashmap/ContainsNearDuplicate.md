### Contains near duplicate
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

 

Example 1:

```
Input: nums = [1,2,3,1], k = 3
Output: true
```

Example 2:
```
Input: nums = [1,0,1,1], k = 1
Output: true
```

Example 3:
```
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```


### Algorithm
1. Iterate over the array and store each element and its index as key-value pair. Each element holds its own index.
2. If the element is not in the map`(i.e map[element] !== undefined)`, we store it inside the map. This is the first encounter of the element.
3. If the element is encountered for the second time, the element is already present in the map. 
4. Check the current index with the index of the element that is stored in the map. If the absolute difference between these indices is less than or equal to ` <= k`, then we return true.
5. Else we return false.


### Code

```
var containsNearByDuplicate = function(nums, k) {
    // Intialize new map
    let map = {};

    // Iterate over the elements in array
    for (let i = 0; i < nums.length; i++) {

        // Element is found and is not undefined, check the difference between current index and the index in the map
        if(map[nums[i]] !== undefined) {
            let diff = Math.abs(map[nums[i]] - i);
            if (diff <= k) return true;
        }
        // Store the element in the map if its first occurrence or if the diff was not <= k, store the most recent
        // index of the element in the map.
        map[nums[i]] = i; 
    } 


    // If confition not satisfied, return false
    return false;
}
```