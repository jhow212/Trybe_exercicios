while True:
    try:
        x = int(input("Por Favor insira um número: "))
        break
    except ValueError:
        print("Oops! Esse não era um número válido. Tente novamente...")
