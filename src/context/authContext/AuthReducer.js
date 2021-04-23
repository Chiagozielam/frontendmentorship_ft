export default (prevState, {type, payload}) => {
  switch (type) {
    case 'GET_USER':
      return {
        ...prevState,
        userToken: payload.token,
        user: payload.user
      }
    default:
      return prevState
  }
}
