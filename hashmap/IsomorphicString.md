### Isomorphich String

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:
```
Input: s = "egg", t = "add"

Output: true
```
```
Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
```
Example 2:
```
Input: s = "foo", t = "bar"

Output: false
```
Explanation:

The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:
```
Input: s = "paper", t = "title"

Output: true
```



### Alogrithm
1. Check if the lenghts of both strings are equal. If not, return false
2. Use 2 seperate maps. One map (lets call it `mapForS` )to store all characters in `s` with thier corresponding character `t`
3. The second map (called `mapForT`) is used to store all characters in `t` with thier corresponding character `s`
4. Now iterate over each character in anyone of the strings (`s` or `t`). 
5. If the character at current index in `s` exists and is present in in the `mapForS` but its value is not equal the current index value in `t`, we can safely say the strings are not isomorphic. Return false here.
6.  If the character are current index in `t` exists and is present in the `mapForT` but its value is not equal the current index value in `s`, we can safely say the strings are not isomorphic. Return false here too.
7. Else store the character from `s` with the value of the current index in `t`.
8. Repeat step 7 but interchange the strings. Instead of checking each character from `s`, we check each character in `t` and repeat step 7.
9. Finally return true if the for loop ends successfully.


```
var isIsomorphic = function(s, t) {
    // Check lenght of both strings. If not equal, return false.
    if (s.length !== t.length ) return false;

    // Initialize 2 different maps.
    let mapForS = new Map();
    let mapForT = new Map();

   
    for (i=0; i< s.length; i++) {

         // Check if each character is already in mapForS and its correspondoing value in the map is not equal to the current index value in string T
        if(mapForS.has(s[i]) && mapForS.get(s[i]) !== t[i]) return false;

        // Repeated steps
        if(mapForT.has(t[i]) && mapForT.get(t[i]) !== s[i]) return false;

        mapForS.set(s[i], t[i]);
        mapForT.set(t[i], s[i]);
    }

    return true;
}
```