import Database from '../realm/';

class userDb{
	constructor(){
		this.user = {};
	}

	save(user){
		if(Database.objects('User').length>0) return;
		Database.write(() => {
			Database.create('User', user);	
		});
		this.user = Database.objects('User')[0];
	};

	get(){
		let user = Database.objects('User')[0];
		if(user) this.user=user;
		return this.user;
	}

	logout(){
		Database.write(() => {
			Database.delete(Database.objects('User'));
		})
	}

	setCountryResidence (country){
		Database.write(() => {
			this.user.country = country;
		})
	}

	setAvatar (avatar){
		Database.write(() => {
			this.user.avatar = avatar;
		})
	}

	setPhone ({country_code,phone}){
		Database.write(() => {
			this.user.phone = parseInt(phone);
			this.user.country_code = parseInt(country_code);
		})
	}



}

export default new userDb;