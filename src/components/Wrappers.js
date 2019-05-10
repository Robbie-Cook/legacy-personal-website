// My own UI Wrappers for page components

import styled from 'styled-components'
import Theme from './Theme'

const theme = Theme

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%`

export const Row = styled.div`
display: flex;
flex-direction: row;
flex: 1;
@media (max-width: ${theme.mobile.cutOff}px) {
    flex-direction: column;
}
`

export const Col = styled.div`
display: flex;
flex-direction: column;
margin: 0 40px 20px 0;
flex: 1;
@media (max-width: ${theme.mobile.cutOff}px) {
    margin: ${theme.mobile.colMargin}
}

&:last-child {
    margin-right: 0px
}
`
