# We need to sum two numbers and tell the result. Though you can do it manually,
# try to write a simple program in any language you know, or like, or want to
# learn.

def add_numbers(n1, n2):
    result = n1 + n2
    return result

number1 = input('What is number 1? ')
number2 = input('What is number 2? ')
print 'The result of the sum between', number1, 'and', number2, 'is',
print str(add_numbers(number1, number2)) + '.'
