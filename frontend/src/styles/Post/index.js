import React,{useState} from 'react';
import './index.css';

const Posts = (props) => {
    const [comment,setComment] = useState([]);
    const [discuss,setDiscuss] = useState([]);

    const discussChangeHandler = (event) => {
        setDiscuss(event.target.value);
    }

    const submitHandler2 = (event) =>{
        event.preventDefault();
        const newData = {
          discuss : discuss,
        }
        setComment([...comment,newData]);
        
        setDiscuss('');
    } 
    return (
        <>
        <div className="Card">
        <div className='title1'>
          <div className='title1-first'><h1>Title: </h1></div>
          <div className='title1-second'><p>{props.item.title}</p></div>
        </div>
        <div className='des'>
          <div className='des-first'><h1>Description: </h1></div>
          <div className='des-second'><p>{props.item.detail}</p></div>
        </div>
        <div className="Card1">
        <form onSubmit = {submitHandler2}>
        <textarea placeholder="start here" id="npt-textarea" value={discuss} onChange={discussChangeHandler} cols="50" rows="3"></textarea>
        <br/>
        <button type="submit" className="btnn">Comment</button>
        
        </form>
        </div>
        </div>

      
        {comment.map((data)=>{
            return (
              <>
               <div className="Card">
              <p className='discuss'>{data.discuss}</p>
              </div>
              </>
            )
          })}
    
        </>
    )
}

export default Posts;