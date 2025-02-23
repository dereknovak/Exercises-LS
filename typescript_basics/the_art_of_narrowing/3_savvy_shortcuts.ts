function isDefined(val: string | undefined): void {
  val && console.log('Input is defined and not empty');
}

isDefined('hello');
isDefined(undefined);