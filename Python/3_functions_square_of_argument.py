# Реализуйте функцию square с сигнатурой square(x: number): number
# вычисляющую квадрат своего аргумента.


def square_of_argument(number: float) -> float:
    return number * number


if __name__ == '__main__':
    num = 3
    result = square_of_argument(num)
    print(result)
