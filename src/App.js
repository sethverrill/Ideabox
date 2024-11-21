import './App.css';
import Form from './Form';
import Ideas from './Ideas';
import { useState } from 'react';

function App() {
  const [ideas, setIdeas] = useState([]);

  function addIdea(newIdea) {
    setIdeas([...ideas, newIdea])
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
