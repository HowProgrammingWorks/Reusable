# Реализуйте функцию cube с сигнатурой cube(x: number): number
# вычисляющую куб своего аргумента.


def cube_of_argument(number: float):
    return number ** 3


if __name__ == '__main__':
    num = 3
    result = cube_of_argument(num)
    print(result)
