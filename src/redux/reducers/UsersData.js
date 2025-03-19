const initialState = {
  data: [],
  loading: false,
  error: null,
};

function UsersData(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.error };
    // Удаление пользователя
    case 'REMOVE_USER':
      return {
        ...state,
        data: state.data.filter((user) => user.id !== action.payload),
      };
    // Редактирование пользователя
    case 'UPDATE_USER':
      return {
        ...state,
        data: state.data.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user
        ),
      };
    default:
      return state;
  }
}

export default UsersData;
