export default (prevState, {type, payload}) => {
    switch (type) {
      case 'GET_USER_LESSON_FOLDERS':
        return {
          ...prevState,
          userLessonFolders: payload,
          isLoading: false
        }
      default:
        return prevState
    }
  }