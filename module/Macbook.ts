import BaseLaptop from "./BaseLaptop";

class Macbook<T> extends BaseLaptop<T> {
  constructor(type: T, numeric: boolean, click: boolean) {
    super("Macbook", type, numeric, click);
  }
}

export default Macbook;
