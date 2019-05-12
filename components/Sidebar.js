import Link from 'next/link'
import styled from 'styled-components'
import React from "react";

const Bar = styled.ul ` 
    position: fixed;
    bottom: 160px;
    left: -90px;
    transform: rotate(-90deg);
    z-index: 100;
    
   @media (max-width: 1020px) {
      display: none;
   }
  
  li {
    display: inline-block;
    font-weight: bold;
  }
  
  li.title {
    margin-right: 40px;
    padding: 5px 10px;
    position: relative;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    background: #000000;
    color: #fff;
  }
  
  li.title:before {
    content: "-";
    color: #000;
    margin-right: 10px;
    position: absolute;
    right: -30px;
  }
  
  li.item {
    font-size: 14px;
    margin-right: 20px;
  }
`;

export default class Sidebar extends React.Component {
  render() {
    return (
      <Bar>
        <li className="title">Follow</li>
        <li className="item"><a href="https://twitter.com/mimizunosuguru" target="_blank">Twitter</a></li>
        <li className="item"><a href="https://www.wantedly.com/users/17780119" target="_blank" >Wantedlly</a></li>
      </Bar>
    )
  }
}
