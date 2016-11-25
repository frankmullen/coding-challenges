import sys

import pygame

from colours import dark_blue


def draw_grid():
    #dra
    for x in range(0, width, cell_size):
        pygame.draw.line(screen, dark_blue, (x, 0), (x, height))
    #for y in range(0, height, cell_size):
    #    pygame.draw.line(screen, dark_blue, (0, y), (width, y))


pygame.init()

columns, rows = 100, 50
cell_size = 10
size = width, height = columns * cell_size, rows * cell_size
screen = pygame.display.set_mode(size)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()

    draw_grid()

    pygame.display.update()