# Curso-Aprendendo-Matematica-com-JS-Funcional
Curso-Aprendendo-Matematica-com-JS funcional

## Competência 01 - Operações Matemáticas Básicas

### Somar

```js
const somar = (x, y) => x + y
```

### Subtrair

```js
const subtrair = (x, y) => x - y
```
Agora refatorando para reusar a função `somar`:

```js
const subtrair = (x, y) => somar(x, -y)
```


### Multiplicar

Criar a função da multiplicação utilizando um *looping* de somas. 

### Dividir


Criar a função da divisão utilizando um *looping* de subtrações e só pode aceitar números inteiros como parâmetro, contudo o resultado, se necessário, deve ser com decimal, exemplo:

```js
> dividir(5, 2)
2.5
```

