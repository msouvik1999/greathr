import InputField from "../../components/inputField/input";
import CustomButton from "../../components/button";
import { useState,useEffect } from "react";
import { Form ,Button,Input} from 'antd';
import classes from "./style.module.css"


const LogInOrRegister=()=>{
        // const[userName,setUserName]=useState('');
        // const[userPassword,setUserPassword]=useState('')
       

    // const formSubmitHandler =()=>{
    //     console.log('data :>> ',userName,userPassword);
    // }

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    


    // const userInputedEmailHandler=(e)=>{
        
    //     console.log('e :>> ', e);
    //     setUserName(e);
    // }
    // const userInputedPasswordHandler=(e)=>{
    //     setUserPassword(e)
    //     console.log('e :>> ', e);
    // }
    return (
        <>
       <div style={{textAlign:"center"}}>
       <h1>
            User Login
        </h1>
        
           <Form
            onFinish={onFinish}
           >
           <div>
               <Form.Item
               label ="UserName"
               name="username"
               rules={[
                   {
                    required: true,
                    message: 'Please input your User Name!',
                   }
               ]

               }
            >
            {/* <InputField placeholder="Enter Email" type="email" userInputed={userInputedEmailHandler}/> */}
            <Input placeholder="Enter Email" type="text" className={classes.inputBox} />
            </Form.Item>
             <br />
            <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
            {/* <InputField placeholder="Enter Password" type="password"
             userInputed={userInputedPasswordHandler}/> */}
            <Input placeholder="Enter Password" type="password"  className={classes.inputBox}/>
            </Form.Item>
            
            </div>
            {/* <CustomButton
             isClicked={formSubmitHandler}
              type="submit"/> */}
      <Button type="primary"   htmlType="submit" className={classes.button}>Submit</Button>

           </Form>
       </div>
        </>
    );
}
export default LogInOrRegister