# Blog-Task

### 2. What is the use of the `keyof` keyword in TypeScript? Provide an example.

The `keyof` keyword is used to extract the keys of a type as a union of string literal types. It enables powerful type-safe programming patterns, especially when working with generic functions or object manipulation. `keyof` ensures that you can only access properties that actually exist on the given type

```ts
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

### 2. Provide an example of using `union` and `intersection` types in TypeScript.

- **Union Types (|)** 
Union types allow a variable to hold values from multiple possible types.
```ts
type BackendDeveloper = 'juniorDeveloper' | 'seniorDeveloper';
type FrontendDeveloper = 'juniorDeveloper' | 'seniorDeveloper';
type Developer = BackendDeveloper | FrontendDeveloper;

const employee: Developer = 'seniorDeveloper'; // Can be any valid union value

```
Here, `Developer` can be either a `FrontendDeveloper` or `BackendDeveloper`.

- **Intersection Types(&)** 
Intersection types combine multiple types into one. The resulting type must satisfy all the combined types.

```ts
type Frontend = {
  skills: string[];
  designation1: 'Frontend Developer';
};

type Backend = {
  skills: string[];
  designation2: 'Backend Developer';
};

type FullStackDeveloper = Frontend & Backend;

const dev: FullStackDeveloper = {
  skills: ['HTML', 'CSS', 'Express'],
  designation1: 'Frontend Developer',
  designation2: 'Backend Developer'
};

```
Here, `FullStackDeveloper` must include properties from both `Frontend` and `Backend`.

