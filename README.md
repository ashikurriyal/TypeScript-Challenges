# Blog-Task

### 2. What is the use of the `keyof` keyword in TypeScript? Provide an example.

The `keyof` keyword is used to extract the keys of a type as a union of string literal types. It enables powerful type-safe programming patterns, especially when working with generic functions or object manipulation. `keyof` ensures that you can only access properties that actually exist on the given type

```
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; // "name" | "age"

function getValue(obj: Person, key: PersonKeys) {
  return obj[key];
}

const person: Person = { name: "Ashikur Riyal", age: 25 };
console.log(getValue(person, "name"));
console.log(getValue(person, "age"));
```
The Output is:
```
Ashikur Riyal
25
```