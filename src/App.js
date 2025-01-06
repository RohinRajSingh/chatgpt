
import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg'
function App() {
  return (
    <div className="App">
    
        <div className="sideBar">
            <div className="upperSide">
               <div className="upperSideTop"><img src={gptLogo} alt="" className ="logo"/><span className="brand">Chatgpt</span>
               </div>
               <button className="midBtn"><img src={addBtn} alt="" className="addBtn"/>New Chat</button>
               <div className="upperSideBottom">
                 <button className="query"><img src={msgIcon} alt="query"/>What is Programming ?</button>
                 <button className="query"><img src={msgIcon} alt="query"/>How to use an api ?</button>
               </div>
            </div>
            <div className="lowerSide">
               <div className="listItems"><img src={home} alt="" className ="listitemsImg"/>Home</div>
               <div className="listItems"><img src={saved}alt="" className ="listitemsImg"/>Saved</div>
               <div className="listItems"><img src={rocket} alt="" className ="listitemsImg"/>Upgrade to pro</div>
            </div>
        </div>
        <div className="mainBar">
           
        </div>
    </div>
  );
}

export default App;
