import userDb from '../databases/user';

const initUser = {
	_id: null,
	token : null,
	email : null,
	userName : null,
	avatar : null,
	sex: '',
	age : null,
	country : null,
	isAuthenticated : false,
	notifications : true,
    country_code : null,
    phone : null
}

let initialState = userDb.get() || initUser;

export default (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_USER':
        	userDb.save(action.payload);
            return userDb.get();
        case 'EDIT_COUNTRY_USER':
            userDb.setCountryResidence(action.payload);
            return userDb.get();
        case 'EDIT_AVATAR_USER':
            userDb.setAvatar(action.payload);
            return userDb.get();
        case 'EDIT_PHONE_USER':
            userDb.setPhone(action.payload);
            return userDb.get();
        case 'LOGOUT_USER':
        	userDb.logout();
			return initUser;
        default:
            return state;
    }
};