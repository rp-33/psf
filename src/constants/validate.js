import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
    email: Yup.string()
     	.email('Correo invalido')
    	.required('Campo requerido'),
    password: Yup.string()
    	.min(6, 'Minimo 6 caracteres')
        .max(16, 'Maximo 16 caracteres')
     	.required('Campo requerido'),
});

export const signupSchema = Yup.object().shape({
    userName: Yup.string()
        .required("Campo requerido"),
    email: Yup.string()
        .email('Correo  invalido')
        .required('Campo requerido'),
    sex : Yup.string()
    	.required("Campo requerido"),
    age : Yup.number()
        .required('Campo requerido')
        .positive()
        .integer(),
    password: Yup.string()
        .min(6, 'Minimo 6 caracteres')
        .max(16, 'Maximo 16 caracteres')
     	.required('Campo requerido'),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las claves deben coincidir')
        .required('Campo requerido'),
});

export const crowdfundingSchema = Yup.object().shape({
    name: Yup.string()
        .required('Campo requerido'),
    description :  Yup.string()
        .required('Campo requerido'),
    time : Yup.number()
        .required('Campo requerido')
        .positive()
        .integer(),
    amount :  Yup.number()
        .required('Campo requerido')
        .positive()
        .integer()

});

export const professionSchema = Yup.object().shape({
    description :  Yup.string()
        .required('Campo requerido'),
    experience : Yup.number()
        .required('Campo requerido')
        .positive()
        .integer(),
    ci: Yup.number()
        .required('Campo requerido')
        .positive()
        .integer()
});


export const passwordSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Minimo 6 caracteres')
        .max(16, 'Maximo 16 caracteres')
        .required('Campo requerido'),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las claves deben coincidir')
        .required('Campo requerido'),
});


export const phoneSchema = Yup.object().shape({
    phone : Yup.string()
       .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 
            'Numero de telefono no valido'
        )
       .required('Este campo es obligatorio')
});