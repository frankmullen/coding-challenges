import re

# Using * asterisk - multiple occurrences of the character preceding it
# ab*c means 'starts with a, ends in c, and has zero or more b's in between. (and no other characters it seems)
print re.findall("ab*c", "ac")  # ['ac']
print re.findall("ab*c", "abcd")  # ['abc']
print re.findall("ab*c", "acc")  # ['ac']
print re.findall("ab*c", "abcac")  # ['abc', 'ac']
print re.findall("ab*c", "abdc")  # []
print re.findall("ab*c", "ABC")  # [] case sensitive

# Using re.IGNORECASE
print re.findall("ab*c", "ABC", re.IGNORECASE)  # ['ABC']

# Using . period - any single occurrence (a and c separated by a single character)
print re.findall("a.c", "abc")                  # ['abc']
print re.findall("a.c", "abbc")                 # []
print re.findall("a.c", "ac")                   # []
print re.findall("a.c", "acc")                  # ['acc']

# Combining . with * = any character being repeated any number of times (eg any string starting with a and
# ending with c
print re.findall("a.*c", "abc")                 # ['abc']
print re.findall("a.*c", "abbc")                # ['abbc']
print re.findall("a.*c", "ac")                  # ['ac']

# Using re.search()
results = re.search("ab*c", "ABC", re.IGNORECASE)
print results.group()

a_string = "Everything we do is <replaced> if it is indeed inside <tags>."

# Substitute the tags with 'coming up roses' using the re.sub() method
# this is only between the first and last occurrences of the tags
a_string = re.sub("<.*>", "coming up roses", a_string)
print a_string

another_string = "Everything we do is <replaced> if it is indeed inside <tags>."

# Make sure that both tags are replaced by using the ? too tell
# re.sub() to stop after first match of '>'
another_string = re.sub("<.*?>", "coming up roses", another_string)
print another_string