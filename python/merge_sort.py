def merge_sort(list):
    """Merge sort algorithm"""
    if len(list) <= 1:
        return list
    
    left_sub_list, right_sub_list = split(list)

    left = merge_sort(left_sub_list)
    right = merge_sort(right_sub_list)

    return merge(left, right)



def split(l):
    """
        Split a list into two sub lists by dividing the list into two parts from the middle.
    """
    mid = len(l) // 2
    left_sub_list = l[:mid]
    right_sub_list = l[mid:]
    return left_sub_list, right_sub_list


def merge(left, right):
    """
        Merges two sorted lists into one sorted list.
    """
    l = []
    i = 0
    j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            l.append(left[i])
            i += 1
        else:
            l.append(right[j])
            j += 1

    while i < len(left):
        l.append(left[i])
        i += 1
    
    while j < len(right):
        l.append(right[j])
        j += 1

    return l




def verify_sort(l):
    """
        Returns False if the list is unsorted and True if it is sorted
    """
    if len(l) <= 1:
        return True
    return l[0] < l[1] and verify_sort(l[1:])





"""Testing the merge_sort function"""

l1 = [2344, 323, 0 , 5054040, 9, 3, 2, 1, 900]
l2 = []
l3 = [1]

v = verify_sort(l1)
print(v)
sorted = merge_sort(l1)
print(sorted)
v = verify_sort(sorted)
print(v)

print()


v2 = verify_sort(l2)
print(v2)
sorted2 = merge_sort(l2)
print(sorted2)
v2 = verify_sort(sorted2)
print(v2)


print()
print(merge_sort(l3))

