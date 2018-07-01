# Most programs should be able to make some choices and decisions. And we are
# going to practice conditional programming now.
# This is usually done by a kind of if ... else statements which may look like:
#
# Depending on your programming language syntax could be different and else part
# is almost always optional. You can read more in wikipedia article on Conditional
# statements.
#
# Of two numbers, please, select one with minimum value. Here are several pairs
# of numbers for thorough testing.
#
# Input data will contain number of test-cases in the first line.
# Following lines will contain a pair of numbers to compare each.
# For Answer please enter the same amount of minimums separated by space, for
# example:

data = '-9306554 -3148416 -8599010 6068606 814592 5028115 2865242 8201587 3644079 9417770 -5653234 3560486 3524624 -6282652 3136375 -9240136 -9823617 -4156703 8221314 4895395 -8335605 1463581 1964857 -814981 67201 7971434 255452 4032267 -7878760 6975418 6574470 -7185314 -6172997 7975460 8883292 4641595 3003576 1748534 2843183 -3352345 1166305 7189948'
int_data = data.split()

index = 0
list_int_data = []
for index in range(len(int_data)):
    new_item = int(int_data[index])
    list_int_data.append(new_item)

odds_list = []
even_list = []
for number in list_int_data:
    if list_int_data.index(number) % 2 == 0:
        even_list.append(number)
    else:
        odds_list.append(number)

results_list = []
for index in range(len(odds_list)):
    odd_number = odds_list[index]
    even_number = even_list[index]
    if odd_number < even_number:
        results_list.append(odd_number)
    else:
        results_list.append(even_number)

print results_list

results_list_strings = []
for index in range(len(results_list)):
    results_list_strings.append(str(results_list[index]))

print results_list_strings

results_string = ' '.join(results_list_strings)
print results_string
