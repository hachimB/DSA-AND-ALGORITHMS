class Node:
    """
    Implementation of a node for a linked list
    """
    data = None
    next_node = None

    def __init__(self, data):
        self.data = data

    def __repr__(self):
        return f'< Node data: {self.data}>'





class Singly_linked_list:
    """
    Implementation of a singly linked list
    """

    def __init__(self):
        self.head = None


    def is_empty(self):
        """Method to check if the linked list is empty"""
        return self.head == None


    def size(self):
        """Returns the size of the linked list with a linear runtime
        """
        current = self.head
        count = 0
        while current != None:
            count += 1
            current = current.next_node
        return count


    def add_at_the_end(self, data):
        new_node = Node(data)
        current = self.head
        if current == None:
            current = new_node
        else:
            while current.next_node != None:
                current = current.next_node
            current.next_node = new_node

    
    def add_at_the_start(self, data):
        """Adds a new node at the head of the list
            Time complexity = O(1)
        """
        new_node = Node(data)
        new_node.next_node = self.head
        self.head = new_node
    


    def node_at_index(self, index):
        """"""
        if index == 0:
            return self.head
        else:
            current = self.head.next_node
            count = 0
            while current:
                count += 1
                if count == index:
                    return current
                current = current.next_node

    
    def __repr__(self):
        """Returns the string representation of the linked list
            Time complexity = O(n)
        """
        string = ""
        current = self.head
        while current:
            if current.next_node != None:
                string += f"{current.data} -> "
                current = current.next_node
            else:
                string += f"{current.data}"
                break

        return string

    
    def insert_at_position(self, data, position):
        """Inserting a new node at a position
            Inserting takes O(1) time but finding the node at the index position takes O(n) time
            So it takes overwall O(n) time (Linear time)
        """
        if position >= 0 and position <= self.size():
            if position == 0:
                self.add_at_the_start(data)
            elif position == self.size():
                self.add_at_the_end(data)
            else:
                new_node = Node(data)
                count = 1
                current = self.head
                while current.next_node != None:
                    if count == position:
                        new_node.next_node = current.next_node
                        current.next_node = new_node
                        break
                    else:
                        current = current.next_node
                        count += 1
        else:
            return f"{position} is an invalid position"
        

    def search(self, key):
        """Search for the first node containing data that matches the key
            Time complexity = O(n)
        """
        current = self.head
        while current:
            if key == current.data:
                return current
            else:
                current = current.next_node
        return None
        
    
    def remove(self, key):
        """Remove node containing data that matches the key
            Returns the Node or None if it doesn't exist
            Time complexity = O(n)
        """
        current  = self.head
        previous = None
        found = False
        while current and not found:
            if current.data == key and self.head == current:
                found = True
                self.head = current.next_node

            elif current.data == key:
                found = True
                previous.next_node = current.next_node
            
            else:
                previous = current
                current = current.next_node
        return current


    def remove_at_index(self, index):
        """Time complexity = O(n)"""
        if index >= 0 and index <= self.size():
            current = self.head
            previous = None
            if index == 0:
                self.head = current.next_node
            else:
                count = 1
                while current:
                    previous = current
                    current = current.next_node
                    if count == index:
                        previous.next_node = current.next_node
                        break
                    else:
                        count += 1
            
            return current
        else:
            return "The index provided does not exist"


    def remove_with_key(self, key):
        """"""
        current = self.head
        previous = None
        if self.head.data == key:
            self.head = current.next_node
        else:
            while current:
                previous = current
                current = current.next_node
                if current and current.data == key:
                    previous.next_node = current.next_node
                    break
            else:
                return None
        return current
