import React,{useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

const NewGenres = () => {
    const [name,setName] = useState('')
    const [success,setSuccess] = useState(false)

    const onChangeName = (evento) =>{
        setName(evento.target.value)
    }

    const save = () => {
        axios.post("/api/genres",{
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
       return <Redirect to="/generos"/>
    }

    return (
        <div className="container">
            <h1> Novo Genêro </h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Gênero</label>
                    <input type="text" value={name}  onChange={onChangeName} className="form-control" id="name" placeholder="Digite o nome do genêro"/>
                </div>
                <button type="button" className="btn btn-primary" onClick={save}>Cadastrar Genêro</button>
            </form>
        </div>
    );
}
export default NewGenres;