import axios from 'axios';
import configuration from '../configuration';

let {server} = configuration;

export const apiSendcode = (email)=>{
	return axios({
		method:'post',
		url:`${server}/api/v1/password/sendCode`,
		data : {
			email
		}})
	.then((response)=>{return response})
	.catch((err)=>{return err.response})
}

export const apiCodePassword= (code,email)=>{
	return axios({
		method:'get',
		url:`${server}/api/v1/password/verifiedCode`,
		params : {
			code,
			email
		}})
	.then((response)=>{return response})
	.catch((err)=>{return err.response})
}


export const apiNewPassword = (password,token)=>{
	return axios({
		method:'put',
		url:`${server}/api/v1/password/new`,
		data : {
			password
		},
		headers:{'Authorization': "bearer " + token}
	})
	.then((response)=>{return response})
	.catch((err)=>{return err.response})
}
