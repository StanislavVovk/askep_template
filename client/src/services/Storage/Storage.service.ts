export class StorageService {
  private readonly storage: Storage
  constructor(storage: Storage) {
    this.storage = storage
  }

  clearItem(searchParameter: string) {
    this.storage.removeItem(searchParameter)
  }

  clearStorage() {
    this.storage.clear()
  }

  getItem(searchParameter: string) {
    return this.storage.getItem(searchParameter)
  }

  setItem(key: string, data: any) {
    this.storage.setItem(key, data)
  }
}
