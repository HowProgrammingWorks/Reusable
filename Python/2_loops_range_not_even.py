# Реализуйте функцию rangeOdd(start: number, end: number):
# array которая отдает массив нечетных чисел из диапазона [15, 30] включая крайние числа.


def function_return_not_even_numbers() -> list:
    # With list comprehension
    return [number for number in range(15, 31) if number % 2 != 0]


if __name__ == '__main__':
    result = function_return_not_even_numbers()
    print(result)
