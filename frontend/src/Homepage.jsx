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
                    <div className='hero-badge'>
                        <span aria-hidden='true'>🔥</span> 
                        공정한 게임, 투명한 결과
                    </div>
                    <h1>
                        운을 넘어,
                        <br />
                        <span>기회를</span> 
                        잡아라
                    </h1>
                    <p className='hero-description'>공정한 게임, 투명한 결과, 짜릿한 플레이</p>
                    <div className='hero-actions'>
                        <button className='hero-start' type='button'>지금 무료로 플레이하기</button>
                        <button className='hero-game-guide' type='button'>게임 가이드</button>
                    </div>
                    
                </div>
                <div className='hero-right'>
                    <img src='/logo3d.png' alt='빛나는 칩과 주사위' className='logo3d' />
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
            </section>
                
                <section className='dashboard'>
                    <div className='dashboard-container'>
                        <div className='games'>
                            <div className='banner'>
                                <div className='banner-header'>
                                    <h3>
                                        <span className='games-icon'>🎲</span>
                                        인기 게임
                                    </h3>
                                </div>
                                <div className='game-cards'>
                                    <div className='game-card'>
                                        <div className='game-img'>
                                            <img src='maingame.png' alt='게임사진' />
                                        </div>
                                        <div className='game-details'>
                                            <h4>확률게임</h4>
                                        </div>
                                    </div>

                                    <div className='game-card'>
                                        <div className='game-img'>
                                            <img src='ready.png' alt='게임사진' />
                                        </div>
                                        <div className='game-details'>
                                            <h4>게임 준비중</h4>
                                        </div>
                                    </div>

                                    <div className='game-card'>
                                        <div className='game-img'>
                                            <img src='ready.png' alt='게임사진' />
                                        </div>
                                        <div className='game-details'>
                                            <h4>게임 준비중</h4>
                                        </div>
                                    </div>
                                    {/* <div className='game-card'>
                                        <div className='game-img'>
                                            <img src='' alt='게임사진' />
                                        </div>
                                        <div className='game-details'>
                                            <h4>게임 준비중</h4>
                                        </div>
                                    </div> */}
                                
                                </div>
                            </div>
                        </div>
                        <div className='ranking'>
                            <div className='banner'>
                                <div className='banner-header'>
                                    <h3>
                                        <span className='ranking-icon' aria-hidden='true'>🏆</span>
                                        실시간 랭킹
                                    </h3>
                                </div>
 
                                <div className='top-players' role='list' aria-label='실시간 랭킹 상위 3명'>
                                    <div className='player first-player' role='listitem' aria-label='1위 USER 01, 1,280 포인트'>
                                        <div className='medal' aria-hidden='true'>🥇</div>
                                        <span className='player-name'>USER 01</span>
                                        <span className='player-money'>1,280 P</span>
                                        <div className='podium first-place' aria-hidden='true'>1</div>
                                    </div>
                                    <div className='player second-player' role='listitem' aria-label='2위 USER 02, 860 포인트'>
                                        <div className='medal' aria-hidden='true'>🥈</div>
                                        <span className='player-name'>USER 02</span>
                                        <span className='player-money'>860 P</span>
                                        <div className='podium second-place' aria-hidden='true'>2</div>
                                    </div>
                                    <div className='player third-player' role='listitem' aria-label='3위 USER 03, 520 포인트'>
                                        <div className='medal' aria-hidden='true'>🥉</div>
                                        <span className='player-name'>USER 03</span>
                                        <span className='player-money'>520 P</span>
                                        <div className='podium third-place' aria-hidden='true'>3</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='ad'>
                            <a
                                className='banner game-ad'
                                href='https://papversus.com'
                            >
                                <img src='papversus.png'></img>
                            </a>
                        </div>
                    </div>
                </section>
            
        </main>
    )
}

export default Homepage
