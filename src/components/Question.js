import { useState } from "react";

const tags = [
  {id:1, title:'Array'},
  {id:2, title:'Linked List'},
  {id:3, title:'Graph'},
  {id:4, title:'Tree'},
]

const Question = ({ addTitle, addDescription, addTags }) => {
  const [selTags, setSelTags] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")


  const selectTags =(id) => {
    if(selTags.indexOf(id)==-1){
      addTags([...selTags,id])
      setSelTags([...selTags,id])
    }else{
      addTags(t => t.filter(tag_id => tag_id !== id))
      setSelTags(t => t.filter(tag_id => tag_id !== id));
    }
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
    addTitle(e.target.value)
  }

  const handleDescChange = (e) => {
    setDescription(e.target.value)
    addDescription(e.target.value)
  }
  console.log('selTags: ', selTags)

  return (
    <div className="question mb-3">
      <div className="">
        <div className="title mb-2">Question:</div>
      </div>
      <div className="d-block border p-2">
        <div className="mb-1">
          <label className="me-3 d-block">Title: </label> 
          <input onChange={handleTitleChange} className="w-100 form-control" type="text"/>
        </div>
        <div className="mb-2">
          <label>Description: </label> 
          <textarea onChange={handleDescChange} rows={6} className="form-control"/>
        </div>
        <div className="d-flex align-items-center">
          <label className="me-2">Tags: </label> 
          <ul className="ps-0 m-0">
            {tags.map(tag=>
              <li className={selTags.indexOf(tag.id)>-1?"tag-tile selected":"tag-tile"} key={tag.id} onClick={()=>selectTags(tag.id)}>{tag.title}</li>
            )}
          </ul>
          
          {/* <label className="me-3 d-block">Tags: </label> 
          <select className="form-control" style={{"width":"150px"}}>
            <option>Array</option>
            <option>HashMap</option>
            <option>Binary Search</option>
            <option>Linked List</option>
            <option>Graph</option>
            <option>Tree</option>
          </select> */}
        </div>
      </div>
    </div>
  );
};
export default Question;
