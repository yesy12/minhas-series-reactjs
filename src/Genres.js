import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Genres = () =>{
    const [data,setData] = useState([])
    
    useEffect(()=>{
        axios.get("/api/genres")
        .then( (res) => {
            setData(res.data.data)
        })
        .catch( (error) => {
            setData(error)
        })
    },[])
    
    const deleteGenres = (id) =>{
        axios.delete("/api/genres/" +id)
        .then( (res) => {
            const filter = data.filter(item => item.id !== id)
            setData(filter)
        })
    }
    
    const renderRow = (record) => {
        return (
            <tr key={record.id}>
                <th scope="row"> {record.id}</th>
                <td>{record.name}</td>
                <td><button onClick={() => deleteGenres(record.id)}>-</button></td>
            </tr>
        )
    }
    
    if(data.length === 0){
        return (
            <div className='container'>
                <h1> Genêros </h1>
                <div>
                    <Link to="/generos/novo">Novo Genêro</Link>
                </div>
                <div className="alert alert-warning" role="alert">
                    Você não possui genêros criados
                </div>
            </div>
        )
    }
    
    return (
        <div className="container">
            <h1> Genêros </h1>
            <div>
                <Link to="/generos/novo">Novo Genêro</Link>
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

export default Genres;