import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { games } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image:   linear-gradient(90deg, #002F52 35%, #326589 165%);
    color           : #FFF;
    text-align      : center;
    padding         : 85px 0;
    height          : 470px;
    width           : 100%;
`

const Titulo = styled.h2`
    color       : white;
    font-size   : 36px;
    text-align  : center;
    width       : 100%;
`

const Subtitulo = styled.h3`
    font-size       : 16px;
    font-weight     : 500;
    margin-bottom   : 40px;
`

const Resultado = styled.div`
    display         : flex;
    justify-content : center;
    align-items     : center;
    margin-bottom   : 40px;
    cursor          : pointer;
    p {
        font-size   : 30px;
        width       : 200px;
        margin-right: 20px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [gamesPesquisados, setGamesPesquisados] = useState([])
    const [isInputFocused, setIsInputFocused] = useState(false)

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu game na biblioteca?</Subtitulo>
            <Input 
                placeholder="Digite o nome do jogo"
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                onChange={evento => {
                    const textoDigitado = evento.target.value
                    if (textoDigitado.trim() !== '') {
                        const resultadoPesquisa = games.filter(game => game.nome.includes(textoDigitado))
                        if (isInputFocused) {
                            setGamesPesquisados(resultadoPesquisa)
                        }
                    } else {
                        setGamesPesquisados([])
                    }
                }}
            />
            { gamesPesquisados.map( game => (
                <Resultado key={game.nome}>
                    <img src={game.src} alt='game' /> 
                    <p>{game.nome}</p>
                </Resultado>
            ) ) }
        </PesquisaContainer>
    )
}

export default Pesquisa;
