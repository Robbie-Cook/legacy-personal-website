import React, { Component } from "react"
import PropTypes from "prop-types"
import { Button as GrommetButton, Grommet } from "grommet"
import Globals from "../components/Globals"
import styled from "styled-components"
import Dimensions from "../components/Dimensions"

/**
 * A class for generic buttons.
 * Takes a title and a function.
 */
class Button extends Component {
  render() {
    const customTheme = {
      button: {
        border: {
          color: Globals.link.color,
        },
      },
    }

    const MyButton = styled(GrommetButton)`
      border: 3px solid ${Globals.link.color};
      border-radius: 6px;
      color: ${Globals.text.color};
      transition: 0.03s;

      /* for svg icons */
      fill: ${Globals.text.color};
      stroke: ${Globals.text.color};

      & p {
        color: inherit;
        margin: 0 10px;
        text-decoration: none;
        border-bottom: 1px solid ${Globals.text.color};
      }

      &:hover {
        & p {
          border-bottom: 1px solid transparent;
        }
        background-color: ${Globals.link.color};
      }

      background-color: transparent;
      margin: ${this.props.margin ? this.props.margin : new Dimensions(10, 20)};
      color: ${Globals.textColor};
      line-height: 28px;
      font-size: 14px;
      padding: 0 15px;
      font-weight: normal;
      ${this.props.style};
    `

    return (
      <Grommet theme={customTheme}>
        <MyButton label={this.props.children} onClick={this.props.function} />
      </Grommet>
    )
  }
}
Button.propTypes = {
  style: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  function: PropTypes.func.isRequired,
}

/**
 * A group of Buttons, given an array of button titles, and an array of
 * corresponding functions.
 */
class ButtonGroup extends Component {
  render() {
    const ButtonContainer = styled.div`
      ${(() => {
        /*
          Set the flex direction of the container to "row" if 
          this.props.buttonRow is true.
        */
        return (
          "flex-direction: " + (this.props.buttonRow ? "row" : "column") + ";"
        )
      })()}
      display: flex;
    `
    return (
      /* 
      Returns buttons, each with a function passed to the button
      as a prop.
      */
      <ButtonContainer>
        {this.props.titles.map((item, index) => {
          return (
            <Button
              function={this.props.functions[index]}
              margin={this.props.buttonMargin}
              style={this.props.buttonStyle}
            >
              {item}
            </Button>
          )
        })}
      </ButtonContainer>
    )
  }
}
ButtonGroup.propTypes = {
  titles: PropTypes.array.isRequired,
  functions: PropTypes.array.isRequired, // Should be an array of functions
  buttonRow: PropTypes.bool, // Whether to display the buttons as a row
  buttonStyle: PropTypes.string, // Styles passed to the button
}

export { Button, ButtonGroup }
