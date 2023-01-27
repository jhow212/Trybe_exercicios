class Ventilador:
    def __init__(self, cor, potencia, tensao, preco):
        self.__cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.preco = preco

    def cor(self):
        return self.__cor


ventilador_vendido = Ventilador(
    cor="Preto", potencia=250, tensao=220, preco=180
)
