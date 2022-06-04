// Application is the asset type, we want to control props of
type Application = {
  downloaded: boolean;
  untarred: boolean;
  configured: boolean;
  built: boolean;
  installed: boolean;
};

// IDeploy defines the deployment operations set
interface IDeploy {
  wget(): this;
  untar(): this;
  configure(): this;
  make(): this;
  makeInstall(): this;
}

// Deploy is the class based on builder pattern
export class Deploy implements IDeploy {
  private _app: Application;

  constructor() {
    this._app = {
      downloaded: false,
      untarred: false,
      built: false,
      configured: false,
      installed: false,
    };
  }

  public wget(): this {
    console.log("Downloading...");
    this._app.downloaded = true;

    return this;
  }

  public untar(): this {
    console.log("Untarring archive...");
    this._app.untarred = true;

    return this;
  }

  public configure(): this {
    console.log("Checking compiler configuration...");
    this._app.configured = true;

    return this;
  }

  public make(): this {
    console.log("Building from source...");
    this._app.built = true;

    return this;
  }

  public makeInstall(): this {
    console.log("Installing...");
    this._app.installed = true;

    return this;
  }

  public checkInstall(): boolean {
    console.log("Verify installation...");

    return this._app.installed;
  }
}

export class Sysadmin {
  static run(): Deploy {
    return new Deploy().wget().untar().configure().make().makeInstall();
  }
}

// import { Deploy, Sysadmin } from "./index.ts";
// import { assertFalse } from "https://deno.land/std@0.142.0/testing/asserts.ts";

// Deno.test("deploy test", () => {
//   const app: Deploy = Sysadmin.run();
//   const ok: boolean = app.checkInstall();

//   assertFalse(!ok);
// });
