import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  
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

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
   getUserAge();
  }, []);

  useEffect(() => {
    getUserCmp();
   }, []);
 

  return <div>userinfo{title}<br></br>
  {age}<br></br>
  {cmp}</div>;
}


export default App;
