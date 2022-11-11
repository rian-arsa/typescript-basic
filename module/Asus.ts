import BaseLaptop from "./BaseLaptop";

class Asus<T> extends BaseLaptop<T> {
  constructor(type: T, numeric: boolean, click: boolean) {
    super("Asus", type, numeric, click);
  }
}

export default Asus;
