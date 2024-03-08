import React, { Component, useState, useEffect } from "react";
import CodeEditor from "../components/CodeEditor";
import DropdownButton from "../components/DropdownButton";
import Navbar from '../components/Navbar';
import Axios from 'axios';
import spinner from '../spinner.svg';

function Editor ({usrData}) {

  return (
    <div>
      <CodeEditor usrData={usrData}/>
    </div>
  )

}
export default Editor;