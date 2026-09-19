import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_ORIGIN } from './api.js'
import './InGame.css'

function InGame() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`${API_ORIGIN}/auth/me`, {
            credentials: 'include',
        })
            .then(async (response) => {
                if (!response.ok) throw new Error()
                setUser(await response.json())
            })
            .catch(() => {
                navigate('/', { replace: true })
            })
    }, [navigate])

    if (!user) return <main>로그인 정보를 불러오는 중...</main>

    return (
        <main className='ingame'>
            <header className='header'>
                <div className='logo'>
                    <img src='/logo.png' alt='로고' />
                </div>
                <button ></button>
                <button onClick={async () => {
                const response = await fetch(`${API_ORIGIN}/auth/logout`, {
                    method: 'POST',
                    credentials: 'include',
                })
                if (response.ok) navigate('/', { replace: true })
            }}>로그아웃</button>
            </header>
            
        </main>
    )
}

export default InGame
