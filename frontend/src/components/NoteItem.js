import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <h4>
                        <i className='bx bx-trash' onClick={()=>{deleteNote(note._id)}}></i>
                        <i className='bx bx-edit mx-2' onClick={()=>{updateNote(note)}}></i>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default NoteItem