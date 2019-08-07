import React,{ useEffect, useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

const EditSeries = ({match}) => {
    const [name,setName] = useState('')
    const [success,setSuccess] = useState(false)

    useEffect(()=>{
        axios.get("/api/series/" + match.params.id)
        .then((res)=>{
            if(res.data.length !== 0){
                setName(res.data.name)
            }
        })
    },[match.params.id])
    

    const onChangeName = (evento) =>{
        setName(evento.target.value)
    }
    
    const save = () => {
        axios.put("/api/series/" + match.params.id ,{
            name:name
        })
        .then( (res) =>  {
            setSuccess(true)
        })
        .catch( (error) =>{
            console.log(error)
        })
    }

    if( success) {
       return <Redirect to="/series"/>
    }

    return (
        <div className="container">
            <h1> Editar Série </h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Série</label>
                    <input type="text" value={name}  onChange={onChangeName} className="form-control" id="name" placeholder="Digite o nome da Série"/>
                </div>
                <button type="button" className="btn btn-primary" onClick={save}> Editar Série</button>
            </form>
        </div>
    );
}
export default EditSeries;