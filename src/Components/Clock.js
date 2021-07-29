import {useState,useEffect, useRef} from 'react';

export default function Clock({setGlobalCounterNumber}){
    const [getButtonState,setButtonState]=useState(false);
    const [getTime,setTime]=useState(0);
    const reference=useRef(null);
    
    function tick(){
        if(getButtonState===true){
            setTime((getTime)=>getTime+1);
            setGlobalCounterNumber();
        }
        else if(!getButtonState===true && getTime!==0){
            clearInterval(reference.current);
        }
        else{
            return ;
        }
    }
    useEffect(()=>{    
        reference.current=setInterval(()=>tick(),1000);
        return () => clearInterval(reference.current);
    },[getButtonState,getTime]);
    
    return(
        <div className="mainClockClass">
            <button 
            onClick={()=>{setButtonState(()=>!getButtonState)}}
            className="btn btn-lg btn-block p-2 btn-light buttonClass">
                    {getButtonState===false?"Start Counter":"Stop Counter"}
            </button>
            <div className="text-center bg-light mt-3 py-4 rounded shadow">
                <span >
                    {getTime}
                </span>
            </div>
        </div>
    );
}