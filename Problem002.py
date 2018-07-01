# Now our goal is to learn the loops - i.e. repeated actions. Let us find the sum
# of several numbers (more than two). It will be useful to do this in a loop. As
# shown in the picture above - you can create variable sum and add every value
# from the list to it. Perhaps "for" loop will suit nicely since the amount of
# numbers is known beforehand.
#
# If you have troubles, try Sums In Loop first - it is, probably, easier.
#
# Input data has the following format:
#
# first line contains N - amount of values to sum;
# second line contains N values themselves.
# Answer should contain a single value - the sum of N values.
#
# Note since there are several dozens of numbers, you should not copy them
# manually to your program. Instead make your program reading them from standard
# input (where you can copy them all at once). Note that if you run code at our
# server, the data are automatically copied to standard input for convenience.

input_string = '871 1181 1001 1143 290 920 414 649 1054 810 887 639 1081 497 690 1213 1105 15 1165 463 347 692 1142 946 876 1041 67 784 1022 458 670 593 338 371 435 619 1281 839 1258 1034 349 844 373 129 41 1053 42 1136 1059'
list_input_string = input_string.split()

integer_input_list = []
for index in range(len(list_input_string)):
    new_item = int(list_input_string[index])
    integer_input_list.append(new_item)

total = 0
for index in range(len(integer_input_list)):
    total += integer_input_list[index]

print total
