import Icon from "./icon";
import './MainPage.css'

function MainPage() {
 
  const mottoContainer = {
    textAlign: "center",
    // background: 'linear-gradient(135deg, #0d0c22, #7186FF)',
    // WebkitBackgroundClip: 'text',
    // backgroundClip: 'text',
    // color: 'transparent',
    fontWeight: "bold",
  };

  return (
    <div className="MainPageDiv">
      <div style={mottoContainer}>
        <p className="slogan" >
          dataMindHub
        </p>
        <p className="slogan2">Unlocking the Power of Data, One Thought at a Time.</p>
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button className="Button">Get Started</button>
      </div>
      <div style={{ textAlign: "center" }}>
        <img src="/Icons.png" style={{ maxWidth: "100%", height: "auto", marginTop: "40px" }} />
      </div>
    </div>
  );
}

export default MainPage;
