import React, { Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CodeEditor from "../components/CodeEditor";
import DropdownButton from "../components/DropdownButton";
import Accordion from '../components/Home/Accordion';
import { getAllQuestions } from "../services/services";

import '../styles/editor.scss';

// const items = [
//   {
//     title: 'Array',
//     questions:[
//       {solved: true ,title: 'Two Sum', difficulty:'Easy'},
//       {solved: true ,title: 'Group Anagrams', difficulty:'Medium'},
//       {solved: false ,title: 'Valid Sudoku', difficulty:'Medium'},
//     ],
//   },
//   {
//     title: 'Two Pointer',
//     questions:[
//       {solved: true ,title: 'Two Sum', difficulty:'Easy'},
//       {solved: false ,title: 'Valid Sudoku', difficulty:'Medium'},
//     ],
//   },
//   {
//     title: 'Stack',
//     questions:[
//       {solved: false ,title: 'Valid Sudoku', difficulty:'Medium'},
//     ],
//   },
// ];

function Home () {
    const navigate = useNavigate();
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [solvedQuestions, setSolvedQuestions] = useState(0);
    const [items, setItems] = useState([])

    useEffect(() => {
      let count = 0
      let solved = 0
      getAllQuestions().then(res=>{
        setItems(res)
        res.map(category=>{
          count+=category.questions.length
          if(category.questions){
            category.questions.map(q=>q.solved? solved+=1:'')
          }
        })
        setTotalQuestions(count)
        setSolvedQuestions(solved)
      })

    },[])

    function openEditor() {
      navigate("/editor");
    }

    return (
      <div className="home">
        <div className="new-problem mb-2 d-flex justify-content-between align-items-center">
          <div className="text-light">Progress: {solvedQuestions} / {totalQuestions} solved</div>
          <div className="">
            <button onClick={openEditor} className="btn btn-danger">New Problem</button>
          </div>   
        </div>
        <div>
          <Accordion items={items} />
        </div>
      </div>
    )
}

export default Home;