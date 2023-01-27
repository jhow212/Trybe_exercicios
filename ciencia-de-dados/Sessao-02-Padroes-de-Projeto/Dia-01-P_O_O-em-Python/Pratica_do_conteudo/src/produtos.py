from elotrodomestico import Eletrodomestico


class Secador(Eletrodomestico):
    pass


class Batedeira(Eletrodomestico):
    pass


class MaquinaDeLavar(Eletrodomestico):
    pass


secador_vendido = Secador(cor="Vermelho", potencia=250, tensao=220, preco=180)
print(f"O secador {secador_vendido.cor} custa {secador_vendido.preco}")
batedeira_vendida = Batedeira(cor="Preta", potencia=250, tensao=220, preco=250)
print(f"A batedeira {batedeira_vendida.cor} custa {batedeira_vendida.preco}")
maquina_de_lavar_vendida = Batedeira(
    cor="Branca", potencia=250, tensao=220, preco=700
)
print(
    f"""A maquina de lavar {maquina_de_lavar_vendida.cor} custa
    {maquina_de_lavar_vendida.preco}"""
)
