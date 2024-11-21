import Card from './Card';
import './Ideas.css';

function Ideas({ ideas, deleteIdea }){
  const ideaCards = ideas.map(idea => {
    return (
      <Card
        key={idea.id}
        title={idea.title}
        description={idea.description}
        id={idea.id}
        deleteIdea={deleteIdea}
      />
    )
  })

  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )  
}

export default Ideas;
