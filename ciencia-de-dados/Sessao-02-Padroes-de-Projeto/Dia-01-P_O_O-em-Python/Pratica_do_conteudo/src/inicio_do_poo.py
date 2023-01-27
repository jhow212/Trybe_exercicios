from elotrodomestico import Eletrodomestico


class Liquidificador(Eletrodomestico):
    def esta_ligado(self):
        return "Sim" if super().esta_ligado() else "Não"


meu_liquidificador = Liquidificador(
    cor="Azul", potencia=200.2, tensao=127, preco=200
)

seu_liquidificador = Liquidificador(
    cor="Vermelho", potencia=250, tensao=220, preco=100
)

meu_liquidificador.ligar(1)

print("Está ligado?", meu_liquidificador.esta_ligado())
print(f"A cor atual é {meu_liquidificador.cor}")

meu_liquidificador.desligar()
meu_liquidificador.cor = "Preto"
print("Está ligado?", meu_liquidificador.esta_ligado())
print(f"Após pintarmos, a nova cor é {meu_liquidificador.cor}")
