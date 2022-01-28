export class Url {
  public static searchQueryToObject = (query: string): Object => {
    query = query.trim();
    if (query.length <= 0 || !query.startsWith("?")) return {};
    query = query.slice(1);
    const inputs = query.split("&");
    let queryObject = {};
    for (let input of inputs) {
      const [key, val] = input.split("=");
      Object.assign(queryObject, { [key]: val });
    }
    return queryObject;
  };
}
