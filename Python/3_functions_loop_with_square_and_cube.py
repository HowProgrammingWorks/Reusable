# Вызовите функции square и cube в цикле от 0 до 9,
# вычисляя, соответственно квадрат и куб от переменной цикла.
# Передайте квадрат и куб на каждой итерации в функцию average.
# Результаты сложите в массив
# И возвратите из функции list.


def average_of_two_nums(first_num: 'int or float', second_num: 'int or float') -> float:  # Used optional Type hints
    result = (first_num + second_num) / 2
    return result


def square_of_argument(number: float) -> float:
    return number * number


def cube_of_argument(number: float):
    return number ** 3


def loop_with_calculate_square_and_cube():
    tmp = list()
    for numb in range(9):
        # Вычисляем, соответственно квадрат и куб от переменной цикла.
        square = square_of_argument(numb)
        cube = cube_of_argument(numb)

        # Передаем квадрат и куб на каждой итерации в функцию average.
        # И результаты складываем в массив.
        tmp.append(average_of_two_nums(square, cube))

    # Возвращаем из функции list.
    return tmp


if __name__ == '__main__':
    res = loop_with_calculate_square_and_cube()
    print(res)
