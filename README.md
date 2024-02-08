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
