class Left<T> {
    private data: T;
    constructor(d:T){this.data = d}
    static of<S>(d:S){return new Left<S>(d)}
    map(fn:(x:T)=>T):Either<T>{return this}
    val():T{return this.data}
  }

  class Right<T> {
    private data: T;
    constructor(d:T){this.data = d}
    static of<S>(d:S){return new Right<S>(d)}
    map(fn:(x:T)=>T):Either<T>{return Right.of(fn(this.data))}
    val():T{return this.data}
  }
  type Either<T> = Left<T> | Right<T>;