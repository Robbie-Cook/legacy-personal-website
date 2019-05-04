import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
/* Theme */
import Theme from '../components/Theme'
let theme = Theme.getTheme() 

/* 
Component representing a project

Example usage:
<ProjectBox title="My title">
    <Icon />
    <p>My description</p>
    <ProjectLink to="mypage.html" text="Check out my page">
        <Icon />
    </ProjectLink>
</ProjectBox>

*/
class ProjectBox extends Component {
  render() {
    const ProjectBox = styled.div`
      border: 2px solid #dcd6ce;
      border-radius: 5px;
      padding: 20px;
      background-color: #3c3c3c;
      max-width: 600px;
    `
    const ProjectTitle = styled.h3`
      margin-top: 0;
    `
    const ProjectDescription = styled.p`
      max-width: 360px;
      margin-right: 20px!important;
    `

    const ProjectImage = styled.img``

    const Wrapper = styled.div`
      display: flex;
    `

    return (
      <ProjectBox>
        <ProjectTitle>{this.props.title}</ProjectTitle>
        <Wrapper>
          <ProjectDescription>{this.props.desc}</ProjectDescription>
          <ProjectImage src={this.props.image} />
        </Wrapper>
        {this.props.children}
      </ProjectBox>
    )
  }
}

const ProjectLinkWrapper = styled.div`
    border: 2px solid {};
`

class ProjectLink extends Component {
  render() {
    return (
      <ProjectLinkWrapper>
        {this.props.children} {/* Should be an icon or something similar*/}
        <Link to={this.props.to}>{this.props.text}</Link>
      </ProjectLinkWrapper>
    )
  }
}

export { ProjectBox, ProjectLink }
