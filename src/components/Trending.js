import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { movieTrendingSelector } from '../redux/selectors/movieSelector'

export default function Trending() {
    const movies = useSelector(movieTrendingSelector)
    return (
        <Container>
            <h4>Trending</h4>
            <Content>
                {
                    movies && movies.map((movie, key) => {
                        return (
                            <Wrap key={key}>
                                {movie.id}
                                <Link to={'/detail/' + movie.id}>
                                    <img src={movie.cardImg} alt={movie.title} />
                                </Link>
                            </Wrap>
                        )
                    })
                }
            </Content>
        </Container>
    )
}

const Container = styled.div`
padding: 0 0 26px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249,249,249,.1);

    img{
        inset: 0;
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        position: absolute;
        transition: opacity .5s ease-in-out 0s;
        z-index: 1;
        inset: 0;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 /73%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,.8);
    }
`
