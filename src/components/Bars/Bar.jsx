import React from 'react'

export const Bar = (props) => {
    const {porcentage, leftWord, rightWord} = props
    
    return ( 
        <div> 
            <div className="bar">
                    <div className="barPercentage">
                        <div className="percentage" style={{width: `${porcentage}%`}}></div>
                    </div>
                    <div className="bar__parameters">
                        <div className="bar__positive" style={{color: (porcentage <= 50) ? 'black' : ''}}>
                            <p className="positive__text"> {leftWord} </p>
                            <p className="positive__percentage"> {`${100 - porcentage}%`}  </p>
                        </div>
                        <div className="bar__negative" style={{color: (porcentage > 50) ? 'black' : ''}}>
                            <p className="negative__text"> {rightWord} </p>
                            <p className="negative__percentage"> {`${porcentage}%`}  </p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
