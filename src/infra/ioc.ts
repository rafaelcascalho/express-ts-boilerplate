class IOC {
  public repositories: any

  constructor() {
    this.repositories = {}
  }

  addRepository({ client, service }) {
    this.repositories[service] = client
    return this
  }
}

export default new IOC()
