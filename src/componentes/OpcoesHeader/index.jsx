import styles from 'styled-components'

const Opcoes = styles.ul `
  display         : flex;
`
const Opcao = styles.li `
  font-size       : 16px;
  display         : flex;
  justify-content : center;
  align-items     : center;
  text-align      : center;
  height          : 100%;
  padding         : 0 5px;
  cursor          : pointer;
  min-width       : 120px;
`

function OpcoesHeader () {
  const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS',]
  return (
    <Opcoes>
      { textoOpcoes.map( (texto) => {
        return <Opcao><p>{texto}</p></Opcao>
      } ) }
    </Opcoes>
  )
}

export default OpcoesHeader