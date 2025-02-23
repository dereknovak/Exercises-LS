function logUnknown(val: unknown): void {
  if (typeof val === 'string') console.log(val);
}

logUnknown('Hello, world!');  // Logs
logUnknown(42);               // Nothing
logUnknown(false);            // Nothing