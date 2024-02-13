import { useState } from "react"
export default function FAQ(){
    const[add,Setsadd]=useState(-10);
    const[hovered,Sethovered]=useState(-10);
    function handleSymbol(id){
          if(add===id){
            Setsadd(-10);
          }
          else{
            Setsadd(id);
          }
    }
    return(
        <div className="FAQ">
            <div className="Header"><h1>FAQs</h1></div>
             <div className="div1">
                <div className="div1_1" onClick={() => handleSymbol(1)} 
                style={{ backgroundColor:add===1?'#64bc6e':hovered===1?'#64bc6e':'white'}}
                onMouseEnter={()=>Sethovered(1)}
                onMouseLeave={()=>Sethovered(-10)}>
                    <p>Why should I consult Dr. Manik Dalvi?</p>
                    <span id="add" style={{ display: add===1 ? 'block' : 'none' }}>-</span>
                    <span id="add" style={{ display: add!==1 ? 'block' : 'none' }}>+</span>
                </div>
                <div className="div1_2" style={{ display: add===1 ? 'block' : 'none' }}>
                    <p>Dr. Manik Dalvi is a specialist in Obstetrics & Gynecology. She has more than 12 years of experience.</p>
                </div>
             </div>
             <div className="div1">
                <div className="div2_1" onClick={() => handleSymbol(2)} 
                style={{ backgroundColor:add===2?'#64bc6e':hovered===2?'#64bc6e':'white'}}
                onMouseEnter={()=>Sethovered(2)}
                onMouseLeave={()=>Sethovered(-10)}>
                    <p>Why is it best to consult a specialist?</p>
                    <span id="add" style={{ display: add===2 ? 'block' : 'none' }}>-</span>
                    <span id="add" style={{ display: add!==2 ? 'block' : 'none' }}>+</span>
                </div>
                <div className="div2_2" style={{ display: add===2 ? 'block' : 'none' }}>
                    <p>A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.</p>
                </div>
             </div>
             <div className="div1">
                <div className="div3_1" onClick={() => handleSymbol(3)} 
                style={{ backgroundColor:add===3?'#64bc6e':hovered===3?'#64bc6e':'white'}}
                onMouseEnter={()=>Sethovered(3)}
                onMouseLeave={()=>Sethovered(-10)}>
                    <p>How can I book an appointment with Dr. Manik Dalvi?</p>
                    <span id="add" style={{ display: add===3 ? 'block' : 'none' }}>-</span>
                    <span id="add" style={{ display: add!==3 ? 'block' : 'none' }}>+</span>
                </div>
                <div className="div3_2" style={{ display: add===3 ? 'block' : 'none' }}>
                    <p>You can book an appointment by clicking here.</p>
                </div>
             </div>
             <div className="div1">
                <div className="div4_1" onClick={() => handleSymbol(4)} 
                style={{ backgroundColor:add===4?'#64bc6e':hovered===4?'#64bc6e':'white'}}
                onMouseEnter={()=>Sethovered(4)}
                onMouseLeave={()=>Sethovered(-10)}>
                    <p>What are the different modes of consultation?</p>
                    <span id="add" style={{ display: add===4 ? 'block' : 'none' }}>-</span>
                    <span id="add" style={{ display: add!==4? 'block' : 'none' }}>+</span>
                </div>
                <div className="div4_2" style={{ display: add===4 ? 'block' : 'none' }}>
                    <p>Dr. Manik Dalvi provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bhiwandi or you can also consult the doctor online via video or telephonic call. Please click here to book an appointment.</p>
                </div>
             </div>
             <div className="div1">
                <div className="div5_1" onClick={() => handleSymbol(5)} 
                style={{ backgroundColor:add===5?'#64bc6e':hovered===5?'#64bc6e':'white'}}
                onMouseEnter={()=>Sethovered(5)}
                onMouseLeave={()=>Sethovered(-10)} >
                    <p>Are safety guidelines followed in Dr. Manik Dalvi's consultation chamber?</p>
                    <span id="add" style={{ display: add===5 ? 'block' : 'none' }}>-</span>
                    <span id="add" style={{ display: add!==5 ? 'block' : 'none' }}>+</span>
                </div>
                <div className="div5_2" style={{ display: add===5 ? 'block' : 'none' }}>
                    <p>Yes, our staff and clinic follows all safety protocols and we take appropriate measures to ensure a safe environment for our patients, including social distancing and hand sanitizing stations.</p>
                </div>
             </div>
             <div className="div1">
                <div className="div6_1" onClick={() => handleSymbol(6)} 
                style={{ backgroundColor:add===6?'#64bc6e':hovered===6?'#64bc6e':'white'}}
                onMouseEnter={()=>Sethovered(6)}
                onMouseLeave={()=>Sethovered(-10)}>
                    <p>What if my query is not listed here?</p>
                    <span id="add" style={{ display: add===6 ? 'block' : 'none' }}>-</span>
                    <span id="add" style={{ display: add!==6 ? 'block' : 'none' }}>+</span>
                </div>
                <div className="div6_2" style={{ display: add===6 ? 'block' : 'none' }}>
                    <p>If you have any more queries that aren't listed, you can email us or call us.</p>
                </div>
             </div>
        </div>
    )
}