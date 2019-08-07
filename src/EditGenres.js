import React,{ useEffect, useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

const EditGenres = ({match}) => {
    const [name,setName] = useState('')
    const [success,setSuccess] = useState(false)

    useEffect(()=>{
        axios.get("/api/genres/" + match.params.id)
        .then((res)=>{
            if(res.data.length !== 0){
                setName(res.data.name)
            }
            else{
                return <Redirect to="/generos"/>
            }
        })
    },[match.params.id])
    

    const onChangeName = (evento) =>{
        setName(evento.target.value)
    }
    
    const save = () => {
        axios.put("/api/genres/" + match.params.id ,{
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
            <h1> Editar Genêro </h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Gênero</label>
                    <input type="text" value={name}  onChange={onChangeName} className="form-control" id="name" placeholder="Digite o nome do genêro"/>
                </div>
                <button type="button" className="btn btn-primary" onClick={save}> Editar</button>
            </form>
        </div>
    );
}
export default EditGenres;