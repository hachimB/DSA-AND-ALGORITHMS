"""
    Here we are going to implement the binary search algorithm
"""


def binary_search(lst, target):
    first = 0
    last = len(lst) - 1

    while (first <= last):
        midpoint = (first + last) // 2

        if lst[midpoint] == target:
            return midpoint

        elif target > lst[midpoint]:
            first = midpoint + 1

        else:
            last = midpoint - 1

    return None


def verify_binary(index):
    if index:
        print(f'The target is found at index {index}')
    else:
        print("The target does not exist in the list")
