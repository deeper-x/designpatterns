// Application is the asset type
type Application = {
  downloaded: boolean;
  untarred: boolean;
  configured: boolean;
  built: boolean;
  installed: boolean;
};

// IDeploy defines the operations set
interface IDeploy {
  wget(): this;
  untar(): this;
  configure(): this;
  make(): this;
  makeInstall(): this;
}

export class Deploy implements IDeploy {
  _app: Application;

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
