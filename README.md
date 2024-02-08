# Ejercicios

## Ejercicio 1

En la carpeta `src/mylib.js` tienes una librería de funciones en JavaScript. En el archivo `src/index.ts` se está importando la librería, pero TypeScript no reconoce los tipos de datos que se están utilizando porque no existen.

Crea un archivo de definiciones de tipos para la librería. Asegúrate de que TypeScript reconoce los tipos de datos de la librería invocando a sus diferentes métodos en el archivo `src/index.ts`.

## Ejercicio 2

Crea una función llamada `plus` que reciba dos parámetros, que pueden ser o dos números o dos textos. Si recibe dos números, debe devolver la suma. Si recibe dos textos, debe devolverlos concatenados.

## Ejercicio 3

Crea una función genérica que tome dos valores de cualquier tipo y devuelva un array con esos valores intercambiados. Ejemplo: si le paso un 3 y un 'Hola' debería devolver ['Hola', 3].

## Ejercicio 4

Dado este código:

```ts
interface User {
  username: string;
  password: string;
}

interface Admin extends User {
  permissions: ("create" | "update" | "delete")[];
  level: number;
  departament: string;
}
```

Crea una función `checkUserPermission(user, permission)` que devuelva `true` o `false` dependiendo de si el usuario recibido en el primer parámetro tiene el permiso recibido en el segundo parámetro.

Por ejemplo:

```ts
checkUserPermission(luis, "create"); // true
```

## Ejercicio 5

A partir de esta interfaz:

```ts
interface Dog {
  name: string;
  breed: string;
  age: number;
  givesPaw: boolean;
}
```

Crea una función `changeDogData` que reciba un perro como primer parámetro, y un subconjunto de propiedades de un perro como segundo. Debe modificar las propiedades recibidas y devolver el nuevo perro cambiado.

```ts
let dog = {
  name: "Toby",
  breed: "Chucher",
  age: 5,
  givesPaw: false,
};

dog = changeDogData(dog, { age: 6, givesPaw: true });

/*
{
  name: "Toby",
  breed: "Chucher",
  age: 6,
  givesPaw: true
}
*/
```

## Ejercicio 6

Estás trabajando en un ecommerce y tienes que programar el módulo del checkout. En este ejercicio no puedes usar `interface`. Recuerda dejar todo preparado para que en un futuro las `id` puedan cambiar de `number` a `string` sin tener que modificar mucho código.

Te viene dado un array de categorías en forma de strings. Este listado de categorías no va a cambiar nunca.

```ts
const categories = ["children", "adults", "pets"];
```

Crea un tipo `CategoriesProducts` para tipar un objeto así:

```ts
const categoriesProducts: CategoriesProducts = {
  adults: 33,
  children: 21,
  pets: 18,
};
```

Crea un tipo `Product` que tenga:

- id
- nombre
- categoría
- precio
- unidades en stock

Crea un tipo `PreOrder` que tenga:

- id de cliente
- fecha
- productos (opcional)
- importe total (opcional)

En el campo productos se debe almacenar un array de objetos que tengan esta información:

- id de producto
- unidades

Crea un tipo `Order` que tenga todas las propiedades de `PreOrder` pero obligatorias, con un par de datos extra: la id y la dirección de entrega del pedido.

Crea un tipo `ClientsOrdersAddresses` para un objeto donde cada key será una id de cliente. En cada key tiene que haber un objeto cuya key será una id de pedido, y en cada una de estas keys tiene que haber un objeto con los productos del pedido y su dirección. Servirá para tipar un objeto así:

```ts
const clientsOrdersAddresses = {
  13: {  // id de cliente
    45: {  // id de pedido
      products: [{...}, {...}], // array con los productos del pedido
      address: "..." // la dirección del pedido
    },
    67: {
      products: [{...}, {...}],
      address: "..."
    }
  },
  15: {
    ...
  }
}
```

Una vez que tengas todos los tipos, crea las siguientes funciones:

`addLineToPreOrder`: recibe un pedido que puede ser `Order` o `PreOrder`. Si lo recibido es un pedido completo, debe lanzar un error. También recibe un objeto con la id del producto a añadir y las unidades.

`processOrder`: recibe un pedido que puede ser `Order` o `PreOrder`. Si lo recibido no es un pedido completo, debe lanzar un error. Si es un pedido completo, debe consolear sus datos.

`increaseTotalProductsInCategory`: recibe un objeto `categoriesProducts`, un nombre de categoría (de las existentes en ese objeto) y una cantidad, y le incrementa a esa categoría la cantidad recibida.

`getOrderAddress`: recibe un objeto `clientsOrdersAddresses`, una id de cliente y una id de pedido, y tiene que devolver la dirección de entrega.
