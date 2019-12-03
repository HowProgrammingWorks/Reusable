# Реализуйте функцию average с сигнатурой average(a: number, b: number): number
# вычисляющую среднее арифметическое своих аргументов.


def average_of_two_nums(first_num: 'int or float', second_num: 'int or float') -> float:  # Used optional Type hints
    result = (first_num + second_num) / 2
    return result


if __name__ == '__main__':
    a, b = 2, 3

    res = average_of_two_nums(first_num=a, second_num=b)  # Used optional Named arguments
    # Named arguments
    # Функциям можно велеть присваивать определенные значения определенным
    # параметрам, невзирая на порядок. Таковы именованные аргументы.
    print(res)
