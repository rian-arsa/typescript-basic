import Laptop from "./ILaptop";
import { withLamp, withOutLamp } from "./Keyboard";

export default abstract class BaseLaptop<T> implements Laptop<T> {
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;

  constructor(name: string, type: T, numeric: boolean, button: boolean) {
    (this.name = name),
      (this.type = type),
      (this.withNumeric = numeric),
      (this.withTouchButton = button);
  }

  a() {
    console.log(withLamp());
  }
  ab() {
    console.log(withOutLamp());
  }
}
