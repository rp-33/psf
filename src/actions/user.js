export const actionSetAuth = (payload)=>({
    type : 'AUTH_USER',
	payload
});

export const actionSetLogout = ()=>({
    type : 'LOGOUT_USER'
});

export const actionSetCountry = (payload)=>({
	type : 'EDIT_COUNTRY_USER',
	payload
})


export const actionSetAvatar = (payload)=>({
	type : 'EDIT_AVATAR_USER',
	payload
})