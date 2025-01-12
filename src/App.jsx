
import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import send from './assets/send.svg';
import gptImgLogo from './assets/chatgptLogo.svg';

import person from './assets/bussiness-man.png';
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
           <div className="chats" >
           <div className="chat">
                <img src ={person} alt=""/><p className="txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem voluptatem aut ea, deleniti recusandae ad obcaecati veniam harum mollitia rem impedit quasi neque odit corporis officia at nostrum nihil reprehenderit dolores dolore eius voluptates. Pariatur necessitatibus amet asperiores, nobis suscipit, soluta ipsam, provident exercitationem beatae officiis dolorum illo porro debitis. Nemo, quasi facere, ex eveniet necessitatibus deleniti sapiente voluptas illo alias cumque molestias enim? Autem quaerat repudiandae eligendi consectetur odit culpa dolores numquam nostrum? Aspernatur perferendis delectus amet quia voluptatem illo cumque natus, vero illum, totam accusantium voluptatum? Et possimus unde optio odit ducimus nemo porro rerum quibusdam nostrum iure.
                </p></div>
           
           <div className="chat bot" >
                <img src ={gptImgLogo} alt=""/><p className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iusto ex hic doloribus similique laborum nemo quas excepturi maiores, suscipit quidem ipsa, accusantium provident beatae quaerat deserunt accusamus aspernatur vitae sed? Rem aperiam deleniti officia similique nemo minima at rerum, optio velit quisquam, voluptatibus, modi eos facere sunt dignissimos provident! Sapiente dolor veritatis, sequi deleniti maiores fuga asperiores, quas libero impedit nostrum nam sunt dolorem nobis at ad expedita unde dolore nesciunt. Tempora eaque perferendis unde odit dolorem est, pariatur illum architecto. Pariatur dolorum corporis quia sunt aliquid necessitatibus. Ea hic dolorem harum quibusdam suscipit est, unde sed obcaecati nihil.
                </p>
           </div></div>
           <div className="chatfooter">
                <div className="inp">
                    <input type="text" placeholder='send a message' id= ""/><button className="send"><img src={send} alt="sidebtn"/></button>
                </div>
                <p>ChatGPT may produce incorrect information about people,places or facts. Version 1.0</p>
           </div>
        </div>
    </div>
  );
}

export default App;
