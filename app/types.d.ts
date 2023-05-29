export type Feature = {
  type: string
  properties: {
    description?: string
  }
  geometry: {
    coordinates: number[]
  }
}