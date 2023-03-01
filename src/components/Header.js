import { useEffect } from 'react'
import styled from 'styled-components'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { userNameSelector, userPhotoSelector } from '../redux/selectors/userSelectors'
import { userInfoCreator } from '../redux/actions/userAction'
import { Link, useNavigate } from 'react-router-dom'
export default function Header() {
    const dispatch = useDispatch()
    const userPhoto = useSelector(userPhotoSelector)
    const userName = useSelector(userNameSelector)
    let navigate = useNavigate()

    const handleAuth = () => {
        if (!userName) {
            signInWithPopup(auth, provider).then(data => {
                dispatch(userInfoCreator({
                    name: data.user.displayName,
                    email: data.user.email,
                    photo: data.user.photoURL
                }))
            }).catch(err => {
                console.log(err)
            })
        }
        else {
            signOut(auth).then(data => {
                dispatch(userInfoCreator({
                    name: null,
                    photo: null,
                    email: null
                }))
                navigate('/')
            }).catch(err => {
                console.log(err)
            })
        }

    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                dispatch(userInfoCreator({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                navigate('/home')
            }
        })
    }, [userPhoto])

    return (
        <Nav>
            <Logo to='/home'>
                <img src="/images/logo.svg" alt="" />
            </Logo>
            {userPhoto && (
                <>
                    <NavMenu>
                        <Link to="/home">
                            <img src="/images/home-icon.svg" alt="HOME" />
                            <span>HOME</span>
                        </Link>
                        <Link to="/home">
                            <img src="/images/search-icon.svg" alt="HOME" />
                            <span>SEARCH</span>
                        </Link>
                        <Link to="/home">
                            <img src="/images/watchlist-icon.svg" alt="HOME" />
                            <span>WATCHLIST</span>
                        </Link>
                        <Link to="/home">
                            <img src="/images/original-icon.svg" alt="HOME" />
                            <span>ORIGINALS</span>
                        </Link>
                        <Link to="/home">
                            <img src="/images/movie-icon.svg" alt="HOME" />
                            <span>MOVIES</span>
                        </Link>
                        <Link to="/home">
                            <img src="/images/series-icon.svg" alt="HOME" />
                            <span>SERIES</span>
                        </Link>
                    </NavMenu>
                    <SignOut>
                        <UserImg src={userPhoto} alt={userName} />
                        <DropDown>
                            <span onClick={handleAuth}>Sign Out</span>
                        </DropDown>
                    </SignOut>
                </>
            )}

            {!userPhoto && <Login onClick={() => handleAuth()}>Login</Login>}
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`

const Logo = styled(Link)`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img{
        display: block;
        width: 100%;
    }
`

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a{
        display: flex;
        align-items: center;
        padding: 6px 12px;
    }

    img{
        height: 20px;
        min-width:20px;
        width: 20px;
    }

    span{
        color: rgb(249,249,249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        position: relative;
        font-weight: 500;

        &::before {
            content: '';
            background-color: rgb(249,249,249);
            border-radius:0px 0px 4px 4px;
            bottom: -6px;
            position: absolute;
            height: 2px;
            right: 0px;
            transform-origin: left center;
            width: 100%;
            transform: scaleX(0);
            transition: all .25s cubic-bezier(0.25, 0.46,0.45,0.94) 0s;
            visibility: hidden;
        }

        &:hover{
           &::before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }



    @media (max-width: 768px) {
        display: none;
    }
`

const Login = styled.a`
    background-color: rgba(0,0,0,.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border-radius: 4px;
    border: 1px solid #f9f9f9;
    transition: all .2s ease 0;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

const UserImg = styled.img`
    height: 100%;
`

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0;
    background: rgb(19,19,19);
    border: 1px solid rgba(151,151,151,.2);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 2px;
    width: 100px;
    opacity: 0;
    visibility: hidden;
`

const SignOut = styled.div`
    height: 48px;
    width: 48px;
    position: relative;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg} {
        border-radius: 50%;
    }

    &:hover{
        ${DropDown} {
            opacity: 1;
            visibility: visible;
            transition-duration: 1s;
        }
    }
`