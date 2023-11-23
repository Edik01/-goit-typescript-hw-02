interface KeyValuePair<K extends string | symbol, V> {
  key: K;
  value: V;
}

// Приклади використання
const pair1: KeyValuePair<number, string> = { key: 1, value: "one" }; // Помилка, оскільки key має бути строкою або символом
const pair2: KeyValuePair<string, boolean> = { key: "isTrue", value: true }; // Ок, так як key - строка
const pair3: KeyValuePair<symbol, number> = { key: Symbol(), value: 42 }; // Ок, так як key - символ
