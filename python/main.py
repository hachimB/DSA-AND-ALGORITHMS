"""
    The main file to display some results
"""
import time

lst = [1, 3, 4, 5, 6, 7, 8, 9, 493, 123456]
target = 123456


""""
    1) Linear search algorithm
"""
linear_search = __import__('linear_search').linear_search
verify_linear = __import__('linear_search').verify_linear

linear_start_time = time.time()
linear_search(lst, target)
linear_end_time = time.time()
linear_runtime = linear_end_time - linear_start_time
verify_linear(linear_search(lst, target))
print(f'The runtime for this linear_search algorithm is {linear_runtime}')
print()


"""
    2) Binary search
"""
binary_search = __import__('binary_search').binary_search
verify_binary = __import__('binary_search').verify_binary
binary_start_time = time.time()
binary_search(lst, target)
binary_end_time = time.time()
binary_runtime = binary_end_time - binary_start_time
verify_binary(binary_search(lst, target))
print(f'The runtime for this binary_search algorithm is {binary_runtime}')
print()
