import "./MainPage.css";
import CodeUi from "./CodeUi";
import Carousel from "react-bootstrap/Carousel";

function MainPage() {
  const mottoContainer = {
    // 그라데이션 예제인데 지우기 아까워서 걍 냅둠.
    // background: 'linear-gradient(135deg, #0d0c22, #7186FF)',
    // WebkitBackgroundClip: 'text',
    // backgroundClip: 'text',
    // color: 'transparent',
  };

  return (
    <div>
      <div className="MainPageDiv">
        <div style={mottoContainer}>
          <p className="slogan">dataMindHub</p>
          <p className="slogan2">
            "Our First Project : Website Built with Spaghetti Code"
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <img
            src="/Icons.png"
            style={{ maxWidth: "100%", height: "auto", marginTop: "7%" }}
          />
        </div>
      </div>

      {/* 포스팅 기능 소개 */}
      <div className="MainPageDiv" style={{ paddingTop: "0px" }}>
        <div style={{ textAlign: "center" }}>
          <p className="Main2Title">노션 페이지 배포하기</p>
          <div style={{ textAlign: "center", marginBottom:'3%'}}>
            <p>대충 노션 포스팅 어케 하는지 보여주는 짤</p>
            <img
              style={{ height: "300px", width: "300px" }}
              src="https://images.unsplash.com/photo-1695010800005-50cb50823351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            />
            <p>대충 남들과 공유할 수 있다는 설명</p>
            <p>대충 이러쿵 저러쿵 하는 말</p>
          </div>{" "}
          <button className="Button">Get Started!</button>
        </div>
      </div>
      {/* 포스팅 기능 소개 끝*/}

      {/* 코딩노예 시작 */}
      <div className="divider1">
        <div className="custom-shape-divider-top-1694790510">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div className="MainPageDiv Main2" style={{ backgroundColor: "#F8F7F3" }}>
        <p className="Main2Title">코딩노예들</p>
        <div className="codeUi-section">
          <CodeUi />
          <CodeUi />
          <CodeUi />
          <CodeUi />
          <CodeUi />
        </div>
      </div>

      <div className="mobile-accordion">
        <p className="Mobile-Main2Title">코딩노예들</p>

        <Carousel>
          <Carousel.Item className="carousel">
            <div className="carosel-image">
              <CodeUi />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carosel-image">
              <CodeUi />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carosel-image">
              <CodeUi />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="divider2">
        <div className="custom-shape-divider-top-1694790510">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              className="shape-fill"
              style={{ fill: "#F8F7F3" }}
            ></path>
          </svg>
        </div>
      </div>
      {/* 코딩노예 끝 */}
    </div>
  );
}

export default MainPage;
