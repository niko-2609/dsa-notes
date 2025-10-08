### Word Pattern

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.
 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"

Output: true

Explanation:

The bijection can be established as:

'a' maps to "dog".
'b' maps to "cat".
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"

Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"

Output: false


### Algorithm
1. Split the `string` into slice of individual words (`strings.Split(string)`) and check that both parameters(`pattern` and the `string`) have same length. If not, return false.
2. Use 2 different maps
3. One for storing the the characters from `pattern` as key and the correspinding data in `s`.
4. The other one stores the characters from `s` as key the corresponding index character `pattern`.
5. If the character at current index in `patternMap` exists and is present in in the `patternMap` but its value is not equal the current index value in `s`, we can safely say the strings are not isomorphic. Return false here.
6.  If the character at current index in `t` exists and is present in the `patternMap` but its value is not equal the current index value in `s`, we can safely say the strings are not isomorphic. Return false here too.
7. If no errors found, return true after exiting the for loop.



### Code
```
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    // Split words seperated by " "
    let words = s.split(" ");

    // Check length of both patterns and words. If doesn't match , return false
    if(pattern.length !== words.length) return false;

    // Initialize 2 different maps
    let charToWord = new Map();
    let wordToChar = new Map();

    for (i=0; i< pattern.length; i++){

        // Check if value exists in map for pattern  (charToWord) 
        if (charToWord.has(pattern[i]) && charToWord.get(pattern[i]) !== words[i]) return false

        // Check if value exists in map for mapForS elements as map keys.  (wordToChar)
        if(wordToChar.has(words[i]) && wordToChar.get(words[i]) !== pattern[i]) return false


        charToWord.set(pattern[i], words[i])
        wordToChar.set(words[i], pattern[i])
    }

    return true
};
```
