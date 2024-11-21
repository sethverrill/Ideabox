import './App.css';
import Form from './Form';
import Ideas from './Ideas';
import { useState, useEffect } from 'react';

function App() {
  const [ideas, setIdeas] = useState([]);

  async function fetchIdeas() {
    const url = "http://localhost:3001/api/v1/ideas"
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const ideaData = await response.json();
      setIdeas(ideaData);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchIdeas();
  }, []);

  async function addIdea(newIdea) {
    const url = "http://localhost:3001/api/v1/ideas"
    try { 
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newIdea)
      });

      if (!response.ok) {
        throw new Error( `Response status: ${response.status}`);
      }

      const createdIdea = await response.json();
      setIdeas((prevIdeas) => [...prevIdeas, createdIdea]);
    } catch (error) {
      console.error(error.message);
    }    
  }

  function deleteIdea(id){
    console.log(id);
    const filteredIdeas = ideas.filter(idea =>idea.id !== id)
    setIdeas(filteredIdeas)
  }

  return (
    <main className='App'>
      <h1>IdeaBox</h1>
      <Form addIdea={addIdea}/>
      { !ideas.length && <h2>No ideas yet -- add some!</h2> }
      <Ideas ideas={ideas} deleteIdea={deleteIdea} />
    </main>   
  )
}

export default App;
