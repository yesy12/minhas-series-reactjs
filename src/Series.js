import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Series = () =>{
    const [data,setData] = useState([])
    
    useEffect(()=>{
        axios.get("/api/series")
        .then( (res) => {
            setData(res.data.data)
        })
        .catch( (error) => {
            setData(error)
        })
    },[])
    
    const deleteSeries = (id) =>{
        axios.delete("/api/series/" +id)
        .then( (res) => {
            const filter = data.filter(item => item.id !== id)
            setData(filter)
        })
    }
    
    const renderRow = (record) => {
        return (
            <tr key={record.id}>
                <th scope="row"> {record.id}</th>
                <td>
                    <Link to={"/series/info/" + record.id} className="info">
                        {record.name}
                    </Link>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={() => deleteSeries(record.id)}> 
                        Remover 
                    </button>
                    <Link to={"/series/editar/" + record.id} className="btn btn-warning"> Editar </Link>
                    
                </td>
            </tr>
        )
    }
    
    if(data.length === 0){
        return (
            <div className='container'>
                <h1> Series </h1>
                <div>
                    <Link to="/series/novo" className="btn btn-primary">Nova Série</Link>
                </div>
                <div className="alert alert-warning" role="alert">
                    Você não possui séries criados
                </div>
            </div>
        )
    }
    
    return (
        <div className="container">
            <h1> Séries </h1>
            <div>
                <Link to="/series/novo" className="btn btn-primary">Nova Série</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th> 
                        <th scope="col">Nome</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderRow)}
                </tbody>
            </table>
        </div>    
    );
}

export default Series;