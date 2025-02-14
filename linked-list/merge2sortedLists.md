### Merge 2 sorted linked lists
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]


Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.


### Algorithm
<b>1. Base Cases (Stopping Conditions):</b>

<ul>
<li>
If one list is empty, return the other list (because an empty list doesn’t change the result)
</li>
</ul>

<ul>
<li>
If both lists are non-empty, compare the first elements (the "heads" of each list)
</li>
</ul> 

<b>2. Compare the First Elements:</b>

<ul>
<li> 
Look at the first element (the head) of list1 and list2
</li>
</ul> 

<ul>
<li> If list1's first element is smaller, the first element of the merged list will be from list1. Now, we just need to merge the next element of list1 with list2 (because list1's first element is already in place)
</li>
</ul> 

<ul>
<li> 
If list2's first element is smaller, the first element of the merged list will be from list2. Now, we just need to merge list1 with the next element of list2
</li>
</ul> 

<b>3. Repeat Until One List is Empty:</b>
<ul>
<li> 
 Keep comparing the heads of the two lists, choosing the smaller element each time, and recursively merge the remaining parts of the lists.

</li>
</ul> 



<b>4. When One List is Empty:</b>
<ul>
<li> 
If at any point, one of the lists becomes empty, just return the other list (since it is already sorted, we can append the remaining elements directly). 
</li>
</ul> 


<b>5. Return the Merged List:</b>
<ul>
    <li> 
The result will be a new sorted list with elements from both lists combined in order 
    </li>
</ul>



<b>Simple Version:</b>
<br>
If either list is empty, return the other list.
Compare the heads of both lists:
If list1's head is smaller, link it to the merged result of list1.next and list2.
If list2's head is smaller, link it to the merged result of list1 and list2.next.
Keep doing this until both lists are fully merged.
Example to Remember:
Imagine two sorted lists of numbers:
list1 = [1, 3], list2 = [2, 5]

Compare 1 (from list1) and 2 (from list2). Since 1 < 2, pick 1 and move to the next element in list1: now compare 3 with 2.
Compare 3 (from list1) and 2 (from list2). Since 2 < 3, pick 2 and move to the next element in list2: now compare 3 with 5.
Compare 3 (from list1) and 5 (from list2). Since 3 < 5, pick 3 and move to the next element in list1: now the list1 is empty.
Since list1 is empty, append the remaining elements of list2 ([5]).
The final merged list will be [1, 2, 3, 5].



### Code
```
var mergeTwoLists = function(list1, list2) {
   if (list1 === null) return list2;
   if (list2 === null) return list1;

   if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1;
   } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
   }
 };
```


