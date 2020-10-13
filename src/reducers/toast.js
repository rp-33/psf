const initialState = {
	visible : false,
	title : '',
	type : ''
}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'TOAST':
        return action.payload;
      default:
        return state;
    }
};