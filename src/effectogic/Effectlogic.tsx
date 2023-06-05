import React, { useEffect, useState } from "react";

import { STATUS_CODES } from "http";

function Effectlogic() {
  const[iserror, setIserror]=useState<boolean>(false);
  const[isloading, setIsloading]=useState<boolean>(false);
  const [title, setTitle] = useState("no schange");
  const [age, setAge] = useState<number>(0);
  const [cmp,setCmp]=useState("")
  const UserApi = () => {
    return new Promise<any>((resolve, reject) => {
      return setTimeout(() => {
        resolve({ name: "achal" });
      }, 1000);
    });
  };

 const UserAgeApi = () => {
    return new Promise<any>((resolve, reject) => {
      return setTimeout(() => {
       resolve({age:22 });
     }, 1000);
   });
  };

  const UserCmpApi = () => {
    return new Promise<any>((resolve, reject) => {
      return setTimeout(() => {
       resolve({cmp:'TCS' });
     }, 1000);
   });
  };

  const getUserData = async () => {
    const userDAta = await UserApi();
    console.log(userDAta);
    const { name } = userDAta;
    setTitle(name);
  };

  const getUserAge = async () => {
   const userAgeDAta = await UserAgeApi();
   console.log(userAgeDAta);
   const { age } = userAgeDAta;
  setAge(age);
  };

  const getUserCmp = async () => {
    const userCmpDAta = await UserCmpApi();
    console.log(userCmpDAta);
    const { cmp } = userCmpDAta;
   setCmp(cmp);
   };

   const changeloadingState=()=>{
    const loadingState=!isloading;
       setIsloading(loadingState);
   }
   const ErrorState=()=>{
    const erroeState=!iserror;
       setIserror(erroeState);
   }

  useEffect(() => {
    getUserData();
  }, []);
  useEffect(() => {
    console.log(isloading)
    console.log(iserror);
  }, [isloading,iserror]);

 

  useEffect(() => {
   getUserAge();
  }, []);

  useEffect(() => {
    getUserCmp();
   }, []);
 

  return <div>userinfo{title}<br></br>
  {age}<br></br>
  {cmp}<br></br>
  {isloading? "......loading":"loaded"}
  <button onClick={changeloadingState}>submit</button>
 <br></br>
 {iserror? "......error":"noerroe"}
  <button onClick={ErrorState}>error</button>
  </div>;

  
 
}


export default Effectlogic;
