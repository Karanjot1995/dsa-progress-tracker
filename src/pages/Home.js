import React, { Component, useState, useEffect } from "react";
import CodeEditor from "../components/CodeEditor";
import DropdownButton from "../components/DropdownButton";
import Accordion from '../components/Home/Accordion';

import '../styles/editor.scss';

const items = [
  {
    title: 'Arrays',
    questions:[
      {solved: true ,title: 'Two Sum', difficulty:'Easy'},
      {solved: true ,title: 'Group Anagrams', difficulty:'Medium'},
      {solved: false ,title: 'Valid Sudoku', difficulty:'Medium'},
    ],
  },
  {
    title: 'Two Pointers',
    questions:[
      {solved: true ,title: 'Two Sum', difficulty:'Easy'},
      {solved: false ,title: 'Valid Sudoku', difficulty:'Medium'},
    ],
  },
  {
    title: 'Stack',
    questions:[
      {solved: false ,title: 'Valid Sudoku', difficulty:'Medium'},
    ],
  },
];

function Home () {
    return (
      <div className="home">
        <div>
          <Accordion items={items} />
        </div>
      </div>
    )
}

export default Home;