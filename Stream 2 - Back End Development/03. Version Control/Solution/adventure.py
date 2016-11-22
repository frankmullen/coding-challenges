from data import locations

directions = {
    'west': (-1, 0),
    'east': (1, 0),
    'north': (0, -1),
    'south': (0, 1),
}

position = (0, 0)

while True:
    location = locations[position]
    print 'you are at the %s' % location

    valid_directions = {}
    for k, v in directions.iteritems():
        possible_position = (position[0] + v[0], position[1] + v[1])
        possible_location = locations.get(possible_position)
        if possible_location:
            print 'to the %s is a %s' % (k, possible_location)
            valid_directions[k] = possible_position

    # print map
    for k, v in valid_directions.iteritems():
        print locations.get(v)


    direction = raw_input('which direction do you want to go?\n')
    new_position = valid_directions.get(direction)
    if new_position:
        position = new_position
    else:
        print "sorry, that isn't a valid direction"

