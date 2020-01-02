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

```js
const multiplicar = (x, y) => {
  let counter = 0
  while (x) {
    counter = somar(counter, y)
    x = x - 1;
  }
  return counter
}
```
### Dividir


Criar a função da divisão utilizando um *looping* de subtrações e só pode aceitar números inteiros como parâmetro, contudo o resultado, se necessário, deve ser com decimal, exemplo:

```js
const dividir = (x, y) => {
  let total = x;
  let contador = 0;

  if (!Number.isInteger(x) || !Number.isInteger(y)) {
    return false
  }

  if (y !== 0) {
    if (x === y) {
      return 1;
    }
    while (total > 0) {
      total = total - y;
      contador = contador + 1;
    }
    return contador;
  }
  return false;
}
```

```js
> dividir(5, 2)
2.5
```

