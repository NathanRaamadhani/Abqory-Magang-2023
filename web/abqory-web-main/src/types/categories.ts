export type CategoryAttribute = {
  name: string
  createdAt: string
  updatedAt: string
}

export type Category = {
  id: string
  attributes: CategoryAttribute
}

export type CategoryResponse = {
  categories: {
    data: Category[]
  }
}
