import styled from 'styled-components'

const Input = styled.input`
    order           : 1px solid #FFF;
    background      : transparent;
    border          : 1px solid #FFF;
    padding         : 20px 140px;
    border-radius   : 50px;
    width           : 200px;
    color           : white;
    font-size       : 16px;
    margin-bottom   : 40px;

    &::placeholder {
        color       : white;
        font-size   : 16px;
}
`
export default Input