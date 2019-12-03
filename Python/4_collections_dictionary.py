# Реализуйте телефонную книгу на хеш-таблицах, т.е. справочниках (объектах).

# Задайте справочник (объект) с ключами равными значениям поля name
# и значениями равными полю phone.
# Пример объекта: { name: 'Marcus Aurelius', phone: '+380445554433' }

phone_book = {
    'Marcus Aurelius': '+380445554433',
    'Antonius': '+38022222',
    'Julius': '+38033333',
    }

if __name__ == '__main__':
    print(f"name: {phone_book['name']}", f"phone: {phone_book['phone']}", sep='\n')  # Format string
