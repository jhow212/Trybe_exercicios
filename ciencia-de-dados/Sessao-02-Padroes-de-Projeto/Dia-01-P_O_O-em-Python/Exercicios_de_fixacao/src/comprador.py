from ventilador import ventilador_vendido


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.ventilador = None

    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):
        if self.ventilador:
            return f"{self.nome} - possui um ventilador"
        return f"{self.nome} - não possui um ventilador"


pessoa_compradora = Pessoa("João", 1500)
pessoa_compradora.comprar_ventilador(ventilador_vendido)
print(pessoa_compradora)
