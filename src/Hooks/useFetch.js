import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [erro, setErro] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async(URL, Option)=> {
let response;
let json;
try{
  setErro(null);
  setLoading(true);
  response = await fetch(URL, Option);
  json =response.json();
  if(response.ok === false) throw new Error(json.messege);
}catch(err){
  json = null;
setErro(err.messege);
}finally{
  setData(json);
  setLoading(false);
  return{response, json};
}
  },[]);
  return {
    data,
    loading,
    erro,
    request
  };
};

export default useFetch;
