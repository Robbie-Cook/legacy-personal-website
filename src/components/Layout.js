/**
 * A component which defines Row and Col for layout
 */

 import styled from 'styled-components'
 import Globals from '../components/Globals'

const Row = styled.div`
display: flex;
flex-direction: row;
flex: 1;
@media (max-width: ${Globals.mobile.size}px) {
    flex-direction: column;
}
`

const Col = styled.div`
display: flex;
flex-direction: column;
margin: 0 40px 20px 0;
flex: 1;
@media (max-width: ${Globals.mobile.size}px) {
    margin: ${Globals.mobile.colMargin}
}

&:last-child {
    margin-right: 0px
}
`

export {Col, Row}