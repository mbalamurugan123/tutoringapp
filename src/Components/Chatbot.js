import chatlogo from './images/chatlogo.png';
import './styles/Chatbot.css'
function Chatbot(){

  let x=0;
  const open=()=>{
    if(x==0){
      
      document.getElementById("chat-box").style.width = "400px";
      document.getElementById("chat-box").style.height = "500px";
      x++;
    }
    else{
      
      document.getElementById("chat-box").style.width = "0";
      document.getElementById("chat-box").style.height = "0";
    }
  }


  return(
    <div className='chat-logo'>
      <div className='chat-box' id='chat-box'>
        <div className='chat-cont'>
          <p>Chat</p>
        </div>
        <div className='bobble'>
    <p>Hii, how can I help you ?</p>
  </div>
  <input type='text' className='chat-input'></input>
  <button type="submit" value="Submit" className='chat-btn'>Send</button><br/>
      </div>
      <span  onClick={open}>
        <img className='logo' src={chatlogo}></img>
      </span>
    </div>
  );
}
export default Chatbot;