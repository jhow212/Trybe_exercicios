"""Pratica: Exercicio 01"""
NAME = input("Insira seu nome: ")

for letter in NAME:
    print(letter)


"""Pratica: Exercicio 02"""
numbers = input("Insira valores separados por espaço aqui: ")

numbersArr = numbers.split(" ")

sum = 0
for number in numbersArr:
    if not number.isdigit():
        print(f"Erro ao somar valores, {number} é um valor inválido")
    else:
        sum += int(number)


print(f"A soma dos valores válidos é: {sum}")
