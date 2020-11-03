import axios from 'axios';
import configuration from '../configuration';
import userDb from '../databases/user';

let {server} = configuration;

export const apiFindChats = (country,page)=>{
	return axios({
		method:'get',
		url:`${server}/api/v1/chat/find/${page}`,
		params : {
			country
		},
		headers:{'Authorization': "bearer " + userDb.get().token}
	})
	.then((response)=>{return response})
	.catch((err)=>{return err.response})
}

export const apiCreateChatText = (country,text)=>{
	return axios({
		method:'post',
		url:`${server}/api/v1/chat/create/text`,
		data : {
			country,
			text
		},
		headers:{'Authorization': "bearer " + userDb.get().token}
	})
	.then((response)=>{return response})
	.catch((err)=>{return err.response})
}
