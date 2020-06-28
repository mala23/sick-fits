import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled from 'styled-components';

const MyButton = styled.button`
  background: red;
  font-size: 20px;
  span {
  font-size: ${props => props.huge ? '100px' : '50px'};
  }
`;

class Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <MyButton>
          Click me <span>🎯</span>
        </MyButton>
        <MyButton huge>
          Click me <span>🎯</span>
        </MyButton>
        {this.props.children}
      </div>
    )
  }
}

export default Page;
