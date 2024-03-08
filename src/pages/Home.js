import React, { Component, useState, useEffect } from "react";
import { useNavigate, useLocation, matchPath } from "react-router-dom";

import CodeEditor from "../components/CodeEditor";
import Sidebar from "../components/Common/SideBar";
import DropdownButton from "../components/DropdownButton";
import Accordion from '../components/Home/Accordion';
import { getAllQuestions, getAllUsers, getMyQuestions, getUserQuestions } from "../services/services";

import '../styles/editor.scss';


function Home () {
    const navigate = useNavigate();
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [solvedQuestions, setSolvedQuestions] = useState(0);
    const [isLogged, setIsLogged] = useState(localStorage.getItem('token'))
    const [items, setItems] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [otherUsers, setOtherUsers] = useState([])
    const { pathname } = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [me, setMe] = useState(true)
    const [usrData, setUsrData] = useState({})
    const pattern = 'users/:username'


    useEffect(() => {
      let count = 0
      let solved = 0
      if(matchPath({ path: pattern, exact: true }, pathname)){
        let path = pathname.split('/')
        let id = path[path.length-1]
        getUserQuestions(id).then(res=>{
          let questions = res.questions
          setItems(questions)
          questions.map(category=>{
            count+=category.questions.length
            if(category.questions){
              category.questions.map(q=>q.solved? solved+=1:'')
            }
          })
          setTotalQuestions(count)
          setSolvedQuestions(solved)
          setUsrData(res.user[0])
          setMe(false)
          getAllUsers().then(res=>{
            if(res){
              let usrs = res
              usrs = usrs.filter(u=> {return u._id!=user.id})
              setOtherUsers(usrs)
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
          setUsrData({})
          getAllUsers().then(res=>{
            if(res){
              let usrs = res
              usrs = usrs.filter(u=> {return u._id!=user.id})
              setOtherUsers(usrs)
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

    return (
      <div className="home">
        <div>
          <div className="new-problem mb-2 d-flex justify-content-between align-items-center">
            <div className="text-light">Progress: {solvedQuestions} / {totalQuestions} solved</div>
            <div className="">
              <button onClick={openEditor} className="btn btn-danger">New Problem</button>
            </div>   
          </div>
          <div>{usrData? <h2 className="text-light mb-2">{usrData.email}</h2>:''}</div>
          <div>
            <Accordion items={items} me={me}/>
          </div>
        </div>
        <div>
          <Sidebar users={otherUsers}/>
        </div>
        
      </div>
    )
}

export default Home;