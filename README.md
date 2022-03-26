# AUTOMAÇÃO DE TESTES DE DESEMPENHO COM K6

## O que é?
-----
O Grafana k6 é uma ferramenta de teste de carga de código aberto que torna o teste de desempenho fácil e produtivo para as equipes de engenharia. k6 é gratuito, centrado no desenvolvedor e extensível.

---
## Linguagem de programação utilizada:
- JavaScript.

---

## API utilizada:
- https://jsonplaceholder.typicode.com

---
## Rodando o Projeto:

- Para rodar o K6, basta executar o comando:

``k6 run --vus ${número de usuários virtuais} --duration ${duração do teste} --out ${caminho do arquivo de saída} --target ${caminho do arquivo de configuração}``

- Para rodar especificamente este projeto, basta executar o comando:

``k6 run --vus 10 --duration 30s index.js``

---

## Visualizando o Resultado:
``k6 run --vus 50 --duration 30s --out csv=my_test_result.csv  index.js``
