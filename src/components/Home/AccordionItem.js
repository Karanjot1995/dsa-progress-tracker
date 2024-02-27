import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../Common/ProgressBar';
import { useNavigate } from "react-router-dom";
import { deleteFile, updateSolved } from '../../services/services';
import { FaRegTrashAlt } from "react-icons/fa";
import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer, toast } from 'react-toastify';

const AccordionItem = ({ title, questions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [solved, setSolved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let cnt = 0
    questions.map(q=>q.solved? cnt+=1:'')
    setSolved(cnt)
  },[])

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const checkSolved = (e,id) => {
    let is_solved = e.target.checked
    let data = {id,is_solved}
    updateSolved(data)
    if(is_solved){
      setSolved(solved+1)
    }else{
      setSolved(solved-1)
    }
  };

  const deleteQuestion = (q) => {
    confirmAlert({
      title: 'Confirm to submit',
      message: `Are you sure you want to delete the file ${q.title}?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            deleteFile({id:q._id}).then(res=>{
              if(!res.error){
                toast.success("Deleted successfully");
              }else{
                toast.error("Something went wrong!");
              }
              setTimeout(() => {
                window.location.reload(false);
              }, "1500");              
            })
          }
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  }

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <ToastContainer />
      <div className="accordion-title" onClick={toggleAccordion}>
        <div className='d-md-flex justify-content-between'>
          {title}
          <div className="d-flex align-items-center pg-container">
            <p className='mb-0 pg-text'>({solved}/{questions.length})</p>
            <ProgressBar solved={solved} total={questions.length} />
          </div>
        </div>
      </div>

      {isOpen && 
        <div className="accordion-content">
          <table>
            <tr>
              <th style={{'width':'20px'}}>Solved</th>
              <th>Problem</th>
              <th style={{'width':'120px'}}>Difficulty</th>
              <th style={{'width':'50px'}}></th>
            </tr>
            {questions.map(q=>
              <tr>
                <td className='text-center'><input defaultChecked={q.solved} onChange={(e)=>checkSolved(e,q._id)} type="checkbox" /></td>
                <td><a onClick={ ()=>navigate(`/editor?id=${q._id}`)}>{q.title}</a></td>
                {/* <td>{q.title}</td> */}
                <td className={`difficulty-${q.difficulty}`}>{q.difficulty}</td>
                <td className="text-center delete-btn"><a onClick={()=>deleteQuestion(q)}><FaRegTrashAlt className='fs-20' height={30} fill="#ff0000"/></a></td>
              </tr>
            )}
          </table>
        </div>
      }
    </div>
  );
};

export default AccordionItem;
