import { error } from "console";
import { Children, useEffect, useState } from "react"

const User:React.FC <any>=(props)=>{
    const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(20);
  const [iserror, setIserror] = useState<any>({ status: false, msg: "" });
  const checkErroe = (msg='default msg') => {
    alert(msg);
  };

  useEffect(() => {
   console.log('name',name)
    if (!iserror.status && name=='php') {
     
      checkErroe();
    }else if(iserror.status){
     checkErroe(iserror.msg);
    }
  }, [iserror]);

  const login = () => {
    if (name == "php") {
      setIserror({ status: true, msg: "name can not be php" });
    }
    console.log(name, age);
  };

return(
    <div>
        <h1>user component</h1>
        {props.children}

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
        /><br>
        </br>
        <button onClick={login}>login</button>
    </div>
)

}

export default User;