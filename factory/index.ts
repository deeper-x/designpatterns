interface IBankAccount {
  ID: string;
  ownerID: string;
  balance: number;
  deposit(v: number): number;
  withdrawal(v: number): number;
}

class BankAccount implements IBankAccount {
  private _id: string;
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

class BankAccountBranchX extends BankAccount {
  constructor(id: string, ownerID: string, balance: number) {
    super(id, ownerID, balance);
  }

  public localServiceX(): string {
    return "this is an extra-service here on branch X";
  }
}

class BankAccountBranchY extends BankAccount {
  constructor(id: string, ownerID: string, balance: number) {
    super(id, ownerID, balance);
  }

  public localServiceY(): string {
    return "this is an extra-service here on branch Y";
  }
}

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
