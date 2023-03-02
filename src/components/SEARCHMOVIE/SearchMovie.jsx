import { useState } from "react";


export const SearchMovies=(props)=>{
    const [input,setInput]= useState('')
    const handleSubmit=e=>{
        e.preventDefault();
        props.setSearch({ movies: input });
        e.currentTarget.reset()
    }
    return(<form onSubmit={handleSubmit}>
        <input
        type='text'
        name='search'
        placeholder="Search"
        value={input}
        onChange={e=>{setInput(e.target.value)}}
        />
        
        <button type='submit'>Serach</button>
    </form>)

}