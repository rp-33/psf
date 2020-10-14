import axios from 'axios';
import configuration from '../configuration';
import userDb from '../databases/user';

let {server} = configuration;

export const apiEditCountry = (country)=>{
	return axios({
		method:'put',
		url:`${server}/api/v1/user/edit/country`,
		data : {
			country
		},
		headers:{'Authorization': "bearer " + userDb.get().token}
	})
	.then((response)=>{return response})
	.catch((err)=>{return err.response})
}

export const apiEditAvatar = (avatar)=>{
	
	let formData = new FormData();
	formData.append('file',avatar);

    return axios({
		method:'put',
		url:`${server}/api/v1/user/edit/avatar`,
		data: formData,
		headers:{'content-type':'multipart/form-data','Authorization': "bearer " + userDb.get().token}
	})
	.then((response)=>{return response})
	.catch((err)=>{return err.response})
}

export const apiEditProfession = (ci,profession,experience,description)=>{
	return axios({
		method:'put',
		url:`${server}/api/v1/user/edit/profession`,
		data : {
			ci,
			profession,
			experience,
			description
		},
		headers:{'Authorization': "bearer " + userDb.get().token}
	})
	.then((response)=>{return response})
	.catch((err)=>{return err.response})
}


export const apiEditPassword = (password)=>{
	return axios({
		method:'put',
		url:`${server}/api/v1/user/edit/password`,
		data : {
			password
		},
		headers:{'Authorization': "bearer " + userDb.get().token}
	})
	.then((response)=>{return response})
	.catch((err)=>{return err.response})
}

export const apiEditPhone = (countryCode,phone)=>{
	return axios({
		method:'put',
		url:`${server}/api/v1/user/edit/phone`,
		data : {
			countryCode,
			phone
		},
		headers:{'Authorization': "bearer " + userDb.get().token}
	})
	.then((response)=>{return response})
	.catch((err)=>{return err.response})
}