interface KeyValuePair<Key, Value> {
  key: Key;
  value: Value;
}

const obj: KeyValuePair<string, number> = {
  key: 'This is a key',
  value: 22,
}