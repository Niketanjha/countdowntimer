import {useState,useEffect} from 'react';

export default function Clock(props){
        const [getButtonState,setButtonState]=useState(false);
    const [getTime,setTime]=useState(0);
    
    function tick(){
        if(getButtonState===true){
            setTime(getTime+1);
            props.setGlobalCounterNumber(()=>props.getGlobalCounterNumber+1);
        }
        else{
            return ;
        }
    }
    useEffect(()=>{    
        let myInterval=setInterval(()=>tick(),1000);
        return () => clearInterval(myInterval);
    });
    
    return(
        <div className="mainClockClass">
            <button 
            onClick={()=>{setButtonState(!getButtonState)}}
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