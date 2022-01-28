export class OAuthProvider {
  public name: string = "";
  public imageUrl: string = "";
  public api: string = "";
  public backgroundColorHex: string = "#fff";

  constructor(
    name: string,
    imageUrl: string,
    api: string,
    backgroundColorHex: string
  ) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.api = api;
    this.backgroundColorHex = backgroundColorHex;
  }
}
