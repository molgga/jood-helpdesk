export class MockStorage {
  hash: { [key: string]: any } = {};
  getItem(key: string) {
    const item = this.hash[key];
    return item !== undefined ? item : null;
  }
  setItem(key: string, data: any) {
    this.hash[key] = data;
  }
  removeItem(key: string) {
    delete this.hash[key];
  }
}
