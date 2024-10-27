import React from "react"; // Import React to use JSX
import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard.jsx";
/* la frorma de renderizar una lista componentes es apartir de un json sacar los datos y usar map
recorriendo recorriendo cada elemento hasta renderizar todos los datoas de cada elemento del json  */
const user = [
  {
    name: "Miguel Ángel Duran",
    userName: "midudev",
    isfollowing: true,
  },
  {
    name: "Pablo Heraldo",
    userName: "pheralb",
    isfollowing: false,
  },
  {
    name: "Héctor de León (El loco de los perros)",
    userName: "powerhdeleon",
    isfollowing: false,
  },
];

function App() {
  return (
    <section className="App">
      {user.map(({ userName, name, isfollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          name={name}
          initialIsFollowing={isfollowing}
        />
      ))}
    </section>
  );
}

export default App;
