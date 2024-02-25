import { useState } from "react";


const Question = ({ addTitle, addDescription, selectedTags, addTags, title , description, tags }) => {
  // const [title, setTitle] = useState(title)
  // const [description, setDescription] = useState(description)
  // const [selTags, setSelTags] = useState(selectedTags)

  const selectTags =(_id) => {
    if(selectedTags.indexOf(_id)==-1){
      addTags([...selectedTags,_id])
      // setSelTags([...selTags,id])
    }else{
      addTags(t => t.filter(tag_id => tag_id !== _id))
      // setSelTags(t => t.filter(tag_id => tag_id !== id));
    }
  }

  const handleTitleChange = (e) => {
    // setTitle(e.target.value)
    addTitle(e.target.value)
  }

  const handleDescChange = (e) => {
    // setDescription(e.target.value)
    addDescription(e.target.value)
  }

  return (
    <div className="question mb-3">
      <div className="">
        <div className="title mb-2">Question:</div>
      </div>
      <div className="d-block border p-2">
        <div className="mb-1">
          <label className="me-3 d-block">Title: </label> 
          <input value={title} onChange={handleTitleChange} className="w-100 form-control" type="text"/>
        </div>
        <div className="mb-2">
          <label>Description: </label> 
          <textarea value={description} onChange={handleDescChange} rows={6} className="form-control"/>
        </div>
        <div className="d-flex align-items-center">
          <label className="me-2">Tags: </label> 
          <ul className="ps-0 m-0">
            {tags.map(tag=>
              <li className={selectedTags && selectedTags.indexOf(tag._id)>-1?"tag-tile selected":"tag-tile"} key={tag._id} onClick={()=>selectTags(tag._id)}>{tag.title}</li>
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
