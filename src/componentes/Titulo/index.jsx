import styled from 'styled-components';

export const Titulo = styled.h2`
    width               : 100%;
    padding             : 10px 0;
    background-color    : #FFF;
    color               : ${props => props.cor || 'black'};
    font-size           : ${props => props.tamanhoFonte || '18px'};
    text-align          : ${props => props.alinhamento || 'left'};
    margin              : 0;
`