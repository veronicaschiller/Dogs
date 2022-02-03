import React from 'react';
const types = {
  email:{
    Regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
    message: 'please, fill in correct email address'
  },
password: {
  regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
  ,
  messege: 'A senha precisa ter 1 caracter maiusculo, 1 minusculo e 1 digito. com no minimo 8 caracteres'
},

number: {
  regex: /^\d+$/ ,
  messege: 'use number'
},
};
const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [Erro, setErro] = React.useState('');
function validate (){
  if(type === false) 
  return true;
  if (value.length === 0){
    setErro('please, fill in one value')
    return false;
  }else if (types[type] && !types[type].Regex.test(value)){
    setErro(types[type].messege);
  }else {
    setErro(null);
    return true;
  }
}
  function onChange({target}){
    if(Erro)validate(target.value);
    setValue(target.value);
  }
  return {
    value,
    setValue,
    onChange,
    Erro,
    validate:() => validate(value),
    onBlur: () => validate(value),

  };
};

export default useForm;
