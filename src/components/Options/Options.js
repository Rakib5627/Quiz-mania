import React from 'react';
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Options = ({options , correctAnswer}) => {

    // console.log(options)
    const isAns = () =>{
         if (options===correctAnswer) {
          toast.success("your answer is correct.", {theme: "colored",autoClose: 2000,})
         }    
        else{
          toast.error("your answer is wrong.", {theme: "colored",autoClose: 2000, })
        }
}
    

    return (
        <div>
            <div>
            <div className="ans ml-2">
                          <label className="radio"> 
                           <input onClick={isAns} type="radio" name="options" value="options"/> 
                           <span>{options}</span>
                           <ToastContainer/>
                          </label>    
                        </div>
            </div>
        </div>
    );
};

export default Options;