import React, { useEffect } from "react";
import { useState } from "react";
export default function Form(){
    const [MultiInput, setuserInput] = useState(
        {
            username : "",
            email : "",
            password : ""
    });
    const [record,setRecord] = useState([]);
    // setuserInput({...userInput , email:'taes'});
    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value
        setuserInput({...MultiInput,[name] : e.target.value});

    }
    const handleResponce = (e)=>{
        e.preventDefault();
        const newrecord = {...MultiInput,id : new Date().getTime().toString()};
        // console.log(newrecord);
        setRecord([...record,newrecord]);
        console.log(record);
        setuserInput({username:'',email:'',password:''});

    }
    return(
       <>
       <div className="container mt-5">
            <div className="row">
                    <div className="col-4">
                        <form action="" onSubmit={handleResponce}>
                            <div>
                                <label htmlFor="username">Full Name
                                <input type="text" value={MultiInput.username} onChange={handleInput} name="username" id="username" /></label>
                            </div>
                            <div>
                                <label htmlFor="email">Email
                                <input type="email" value={MultiInput.email} onChange={handleInput} name="email" id="email" /></label>
                            </div>
                            <div>
                                <label htmlFor="password">password
                                <input type="text" value={MultiInput.password} onChange={handleInput} name="password" id="password" /></label>
                            </div>
                            <button type="submit">submit</button>

                        </form>
                    </div>
                    <div className="col-8">
                        <div>
                            
                            <table className="table text-light">
                            <thead>
                            </thead>
                                {
                                    record.map((curEle)=>{
                                        return (
                                                <tbody>
                                                <div>
                                                    <tr>
                                                    <th scope="row">1</th>
                                                    <td>{curEle.username}</td>
                                                    <td>{curEle.email}</td>
                                                    <td>{curEle.password}</td>
                                                    </tr>
                                                </div>
                                                </tbody>
                                        )
                                    })
                                }
                                </table>
                               
                        </div>
                    </div>
            </div>
       </div>
       </>
    )
}