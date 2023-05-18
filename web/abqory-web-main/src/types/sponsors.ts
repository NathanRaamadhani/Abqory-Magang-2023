export type Sponsor = {
  id: string
  name: string
  logo: {
    data: {
      id: string
      attributes: {
        url: string
        width: number
        height: number
      }
    }
  }
}
