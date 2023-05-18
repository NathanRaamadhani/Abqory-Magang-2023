export type SpeakerAttribute = {
  name: string
  title: string
  photo: {
    data: {
      id: string
      attributes: {
        width: number
        height: number
        url: string
      }
    }
  }
}

export type Speaker = {
  id: string
  attributes: SpeakerAttribute
}
