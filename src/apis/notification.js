import axios from 'axios';
import configuration from '../configuration';
import userDb from '../databases/user';

let {server} = configuration;

export const apiFindNotification = (page)=>{
	return axios({
		method:'get',
		url:`${server}/api/v1/notification/find/${page}`,
		headers:{'Authorization': "bearer " + userDb.get().token}
	})
	.then((response)=>{return response})
	.catch((err)=>{return err.response})
}

