function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

// Приклад використання
const mergedObj = merge({ name: "John" }, { age: 25 });
