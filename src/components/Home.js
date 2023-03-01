import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Recommends from './Recommends'
import Trending from './Trending'
import Viewers from './Viewers'
import { collection, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from 'react-redux'
import { userNameSelector } from '../redux/selectors/userSelectors'
import { db } from '../firebase'
import { setFullCreator } from '../redux/actions/movieAction'

export default function Home() {
    const dispatch = useDispatch()
    const userName = useSelector(userNameSelector)
    const recommends = []
    const newDisneys = []
    const originals = []
    const trendings = []

    useEffect(() => {
        async function as() {
            await getDocs(collection(db, 'movies'))
                .then(snapshot => {
                    snapshot.docs.map(doc => {
                        switch (doc.data().type) {
                            case 'recommend':
                                recommends.push({ id: doc.id, ...doc.data() })
                                break
                            case 'new':
                                newDisneys.push({ id: doc.id, ...doc.data() })
                                break
                            case 'original':
                                originals.push({ id: doc.id, ...doc.data() })
                                break
                            case 'trending':
                                trendings.push({ id: doc.id, ...doc.data() })
                                break
                            default:
                                break
                        }
                    })
                })
            dispatch(setFullCreator({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trendings
            }))
        }
        as()
    }, [userName])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after{
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0;
        opacity: 1;
        z-index: -1;
    }
`
