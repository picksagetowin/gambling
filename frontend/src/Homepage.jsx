import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_ORIGIN } from './api.js'
import './Homepage.css'
function Homepage(){
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [loginError, setLoginError] = useState('')
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    const navigate = useNavigate()

    async function handleLogin(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        setLoginError('')
        setIsLoggingIn(true)

        try {
            const response = await fetch(`${API_ORIGIN}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    id: formData.get('id'),
                    password: formData.get('password'),
                }),
            })
            const result = await response.json().catch(() => ({}))
            if (!response.ok) throw new Error(result.detail || '로그인에 실패했습니다.')

            navigate('/ingame')
        } catch (error) {
            setLoginError(error.message)
        } finally {
            setIsLoggingIn(false)
        }
    }

    return(
        <main className='main'>
            <header className="header">
                <div className='logo'>
                    <img src='/logo.png' alt='로고' className='logo-img'/>  
                </div>
                <div className='buttons'>
                    <button className='inquiry'>문의하기</button>
                    <button className='start' type='button' onClick={() => setIsLoginModalOpen(true)}>지금 무료로 플레이하기</button>
                </div>
            </header>

            <section className='hero'>
                <div className='hero-left'>
                    <div className='hero-badge'>
                        {/* <span aria-hidden='true'>🔥</span>  */}
                        공정한 게임, 투명한 결과
                    </div>
                    <h1>
                        Gambling
                        <br />
                        <span>Web</span> 
                        site
                    </h1>
                    <p className='hero-description'>공정한 게임, 투명한 결과, 짜릿한 플레이</p>
                    <div className='hero-actions'>
                        <button className='hero-start' type='button' onClick={() => setIsLoginModalOpen(true)}>지금 무료로 플레이하기</button>
                        <button className='hero-game-guide' type='button'>제작 정보</button>
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
                            <div className='banner'>
                                <div className='banner-header'>
                                    <h3>서버 제공자 광고</h3>
                                </div>
                                <a className='game-ad' href='https://papversus.com'>
                                    <img src='papversus.png' alt='서버 제공자 광고' />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className='footer'>
                    <div className='footer-container'>
                        <div className='footer-brand'>
                            <img src='/logo.png' alt='서비스 로고' className='footer-logo' />
                            <p>공정하고 투명한 게임 환경을 제공합니다.<br />건전한 게임 문화를 함께 만듭니다.</p>
                        </div>
                        <div className='footer-links'>
                            <div>
                                <h4>서비스</h4>
                                <span>게임</span>
                                <span>랭킹</span>
                                <span>이벤트</span>
                            </div>
                            <div>
                                <h4>고객지원</h4>
                                <span>공지사항</span>
                                <span>문의하기</span>
                                <span>이용약관</span>
                            </div>
                            <div>
                                <h4>정보</h4>
                                <span>개발자 소개</span>
                                <span>개인정보처리방침</span>
                                <span>게임 이용 안내</span>
                            </div>
                        </div>
                        <p className='footer-copyright'>© 2026 Your Service. All rights reserved.</p>
                    </div>
                </footer>

                {isLoginModalOpen && (
                    <div
                        className='login-modal-overlay'
                        role='presentation'
                        onMouseDown={() => setIsLoginModalOpen(false)}
                    >
                        <section
                            className='login-modal'
                            role='dialog'
                            aria-modal='true'
                            aria-labelledby='login-modal-title'
                            onMouseDown={(event) => event.stopPropagation()}
                        >
                            <button
                                className='login-modal-close'
                                type='button'
                                aria-label='로그인 모달 닫기'
                                onClick={() => setIsLoginModalOpen(false)}
                            >
                                ×
                            </button>

                            <div className='login-modal-header'>
                                <img src='/logo.png' alt='' className='login-modal-logo' />
                                <h2 id='login-modal-title'> 로그인 </h2>
                                <p>로그인하여 게임을 즐기세요!</p>
                            </div>

                            <form className='login-form' onSubmit={handleLogin}>
                                <label className='login-label' htmlFor='login-id'>이메일 또는 아이디</label>
                                <div className='login-field'>
                                    <svg aria-hidden='true' viewBox='0 0 24 24'>
                                        <circle cx='12' cy='8' r='4' />
                                        <path d='M4 20c0-4 3.6-6 8-6s8 2 8 6' />
                                    </svg>
                                    <input id='login-id' 
                                    name='id' 
                                    autoComplete='username' 
                                    required
                                    placeholder='아이디를 입력하세요' />
                                </div>

                                <label className='login-label' htmlFor='login-password'>비밀번호</label>
                                <div className='login-field'>
                                    <svg aria-hidden='true' viewBox='0 0 24 24'>
                                        <rect x='5' y='10' width='14' height='10' rx='2' />
                                        <path d='M8 10V7a4 4 0 0 1 8 0v3M12 14v3' />
                                    </svg>
                                    <input 
                                    id='login-password' 
                                    name='password' 
                                    type='password'
                                    autoComplete='current-password' 
                                    required
                                    placeholder='비밀번호를 입력하세요' />
                                </div>

                                <div className='login-options'>
                                    <label className='login-remember'>
                                        <input type='checkbox'/>
                                        <span>로그인 상태 유지</span>
                                    </label>
                                    <a type='button' className='login-password-link'>비밀번호 찾기</a>
                                </div>

                                {loginError && <p className='login-error' role='alert'>{loginError}</p>}
                                <button className='login-submit' type='submit' disabled={isLoggingIn}>{isLoggingIn ? '로그인 중...' : '로그인'}</button>
                            </form>

                            <p className='login-signup'>계정이 없으신가요? <a className='' href='naver.com'>회원가입</a></p>
                        </section>
                    </div>
                )}
        </main>
    )
}

export default Homepage
