### Valid Anagram
Given two strings s and t, return true if t is an 
anagram of s, and false otherwise.

Anagram - An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

Example 1:
```
Input: s = "anagram", t = "nagaram"

Output: true
```
Example 2:
```
Input: s = "rat", t = "car"

Output: false
```

### Algorithm - My version

1. If lenghts of strings are not same, return false.
2. Initialize a map to hold the characters of `s`.
3. Iterate over the string `s` and add the unicode of the character as the key and the number of occurrences of the character as the value. 
4. If the unicode of the current character is present in map, increament the number of occurrences of the character by 1.
5. Else add the unicode of the current character to the map and initialize the occurrences of the character to 1.
6. Iterate over the string `t` and then check if the unicode of the current character exists. If exists, decrease the number of occurrences of the character by 1.
7. Finally, iterate over the map and check every characters occurrences. If the strings are successfull anagrams, every character's occurrence will be 0. If the occurences of any character is not 0, that means the strings are not a valid anagram.

### Code
```
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    if (s.length === 1 && s[0] === t[0]) return true
    let map = new Map();
    for (i=0; i < s.length; i++) {
        if(!map.has(s.charCodeAt(i))) {
            map.set(s.charCodeAt(i), 1);
        } else {
            map.set(s.charCodeAt(i), map.get(s.charCodeAt(i)) + 1)
        }
    }

    for (i=0; i< t.length; i++) {
        if(!map.has(t.charCodeAt(i))) return false
        map.set(t.charCodeAt(i), map.get(t.charCodeAt(i)) - 1)

    }

    for (let [key, value] of map) {
        if (map.get(key) !== 0) return false
    }

     return true
}
```



### Algorithm - Optimized version 
This algorithm is an optimized version of the above algorithm. This is optimized for space complexity, where using this algorithm, the space complexity comes down to O(1) from O(n).


1. Check the lengths of the strings. If not equal, return false.
2. Initialize an array to hold 26 items( Since there are 26 alphabets)
3. Iterate over the items in string `s` and `t`. 
4. For each character in  strings, calculate the actual alphabets to modify.
5. We get that by doing this `s.charCodeAt(i) - 97`. This will give us the index in the array that we need to modify for the current character.
6. For each character in string `s`, increment the required index calculated in above step.
7. For each character in string `t`, decrement the required index calculated in above step.
8. In the end, if there are all zeroes in the array, strings are anagrams. 
9. If there is any value other than zero for any character, then given strings are not valid anagrams.


### Code
```
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
        count[t.charCodeAt(i) - 97]--;
    }

    return count.every(v => v === 0);
};
```