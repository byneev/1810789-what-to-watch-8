export type UserProp = {
  'id': number,
  'name': string
}

export type CommentProp = {
  'id': number,
  'user': UserProp,
  'rating': number,
  'comment': string,
  'date': string
}

export type CommentPostProp = {
  rating: number,
  comment: string,
}
