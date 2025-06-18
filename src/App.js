import "./App.css";
import addBtn from "./assets/add-30.png";
import saved from "./assets/bookmark.svg";
import gptLogo from "./assets/chatgpt.svg";
import gptImgLogo from "./assets/chatgptLogo.svg";
import home from "./assets/home.svg";
import msgIcon from "./assets/message.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>

          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>

          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is Programming?
            </button>
          </div>

          <button className="query">
            <img src={msgIcon} alt="Query" />
            How to use API?
          </button>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" /> Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg" /> Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Rocket" className="listItemsImg" /> Upgrade
            to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="txt">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="" />
            <p className="txt">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" />
            <button className="send">
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>
            ChatGPT may produce inaccurate information about people,places or
            facts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
