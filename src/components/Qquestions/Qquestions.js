import React from 'react';
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer , toast } from "react-toastify";
import Options from '../Options/Options';

const Qquestions = ({quizQuestion}) => {

    // console.log(quizQuestion);
    const {question, options, correctAnswer}= quizQuestion;

    const Toast = Swal.mixin({
        position: "bottom-center",
        theme: "colored",
        toast: true,
        timer: 2500,
        showConfirmButton:false,
        showCloseButton:true, 
      });
    

    return (
        <div>
            <div className="container mt-5">
              <div className="d-flex justify-content-center row">
                <div className="col-md-10 col-lg-10">
                  <div className="border">
                     <div className="question bg-white p-3 border-bottom">
                        <div className="d-flex align-items-center justify-content-between ">
                            <div className='d-flex flex-row align-items-center question-title'>
                                <h3 className="text-info">Q.</h3>
                                 <h5 className="mt-1 ml-2">{question}</h5>
                            </div>
                            <div>
                                 <div className='rounded-5' onClick={() =>Toast.fire({icon: "success", title: correctAnswer,})
                             }> 
                             <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                             <ToastContainer />
                             </div>                            
                            </div>
                         </div>                       
                    </div>
                    <div>
                       {options.map((options) => <Options
                    //    key={options.answer}
                       options={options}
                       correctAnswer={correctAnswer}
                       ></Options>
                       )}
                    </div>
                  </div>
                 </div>
              </div>
            </div>
           
        </div>
    );
};

export default Qquestions;