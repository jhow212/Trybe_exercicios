# Escrita do arquivo
file = open("arquivo.txt", mode="w")

file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")


print("Túlio 22", file=file)

LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)


file.close()

# Leitura do arquivo
file = open("arquivo.txt", mode="r")
# content = file.read()
# print(content)

for line in file:
    print(line)

file.close()


# Escrita do arquivo_bytes
second_file = open("arquivo_bytes.txt", mode="wb")
second_file.write(b"C\xc3\xa1ssio 30")
second_file.close()


# Leitura do arquivo_bytes
second_file = open("arquivo_bytes.txt", mode="rb")
content = second_file.read()
print(content)
second_file.close()
