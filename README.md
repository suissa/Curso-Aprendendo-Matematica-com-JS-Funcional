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

### Dividir
