interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const pair1: KeyValuePair<number, string> = { key: 1, value: "one" };
const pair2: KeyValuePair<string, boolean> = { key: "isTrue", value: true };
