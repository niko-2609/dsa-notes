package main

import "log"

func main() {
	count := 0
	input := []int{2, 4, 1, 3, 5}
	log.Print("Input array - ", input)
	res := MergeSort(input, &count)
	log.Print("Sorted array - ", res)
	log.Print("Inversions - ", count)
}

func MergeSort(arr []int, count *int) []int {
	if len(arr) == 1 {
		return arr
	}

	mid := len(arr) / 2

	leftSorted := MergeSort(arr[:mid], count)
	rightSorted := MergeSort(arr[mid:], count)

	return merge(leftSorted, rightSorted, count)
}

func merge(left, right []int, count *int) []int {
	res := []int{}

	i, j := 0, 0

	for i < len(left) && j < len(right) {
		if left[i] <= right[j] {
			res = append(res, left[i])
			i++
		} else {
			res = append(res, right[j])
			j++
			*count += len(left) - i // yaha pe right wale array se element result mei daalenge
			// isliye len(left) - i karte hai, taaki jitne elements left mei bache hai unka sabka inversion pair calculate ho jaye
			// e.g [2,4] & [1,3,5] --> right wala element(1) will go to result
			// len(left) - i = 2 - 0 = 2 (since i is at 0 and its the start)
			// So 2 inversion pairs (2,1) and (4,1) can be calculated.
		}
	}

	res = append(res, left[i:]...)
	res = append(res, right[j:]...)
	return res
}
