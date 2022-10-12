import React from 'react';

const Options = () => {
    return (
        <div>
            <div>
            <div className="ans ml-2">
                          <label className="radio"> <input type="radio" name="brazil" value="brazil"/> <span>Brazil</span>
                          z</label>    
                        </div>
                        <div className="ans ml-2">
                          <label className="radio"> <input type="radio" name="Germany" value="Germany"/> <span>Germany</span>
                          </label>    
                        </div>
                        <div className="ans ml-2">
                          <label className="radio"> <input type="radio" name="Indonesia" value="Indonesia"/> <span>Indonesia</span>
                         </label>    
                        </div>
                        <div className="ans ml-2">
                           <label className="radio"> <input type="radio" name="Russia" value="Russia"/> <span>Russia</span>
                           </label>    
                        </div>
            </div>
        </div>
    );
};

export default Options;