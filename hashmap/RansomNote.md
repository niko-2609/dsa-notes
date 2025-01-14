### Ransom Note
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:
```
Input: ransomNote = "a", magazine = "b"
Output: false
```
Example 2:
```
Input: ransomNote = "aa", magazine = "ab"
Output: false
```
Example 3:
```
Input: ransomNote = "aa", magazine = "aab"
Output: true
```


### Algorithm
1. Iterate over the `magazine` string and add each character and its occurrences to a map. Lets call it `magMap`.
2. Once done, iterate over each character in the `ransomNote` string and check if the current character exists in the `magMap`.
3. If the current character does not exist in the `magMap` or if the current character's occurrence is 0, return false.
4. Else, if the current character exists in the `magMap` and the current character's occurrence is atleast 1, reduce the occurrences.
5. If the outer for-loop exits successfully, the string `ransomNote` can be constructed with the `magazine` string, so return true.


### Code
```
var canConstruct = function(ransomNote, magazine) {
    // Initialize a new map
    let magMap = new Map();

    // Iterate over the characters of the 'magazine' string and update each characters occurrences in the map intialized
    for (let char of magazine) {

        // If char exists in the map
        if (map.has(char)) {
            // Increment the occurrence of the character
            map.set(char, map.get(char) + 1);
        } else {
            // Else enter the character in map and initialize the occurrence to 1
            map.set(char, 1);
        }


        // Iterate over the ransomNote string and compare with character in the map.
        for (let char of ransomNote) {

            // If the current character doesn't exist or if the current character's occurrence is 0, return false
            if(!map.has(char) || map.get(char) === 0) return false;

            // If the current character matches the character in the map, reduce the occurrence by 1
            map.set(char, map.get(char) - 1);
        }
    }
    

    // String can be constructed with given strings
    return true;
}
```