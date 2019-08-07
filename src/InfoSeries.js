import React,{ useEffect, useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

const InfoSeries = ({match}) => {
    const [name,setName] = useState('')
    const [success,setSuccess] = useState(false)

    const [data,setData] = useState({})
    
    useEffect(()=>{
        axios.get("/api/series/" + match.params.id)
        .then((res)=>{
            if(res.data.length !== 0){
                setData(res.data)
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
            <h1> Info Série </h1>
            <pre> {JSON.stringify(data)} </pre>
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
export default InfoSeries;