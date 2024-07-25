import { games } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import { Titulo } from '../Titulo'
import imagemLivro from '../../imagens/livro2.png'
import CardRecomenda from '../CardRecomenda'

const UltimosLancamentosContainer = styled.section`
    background-color    : #EBECEE;
    padding-bottom      : 20px;
    display             : flex;
    flex-direction      : column;
`

const NovosGamesContainer = styled.div`
    margin-top      : 30px;
    display         : flex;
    width           : 100%;
    justify-content : center;
    cursor          : pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor='#EB9B00' 
                tamanhoFonte="36px"
                alinhamento="center"
                >ÚLTIMOS LANÇAMENTOS
                </Titulo>
            <NovosGamesContainer>
                {games.map((game) => (
                    <img src={game.src} alt={game.nome}/>
            ))}
        </NovosGamesContainer>
        <CardRecomenda
            titulo="talvez você se interesse por"
            subtitulo="Angular 11"
            descricao="Aprenda a criar aplicações web com o framework Angular 11"
            img={imagemLivro}
        />
    </UltimosLancamentosContainer>
    )
}
export default UltimosLancamentos;