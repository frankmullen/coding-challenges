from string import ascii_uppercase
from random import choice

# test to make sure test_boggle is hooked up to boggle
def check():
    return 1

# creates a dictionary with a row, column tuple as the key, and a random letter as the value
def make_grid(height, width):
    return {(row, col): choice(ascii_uppercase)
            for row in range(height)
            for col in range(width)}

# returns all possible neighbours of a grid position by their coordinates
def neighbours_of_position((row, col)):
    return [ (row - 1, col - 1), (row - 1, col), (row - 1, col + 1),
             (row, col - 1),                     (row, col + 1),
             (row + 1, col - 1), (row + 1, col), (row + 1, col + 1)]

# returns all actual grid neighbours by checking if possible neighbours are on the grid
def all_grid_neighbours(grid):
    neighbours = {}
    for position in grid:
        position_neighbours = neighbours_of_position(position)
        neighbours[position] = [p for p in position_neighbours if p in grid]
    return neighbours

#  get the list of letters for the positions in the path, then join them into a string
def path_to_word(grid, path):
    return ''.join([grid[p] for p in path])

def is_a_real_word(word, dictionary):
    return word in dictionary

def search(grid, dictionary):
    neighbours = all_grid_neighbours(grid)
    paths = []
    full_words, stems = dictionary

    def do_search(path):
        word = path_to_word(grid, path)
        if is_a_real_word(word, full_words):
            paths.append(path)
        if word not in stems:
            return
        for next_pos in neighbours[path[-1]]:
            if next_pos not in path:
                do_search(path + [next_pos])

    for position in grid:
        do_search([position])

    words = []
    for path in paths:
        words.append(path_to_word(grid, path))
    return set(words)


def get_dictionary(dictionary_file):
    full_words, stems = set(), set()

    with open(dictionary_file) as f:
        for word in f:
            word = word.strip().upper()
            full_words.add(word)

            for i in range(1, len(word)):
                stems.add(word[:i])
    return full_words, stems

def main():
    grid = make_grid(5, 5)
    dictionary = get_dictionary('/usr/share/dict/words')
    display_words(dictionary, grid)


def display_words(dictionary, grid):
    words = search(grid, dictionary)
    for word in words:
        print word
    print "Found {0} words".format(len(words))


if __name__ == "__main__":
   main()