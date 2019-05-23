/**
 * A component which defines Row and Col for layout
 */

 import styled from 'styled-components'
 import Theme from '../components/Theme'

export const Row = styled.div`
display: flex;
flex-direction: row;
flex: 1;
@media (max-width: ${Theme.mobile.size}px) {
    flex-direction: column;
}
`

export const Col = styled.div`
display: flex;
flex-direction: column;
margin: 0 40px 20px 0;
flex: 1;
@media (max-width: ${Theme.mobile.size}px) {
    margin: ${Theme.mobile.colMargin}
}

&:last-child {
    margin-right: 0px
}
`