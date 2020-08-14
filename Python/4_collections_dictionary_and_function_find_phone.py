# Реализуйте функцию find_phone_by_name
# которая находит телефон в хеше по имени и возвращает номер телефона.
# Используйте hash[key] для поиска телефона.


phone_book = {
    'Marcus Aurelius': '+380445554433',
    'Antonius': '+38022222',
    'Julius': '+38033333',
    }


def find_phone_by_name(phones: dict, name: str):
    return phones[name]


if __name__ == '__main__':
    marcus_phone = find_phone_by_name(phones=phone_book, name='Marcus Aurelius')
    antonius_phone = find_phone_by_name(phones=phone_book, name='Antonius')
    julius_phone = find_phone_by_name(phones=phone_book, name='Julius')
    print(marcus_phone, antonius_phone, julius_phone, sep='\n')
