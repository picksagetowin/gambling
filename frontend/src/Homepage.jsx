import './Homepage.css'
function Homepage(){
    return(
        <main className='main'>
            <header className="header">
                <div className='logo'>
                    <img src='/logo.png' alt='로고' className='logo-img'/>  
                </div>
                <div className='buttons'>
                    <button className='inquiry'>문의하기</button>
                    <button className='start'>지금 무료로 플레이하기</button>
                </div>
            </header>

            <section className='hero'>
                <div className='hero-left'>
                    <h1>11</h1>
                </div>
                <div className='hero-right'>
                    <img src='/logo3d.png' alt='3d로고' className='logo3d' />
                </div>
            </section>

            <section className='info'>
                <div className='notice-container'>
                    <div className='notice-banner'>
                        <div className='notice-left'>
                            {/* <svg className='notice-icon' viewBox='0 0 24 24' 
                            fill='none' stroke='currentColor' strokeWidth='2'>
                                <path d='m3 11 18-5v12L3 14v-3z' />
                                <path d='M11.6 16.8a3 3 0 1 1-5.8-1.6' />
                            </svg> */}
                            <span className='notice-word'>공지사항</span>
                            <span className='divider'>|</span>
                            <span className='notice'>1</span>
                        </div>
                    </div>
                </div>
                
                <section className='dashboard'>
                    <div className='games'>
                        <div className='game-banner'>
                            <div className='banner-header'>
                                <h3>
                                    <span className='game-icon'>❓</span>
                                    인기 게임
                                </h3>
                            </div>
                            <div className='game-cards'>
                                <div className='game-card'>
                                    <img src='' alt='게임사진' />
                                    <h4>확률게임</h4>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </main>
    )
}

export default Homepage