import React from 'react';
import { ToastContainer , toast } from "react-toastify";
import { EyeIcon } from '@heroicons/react/24/solid';

const Options = ({options , correctAnswer}) => {

    // console.log(options)
    const isAns = () =>{
         if (options===correctAnswer) {
          toast.success("your answer is correct.", {theme: "colored",autoClose: 700,})
         }    
        else{
          toast.error("your answer is wrong correct.", {theme: "colored",autoClose: 700, })
        }
}
    

    return (
        <div>
            <div>
            <div className="ans ml-2">
                          <label className="radio"> 
                           <input onClick={isAns} type="radio" name="options" value="options"/> 
                           <span>{options}</span>
                           <ToastContainer>
                           </ToastContainer>
                          </label>    
                        </div>
            </div>
        </div>
    );
};

export default Options;