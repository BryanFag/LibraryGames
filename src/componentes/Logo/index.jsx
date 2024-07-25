import logo from '../../imagens/logo.svg'
import * as S from './style'

function Logo() {
    return (
        <S.Logos>
            <S.LogoImg src={logo}
            alt='logo alura'>
            </S.LogoImg>
            <p><S.Nome>B.R.Y.A.N</S.Nome></p>
        </S.Logos> 
    )
}

export default Logo