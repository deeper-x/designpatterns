interface IBankAccount {
  ID: string;
  ownerID: string;
  balance: number;
  deposit(v: number): number;
  withdrawal(v: number): number;
}

// BankAccount is the base class
class BankAccount implements IBankAccount {
  private id: string;
  private _ownerID: string;
  private _balance: number;

  constructor(id: string, ownerID: string, balance: number) {
    this._id = id;
    this._ownerID = ownerID;
    this._balance = balance;
  }

  get ID(): string {
    return this._id;
  }

  get ownerID(): string {
    return this._ownerID;
  }

  get balance(): number {
    return this._balance;
  }

  public deposit(v: number): number {
    this._balance += v;
    return this._balance;
  }

  public withdrawal(v: number): number {
    this._balance -= v;
    return this._balance;
  }
}

// BankAccountBranchX custom branch X implementation
class BankAccountBranchX extends BankAccount {
  constructor(id: string, ownerID: string, balance: number) {
    super(id, ownerID, balance);
  }

  // custom local X service implementation
  public localServiceX(): string {
    return "this is an extra-service here on branch X";
  }
}

// BankAccountBranchY custom branch Y implementation
class BankAccountBranchY extends BankAccount {
  constructor(id: string, ownerID: string, balance: number) {
    super(id, ownerID, balance);
  }

  // custom local Y service implementation
  public localServiceY(): string {
    return "this is an extra-service here on branch Y";
  }
}
// Factory is the class we use to build object hiding implementation details
export class Factory {
  static createBank(
    btype: string,
    id: string,
    ownerID: string,
    balance: number,
  ): IBankAccount {
    switch (btype) {
      case "x":
        return new BankAccountBranchX(id, ownerID, balance);

      case "y":
        return new BankAccountBranchY(id, ownerID, balance);

      default:
        return new BankAccount(id, ownerID, balance);
    }
  }
}

// TEST:
// import { assertEquals } from "https://deno.land/std@0.141.0/testing/asserts.ts";
// import { Factory } from "./index.ts";

// Deno.test("create bank x account", () => {
//   const bx = Factory.createBank("x", "1", "10", 10000);
//   const id = bx.ID;
//   const expected = "1";

//   assertEquals(id, expected);
// });

// Deno.test("withdrawal", () => {
//   const b = Factory.createBank("boo", "1", "10", 10000);
//   let res: number = b.withdrawal(100);
//   let expected = 9900;

//   assertEquals(res, expected);
// });

// Deno.test("deposit", () => {
//   const by = Factory.createBank("y", "1", "10", 10000);
//   const res: number = by.deposit(1000);
//   const expected = 11000;

//   assertEquals(res, expected);
// });

// $ deno test
// Check file:///home/justorius/tsprojs/designpatterns/factory/factory_test.ts
// running 3 tests from ./factory/factory_test.ts
// create bank x account ... ok (4ms)
// withdrawal ... ok (2ms)
// deposit ... ok (2ms)

// test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (18ms)
