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
    /* Styling */
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

      &:hover {
        & p {
          border-bottom: 1px solid transparent;
        }
        background-color: ${Globals.link.color};
      }

      background-color: transparent;
      margin: ${this.props.margin ? this.props.margin : new Dimensions(10, 20)};
      color: ${Globals.textColor};
      line-height: 27px;
      font-size: 16px;
      padding: 5px 12px;
      font-weight: normal;
      ${this.props.style};
    `

    const BorderedText = styled.p`
      color: ${Globals.textColor};
      margin: 0;
      text-decoration: none;
      border-bottom: 1px solid ${Globals.text.color};
      line-height: 20px;
    `

    const innerDom = (
      <MyButton
        icon={this.props.icon}
        label={<BorderedText>{this.props.label}</BorderedText>}
        onClick={this.props.function}
        href={this.props.to}
      />
    )

    return (
      <Grommet theme={customTheme}>
        {/* Make the button a link if this.props.to is specified */}
        {innerDom}
      </Grommet>
    )
  }
}
Button.propTypes = {
  style: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  function: PropTypes.func,
  icon: PropTypes.elementType,
  to: PropTypes.string, // Signifies the button is a link, this is the link address
  label: PropTypes.string, // Label for the button
}

/**
 * A group of Buttons, given an array of button titles, and an array of
 * corresponding functions.
 */
class ButtonGenerator extends Component {
  render() {
    return (
      /* 
      Returns buttons, each with a function passed to the button
      as a prop.
      */
      <ButtonWrapper buttonRow={this.props.buttonRow}>
        {/* Buttons defined as props */}
        {this.props.titles.map((item, index) => {
          return (
            <Button
              function={this.props.functions[index]}
              margin={this.props.buttonMargin}
              style={this.props.buttonStyle}
              label={item}
            />
          )
        })}
        {/* Buttons defined as children */}
      </ButtonWrapper>
    )
  }
}
ButtonGenerator.propTypes = {
  titles: PropTypes.array.isRequired,
  functions: PropTypes.array, // Should be an array of functions
  buttonRow: PropTypes.bool, // Whether to display the buttons as a row
  buttonStyle: PropTypes.string, // Styles passed to the button
}

/* 
A wrapper for buttons.
Used when buttons don't have to be dynamically generated -- can be 
passed as children
*/
class ButtonWrapper extends Component {
  render() {
    const ButtonContainer = styled.div`
      ${(() => {
        /*
        Set the flex direction of the container to "row" if 
        this.props.buttonRow is true.
      */
        return (
          /*
           * Sets flex direction to row by default, and column if buttonRow
           * is true
           */
          "flex-direction: " +
          (this.props.buttonRow !== false ? "row" : "column") +
          ";"
        )
      })()}
      display: flex;
      ${this.props.style};
    `
    return <ButtonContainer>{this.props.children}</ButtonContainer>
  }
}
ButtonWrapper.propTypes = {
  buttonRow: PropTypes.bool, // Whether or not the buttons should be displayed
  // as a row or column. Defaults to true.
}

export { Button, ButtonGenerator, ButtonWrapper }
