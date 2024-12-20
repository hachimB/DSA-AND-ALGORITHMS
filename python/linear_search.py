"""
    Here we are going to implement the linear search algorithm
"""


def linear_search(lst, target):
    for i in range(0, len(lst)):
        if lst[i] == target:
            return i
    return -1


def verify_linear(index):
    if (index != -1):
        print(f"The target is found at index {index}")
    else:
        print("The target does not exist in the list")
