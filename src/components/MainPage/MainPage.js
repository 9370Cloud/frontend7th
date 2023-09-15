import "./MainPage.css";

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
    <div>

      <div className="MainPageDiv">
        <div style={mottoContainer}>
          <p className="slogan">dataMindHub</p>
          <p className="slogan2">
            AI시대가 도래하면 프론트엔드보다 백엔드가 먼저 망할듯
          </p>
        </div>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button className="Button">Get Started</button>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src="/Icons.png"
            style={{ maxWidth: "100%", height: "auto", marginTop: "40px" }}
          />
        </div>
      </div>

      <div className="divider1">
        <div class="custom-shape-divider-top-1694790510">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
            </svg>
        </div>
      </div>

      <div className="MainPageDiv Main2" style={{backgroundColor:'#F8F7F3'}}>
        오늘은 여기까지 했습니다 너무 힘들어잉
      </div>

    </div>
  );
}

export default MainPage;
