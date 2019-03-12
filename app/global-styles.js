/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
import { injectGlobal } from 'styled-components';
/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  .windows ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  .windows ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .windows ::-webkit-scrollbar-track {
    background-color: rgb(51, 68, 75);
  }

  .windows #notesDrawer ::-webkit-scrollbar-track {
    background-color: #1f3138;
  }

  .windows #inventoryDetail ::-webkit-scrollbar-track {
    background-color: rgb(42, 59,65);
  }

  body.fontLoaded {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  
  *:focus {
   outline: 0;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  
  a:hover {
    text-decoration: none!important;
  }

  .pagination {
    display: inline-block;
    margin: 0;
    padding-left: 0px;
    
  }
  
  .pagination li {
    display: inline-block;
    color: black;
    float: left;
    padding: 5px 7px;
    text-decoration: none;
    list-style-type: none;
    border-radius: 5px;
    background: #33444c;
    margin: 0px 3px;
    height: 32px;
    min-width: 32px;
  }

  .pagination li a {
    display: inline-block;
    position: relative;
    z-index: 1;
    margin: -8px;
    color: #D7E4EA
  }
  
  .pagination li a svg {
    margin-top: -3px;
  }
  
  @media only screen and (max-width: 920px) {
    .pagination li {
      display: none;
    }
    .pagination li.active,
    li:first-child,
    li:last-child {
      display: inline-block;
    }
  }
  
  @media only screen and (min-width: 920px) (min-width: 1280px) {
    .pagination li {
      display: none;
      
    }
    .pagination 
    li.break,
    li.active,
    li:nth-child(-n+2),
    li:nth-last-child(-n+2),
    li:last-child,
    li:first-child {
      display: inline-block;
    }
  }

  .pagination li.active {
    background-color: #38a4dc;
    color: white;
  }

  .pagination li a:focus {
    /* Safari */
    outline: none;
  }

  .pagination li:hover:not(.active) {
    background: rgba(145, 174, 215, 0.2);
    cursor: pointer;
    box-shadow: 0px 3px 0px -1px rgba(31,49,56,1);
  }

  .pagination li:active:not(.active) {
    background: rgba(145, 174, 215, 0.2);
    cursor: pointer;
    box-shadow: 0px 1px 0px -1px rgba(31,49,56,1);
  }

  .infobox {
    padding: 4px 8px 2px;
    background: rgba(215,227,234, 0.80)!important;
    border-radius: 4px;
    margin-top: -8px;
    color: black;
  }
  
  iframe {
    border: 0px;
  }  
`;
