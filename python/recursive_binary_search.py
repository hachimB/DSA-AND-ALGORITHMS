"""
    Here we are going to implement the recursive binary search algorithm
"""


def recursive_binary_search(lst, target):
    if len(lst) == 0:
        return False
    else:
        middlepoint = len(lst) // 2
        if lst[middlepoint] == target:
            return True
        else:
            if target > lst[middlepoint]:
                return recursive_binary_search(
                    lst[middlepoint + 1: len(lst)], target)
            else:
                return recursive_binary_search(lst[:middlepoint], target)


def verify(result):
    if result:
        print(f"The target is found in the list")
    else:
        print(f"The target is not found in the list")


result = recursive_binary_search([1, 3, 4, 5, 7, 9, 10, 12, 15, 678], 98)
verify(result)

result = recursive_binary_search([1, 3, 4, 5, 7, 9, 10, 12, 15, 678], 10)
verify(result)
