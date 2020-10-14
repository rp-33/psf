const UserModel = {
	name: 'User',
	primaryKey : '_id',
	properties: {
		_id: 'string',
		token : 'string',
		email : 'string',
		userName : 'string',
		avatar : 'string?',
		sex : 'string',
		notifications : 'bool',
		isAuthenticated : 'bool',
        age : 'int',
        country : 'string?',
        phone : 'int?',
        country_code : 'int?'
    }
};

export default UserModel;