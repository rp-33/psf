import axios from 'axios';
import configuration from '../configuration';
import userDb from '../databases/user';

let {server} = configuration;

export const apiCreateProject = (type,name,description,time,amount,images)=>{
	let formData = new FormData();
	formData.append('type',type);
	formData.append('name',name);
	formData.append('description',description);
	formData.append('time',time);
	formData.append('amount',amount);

	images.forEach((uri,index) => {
		formData.append('file',uri);
	})

    return axios({
		method:'post',
		url:`${server}/api/v1/project/create`,
		data: formData,
		headers:{'content-type':'multipart/form-data','Authorization': "bearer " + userDb.get().token}
	})
	.then((response)=>{return response})
	.catch((err)=>{return err.response})
}


export const apiFindMyProjects = (page)=>{
	return axios({
		method:'get',
		url:`${server}/api/v1/project/findMyProjects/${page}`,
		headers:{'Authorization': "bearer " + userDb.get().token}
	})
	.then((response)=>{return response})
	.catch((err)=>{return err.response})
}


export const apiFindProjects = (page)=>{
	return axios({
		method:'get',
		url:`${server}/api/v1/project/findProjects/${page}`,
		headers:{'Authorization': "bearer " + userDb.get().token}
	})
	.then((response)=>{return response})
	.catch((err)=>{return err.response})
}