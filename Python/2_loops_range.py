# Реализуйте функцию range(start: number, end: number): array
# которая отдает массив чисел из диапазона [15, 30] включая крайние числа.


# Example 1
def function_return_list_of_nums() -> list:  # '-> list' is optional Type hint
    tmp = list()
    for number in range(15, 31):
        tmp.append(number)
    return tmp


# Example 2: with list comprehension
def function_return_list_of_nums_with_list_comprehension() -> list:
    # Way first
    tmp = [number for number in range(15, 31)]
    return tmp

    # Way second: without variable
    # return [number for number in range(15, 31)]


if __name__ == '__main__':
    result = function_return_list_of_nums()
    print(result)

    res = function_return_list_of_nums_with_list_comprehension()
    print(res)
