function MainPage() {

    const style = {
        width: '100%',
        height: '70vh',
        padding: '15%'
    }

    const mottoContainer = {
        textAlign: 'center',
        // background: 'linear-gradient(135deg, #0d0c22, #7186FF)',
        // WebkitBackgroundClip: 'text',
        // backgroundClip: 'text',
        // color: 'transparent',
        fontSize: '20px', // 원하는 폰트 크기로 조정하세요.
        fontWeight: 'bold',
  }
  

  return(
     <div style={style}>
        <div style = {mottoContainer}>
            <p className="slogan" style={{fontSize:'30px'}}>dataMindHub</p>
            <p>Unlocking the Power of Data, One Thought at a Time.</p>
        </div>
        <div style={{textAlign:'center', marginTop:'30px'}}>
             <button className="Button">Get Started</button>
        </div>
    </div>
    )
}

export default MainPage
