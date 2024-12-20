from linked_list import Singly_linked_list


def linked_list_merge_sort(linkedList):
    """
    """
    if linkedList == None or linkedList.size() == 1:
        return linkedList
    else:
        left, right = split(linkedList)
        l = linked_list_merge_sort(left)
        r = linked_list_merge_sort(right)
        return merge(l, r)


def split(linkedList):
    """"""
    if linkedList == None or linkedList.head == None:
        left_head = linkedList
        right_head = None

    else:
        size = linkedList.size()
        mid = size // 2

        mid_node = linkedList.node_at_index(mid - 1)

        left_head = linkedList
        right_head = Singly_linked_list()
        right_head.head = mid_node.next_node
        mid_node.next_node = None
    
    return left_head, right_head


def merge(left, right):
    """"""
    new_linkedList = Singly_linked_list()
    new_linkedList.insert_at_position(1, 0)

    current = new_linkedList.head
    
    left_head = left.head
    right_head = right.head

    while left_head or right_head:
        
        if left_head == None:
            current.next_node = right_head
            right_head = right_head.next_node

        elif right_head == None:
            current.next_node = left_head
            left_head = left_head.next_node

        else:
            left_data = left_head.data
            right_data = right_head.data

            if left_data < right_data:
                current.next_node = left_head
                left_head = left_head.next_node
            
            else:
                current.next_node = right_head
                right_head = right_head.next_node
        
        current = current.next_node

    new_linkedList.remove_at_index(0)
    return new_linkedList



l = Singly_linked_list()
l.add_at_the_start(23)
l.add_at_the_start(12)
l.insert_at_position(25, 0)
l.insert_at_position(30, 3)

print(l)

sorted = linked_list_merge_sort(l)
print(sorted)