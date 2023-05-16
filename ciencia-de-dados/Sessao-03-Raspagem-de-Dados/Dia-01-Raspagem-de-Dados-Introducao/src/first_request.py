import requests

# Requisição do tipo GET
response = requests.get("https://www.betrybe.com/")
print(response.headers["Content-Type"])  # conteúdo no formato html
print(response.status_code)  # código de status


# Conteúdo recebido da requisição
# print(response.text)


# Bytes recebidos como resposta
# print(response.content)


# Requisição do tipo post
response_type_post = requests.post(
    "http://httpbin.org/post", data="some content"
)
print(response_type_post.text)


# Requisição enviando cabeçalho (header)
response_header = requests.get(
    "http://httpbin.org/get", headers={"Accept": "application/json"}
)
print(f"Get enviando o HEADER: {response_header.text}")


# Requisição a recurso binário
response_binario = requests.get("http://httpbin.org/image/png")
print(response_binario.content)


# Recurso JSON
response_json = requests.get("http://httpbin.org/get")
# Equivalente ao json.loads(response.content)
print(response_json.json())


# Lançando resposta de erro em caso de exceção caso o status não seja OK
response_error = requests.get("http://httpbin.org/status/404")
response_error.raise_for_status()
