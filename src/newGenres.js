import React,{useState} from 'react';

const newGenres = () =>{
    return(
        <div className="container">
            <h1> Novo Genêro </h1>
            <form>
                <div className="form-group">
                    <label for="name">Gênero</label>
                    <input type="text" className="form-control" id="name" placeholder="Digite o nome do genêro"/>
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    )
}

export default newGenres;