import './Homepage.css'
function Homepage(){
    return(
        <div className='main'>
            <div className="header">
                <div className='logo'>
                    <img src='/logo.png' alt='로고' className='logo-img'/>  
                </div>
                <div className='buttons'>
                    <button className='inquiry'>문의하기</button>
                    <button className='start'>지금 무료로 플레이하기</button>
                </div>
            </div>

            <div className='hero'>
                <div className='hero-left'>
                    <h1>11</h1>
                </div>
            </div>

        </div>
    )
}

export default Homepage