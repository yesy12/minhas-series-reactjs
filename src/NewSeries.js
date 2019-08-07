import React,{useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

const NewSeries = () => {
    const [name,setName] = useState('')
    const [success,setSuccess] = useState(false)

    const onChangeName = (evento) =>{
        setName(evento.target.value)
    }

    const save = () => {
        axios.post("/api/series",{
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
       return <Redirect to="/series/"/>
    }

    return (
        <div className="container">
            <h1> Nova Series </h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Série</label>
                    <input type="text" value={name}  onChange={onChangeName} className="form-control" id="name" placeholder="Digite o nome da série"/>
                </div>
                <button type="button" className="btn btn-primary" onClick={save}>Cadastrar Série</button>
            </form>
        </div>
    );
}
export default NewSeries;