# If you already learned how to write program with a simple loop from Sum in Loop task, this new exercise will be just a simple modification.
#
# Now we are given several pairs of values and we want to calculate sum for each pair.
#
# Input data will contain the total count of pairs to process in the first line.
# The following lines will contain pairs themselves - one pair at each line.
# Answer should contain the results separated by spaces.

numbers = [
    313040, 463861,
    38027, 43088,
    36699, 719211,
    686703, 743474,
    299656, 306241,
    174688, 151119,
    556887, 858083,
    41751, 472029,
    609849, 407462,
    146201, 899110,
    712328, 69855,
    908367, 939665,
    240191, 454364,
    279146, 115692,
    39612, 77590
]

results = []

for element in numbers:
    if numbers.index(element) % 2 == 0:
        sum_of_numbers = element + numbers[numbers.index(element) + 1]
        results.append(sum_of_numbers)

result_string = ''

count = 0
for result in results:
    global count
    global result_string
    result_string = result_string + ' ' + str(results[count]) + ' '
    count += 1

print result_string
