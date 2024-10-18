import { useState } from "react"



export function  TwitterFollowCard  ({ children, userName, initialisFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialisFollowing)
    console.log('[TwitterFollowCard] render with userName:',
        userName)
    
        const text = isFollowing ? 'Siguiendo' : 'Seguir'
        const buttonClasName = isFollowing
        ?'tw-folloCard-button is-following'
        : 'tw-followCard-button'

        const handleClick = () =>{
            setIsFollowing(!isFollowing)
        }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">

                <img 
                className="tw-followCard-avatar"
                 alt=" avatar random"
                  src={`https://unavatar.io/${userName}` } />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUsername"> @{userName}</span>

              </div>
            </header>
            <aside>
                <button className={buttonClasName} onClick={handleClick}>
                    {text}
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>

        </article>
    )

}