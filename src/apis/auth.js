import axios from 'axios';
import configuration from '../configuration';
import userDb from '../databases/user';

let {server} = configuration

export const apiSignup = (userName,email,age,sex,password)=>{
    return axios({
		method:'post',
		url:`${server}/api/v1/signup`,
		data:{
			userName,
			email,
			sex,
			password,
			age
		}
	})
	.then((response)=>{return response})
	.catch((err)=>{return err.response})
}

export const apiLogin = (email,password)=>{
	return axios({
		method:'post',
		url:`${server}/api/v1/login`,
		data:{
			email,
			password
		}
	})
	.then((response) => {return response})
	.catch((err) => {return err.response})
}


export const apiLogout = ()=>{
	return axios({
		method:'put',
		url:`${server}/api/v1/logout`,
		headers:{'Authorization': "bearer " + userDb.get().token}
	})
	.then((response)=>{return response})
	.catch((err)=>{return err.response})
}