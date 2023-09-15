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
        <p className="slogan2">AI시대가 도래하면 프론트엔드보다 백엔드가 먼저 망할듯</p>
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
