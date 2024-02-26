import './App.css';
import ProfileCard from './Components/ProfileCard';

function App() {
  const data =
    {name : "Elon Musk",
      city: "America",
      role:"CEO of Tesla"
  }
const skills =["html","css","tailwind","javascript","react","node js","express js","mongoDb","balaji"]
  
return (
    <div className="App flex justify-center py-5">
        <ProfileCard data={data} skills={skills} />
    </div>
  );
}

export default App;
