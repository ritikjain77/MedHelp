import react,{useState} from 'react';
import reactDOM from 'react-dom';
import './index.css';

function Description(props){
        const [title,setTitle] = useState("");
        const [detail,setDetail] = useState("");
 
        const titleChangeHandler = (event) => {
          setTitle(event.target.value);
        }

        const detailChangeHandler = (event) =>{
          setDetail(event.target.value);
        }

        const submitHandler = (event) => {
            event.preventDefault();
            const newData = {
              title : title,
              detail : detail,
            }
            props.addData(newData);
            setTitle('');
            setDetail('');
        }
    return (
        <>
        <div className ='Card'>
          <form onSubmit={submitHandler}>
              <legend className="heading">DisCussion Forum</legend>
              <div className='title'>
                  <div className='title-first'>
                   <label for="npt-text">Title:</label>
                  </div>
                  <div className='title-second'>
                  <input id="npt-text" type="text" value={title} onChange={titleChangeHandler} placeholder="Enter topic" />
                  </div>
              </div>
              <div className='description'>
                <label for="npt-textarea">Description:</label>

                <textarea placeholder="start here" id="npt-textarea" value={detail} onChange={detailChangeHandler} cols="100" rows="10"></textarea>
                <br/>
              </div>
              <button type="submit" className='button'>Submit</button>
          </form>
        </div>
        </>
    );

}

export default Description;