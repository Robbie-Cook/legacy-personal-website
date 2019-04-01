// My own UI Wrappers for page components

import styled from 'styled-components'
import Theme from '../Theme'

const theme = Theme.getTheme()

export const Container = styled.div`
display: flex;
flex-direction: column`

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
margin: 0px 20px;
flex: 1;
`
