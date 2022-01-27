export class Page {
  public static redirect = (toCompleteUrl: string) => {
    window.location.href = toCompleteUrl;
  };
}
