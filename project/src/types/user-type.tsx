export type UserLoginProp = {
  'email': string,
  'password': string
}

export type UserAuthServerProp = {
  'id': number,
  'email': string,
  'name': string,
  'avatar_url': string,
  'token': string
}

export type UserAuthClientProp = {
  'id': number,
  'email': string,
  'name': string,
  'avatarUrl': string,
  'token': string
}
