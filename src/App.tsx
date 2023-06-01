import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("no schange");
  const [age, setAge] = useState(0);
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
  setTitle(age);
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
   getUserAge();
  }, []);


  return <div>userinfo{title}<br></br>
  {age}</div>;
}


export default App;
