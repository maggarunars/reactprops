import Card from './Card'

function App() {
  const blogs = [
    {
      pictureURL: "https://www.interviewmagazine.com/wp-content/uploads/2021/01/ARLO.PARKS_Credit_Alex-Kurunis_-1-e1611695405952.jpg",
      name: "Arlo Parks",
      song: "Devotion",
    },
    {
      pictureURL: "https://atorecords.com/wp-content/uploads/2020/07/Black-Pumas-Deluxe-Press-Photo-scaled.jpg",
      name: "Black Pumas",
      song: "I'm ready",
    },
    {
      pictureURL: "https://thefortyfive.com/wp-content/uploads/Alfie-Templeman1-scaled.jpg",
      name: "Alfie Templeman",
      song: "Circles",
    }

  ]
  return (
    <MainContainer>
    <div>
    <h1>Amazing musicians and some of their songs</h1>
    <div className="container">
 
    {blogs.map((blog)=>{
      return (<div key={blog.name}> <Card pic={blog.pictureURL} name={blog.name} song={blog.song}></Card>
      </div>)


} )}
</MainContainer>
</div>
</div>
  );
}

export default App;
