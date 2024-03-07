import React, { Component, useState, useEffect } from "react";
import { useNavigate, useLocation, matchPath } from "react-router-dom";

import CodeEditor from "../components/CodeEditor";
import Sidebar from "../components/Common/SideBar";
import DropdownButton from "../components/DropdownButton";
import Accordion from '../components/Home/Accordion';
import { getAllQuestions, getAllUsers, getMyQuestions, getUserQuestions } from "../services/services";

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
    const [isLogged, setIsLogged] = useState(localStorage.getItem('token'))
    const [items, setItems] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [otherUsers, setOtherUsers] = useState([])
    const { pathname } = useLocation();
    const pattern = 'users/:username'

    


    // const queryParameters = new URLSearchParams(window.location.search)
    // const edit_id = queryParameters.get("id")

    useEffect(() => {
      let count = 0
      let solved = 0
      if(matchPath({ path: pattern, exact: true }, pathname)){
        let path = pathname.split('/')
        let id = path[path.length-1]
        getUserQuestions(id).then(res=>{
          setItems(res)
          res.map(category=>{
            count+=category.questions.length
            if(category.questions){
              category.questions.map(q=>q.solved? solved+=1:'')
            }
          })
          setTotalQuestions(count)
          setSolvedQuestions(solved)

          getAllUsers().then(res=>{
            if(res){
              setOtherUsers(res)
            }
          })
        })
      }else{

        getMyQuestions().then(res=>{
          setItems(res)
          res.map(category=>{
            count+=category.questions.length
            if(category.questions){
              category.questions.map(q=>q.solved? solved+=1:'')
            }
          })
          setTotalQuestions(count)
          setSolvedQuestions(solved)

          getAllUsers().then(res=>{
            if(res){
              setOtherUsers(res)
            }
          })
        })
        
      }


    },[])

    function openEditor() {
      navigate("/editor");
    }
    // const toggleSidebar = () => {
    //   setIsOpen(!isOpen);
    // };
    console.log(otherUsers)
    return (
      <div className="home">
        <div>
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
        <div>
          <Sidebar users={otherUsers}/>
        </div>
        
      </div>
    )
}

export default Home;