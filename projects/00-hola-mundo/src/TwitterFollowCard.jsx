import { useState } from "react";

function TwitterFollowCard({ userName, name, initialIsFollowing }) {
  /*hook useState: es un hook que nos permite guardar y actualizar el estado de un componente. 
  Es un array que nos devuelve dos valores: el primero es el estado actual (function) del componente y 
  el segundo es un callback (setFunction) que permite actualizar el estado del componente.
*/

  const [isFollowing, setIsfollowing] = useState(initialIsFollowing);

  const imageSrc = `https://unavatar.io/${userName}`;
  // tenaria (?): es una maner de simplificar el if-else
  const text = isFollowing ? "siguiendo" : "Seguir";

  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleclick = () => {
    setIsfollowing(!isFollowing);
  };
  return (
    <div>
      <article className="tw-followCard">
        <header className="tw-followCard__header">
          <img
            className="tw-followCard-avatar"
            src={imageSrc}
            alt="El avatart de midudev"
          />
          <div className="tw-followCard-info">
            <strong>{name}</strong>
            <span className="tw-followCard-info__username">@{userName}</span>
          </div>
        </header>
        <aside>
          <button className={buttonClassName} onClick={handleclick}>
            {text}
          </button>
        </aside>
      </article>
    </div>
  );
}
export default TwitterFollowCard;
