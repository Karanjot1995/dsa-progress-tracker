import { useRef, useState, useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import DropdownButton from "./DropdownButton";
import Question from "./Question";
import { createQuestion, getQuestion, getTags } from "../services/services";
import { ToastContainer, toast } from 'react-toastify';

// const allTags = [
//   {id:1, title:'Array'},
//   {id:2, title:'Linked List'},
//   {id:3, title:'Graph'},
//   {id:4, title:'Tree'},
// ]

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("python");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [solved, setSolved] = useState(0);
  const [difficulty, setDifficulty] = useState('Easy');
  const [tags, setTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const queryParameters = new URLSearchParams(window.location.search)
  const edit_id = queryParameters.get("id")

  useEffect(() => {
    getTags().then(res=>{
      if(res){
        setAllTags(res)
      }
    })
    if(edit_id){
      getQuestion(edit_id).then(res=>{
        if(res){
          setTitle(res.title)
          setDescription(res.description)
          setValue(res.code)
          setLanguage(res.language)
          setTags(res.tags)
          setDifficulty(res.difficulty)
        }
      })
    }
  },[])

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const addTitle = (val) => {
    setTitle(val)
  }
  const addDescription = (val) => {
    setDescription(val)
  }
  const addTags = (val) => {
    setTags(val)
  }
  const selectDifficulty = (val) => {
    setDifficulty(val)
  }

  const saveQuestion = () => {
    let data = {code: value, version:'', solved, difficulty, language, title, description, tags}
    if(edit_id){
      data['id'] = edit_id
    }
    if(!title){
      toast.warn("Title is a mandatory field!");
    }else if(!tags.length){
      toast.warn("Select at least one Tag!");
    }else{
      createQuestion(data).then(res=>{
        if(res){
          toast.success("Saved successfully");
        }else{
          toast.error("Something went wrong!");
        }
      })
    }
  }

  
  return (
    <div>
      <div className="">
        <div className="text-end">
          <button className="btn btn-primary" onClick={saveQuestion}>Save</button>
          <ToastContainer />
        </div>
        <div className="question-editor">
          <Question 
            title={title} description={description} tags={allTags} difficulty={difficulty}
            addTitle={addTitle} addDescription={addDescription} selectedTags={tags} addTags={addTags} selectDifficulty={selectDifficulty}
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className="code-editor">
            {/* <DropdownButton language={language} onSelect={onSelect} /> */}
            <LanguageSelector language={language} onSelect={onSelect} />
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              height="50vh"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </div>
          <Output width="50%" editorRef={editorRef} language={language} />
        </div>
      </div>
    </div>
  );
};
export default CodeEditor;
