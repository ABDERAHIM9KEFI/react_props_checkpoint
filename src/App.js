import React from "react";
import Profile from "./profile/Profile";
import myimage from "./res/imgcv.jpg";
import "./style.css";
import "./App.css";

function App() {
  let Name = "abderahim kefi";
  let bio = " tennis player and huge fan of snooker";
  let prof = "business student&tennis Referee";

  const show = (e) => alert(e);

  return (
    <div className="App">
      <Profile Name={Name} bio={bio} prof={prof} show={show}>
        <img src={myimage} />
      </Profile>
    </div>
  );
}

export default App;
