import React, { useState } from 'react'

export const Question = (props) => {

    const { isActive, title, id, setIsActive, setIdFocus } = props;
    const [optionActive, setOptionActive] = useState(8);

    const handleClickLabel = (e, option) => {
        e.preventDefault();
        e.stopPropagation();

        setOptionActive(option)
        setIsActive(id + 1);
        setIdFocus(id + 1);
    }

    const handleClickQuestion = (e) => {
        setIsActive(id);
        setIdFocus(id);
    }

    return(
        <div className={`${ (isActive) ? 'question__active' : 'question__disactive' } container__perso`} id={id} onClick={handleClickQuestion}>
            <div className="question__text"> {title} </div>
            <div className="option__grid">
                <div className="accord"> Estoy de acuerdo </div>
                
                <input type="radio" name={ id } value="1" checked={(optionActive === "1")} readOnly={true}/>
                <label className="option option_1" htmlFor={ `${id}_1` } onClick={ e => {handleClickLabel(e,"1")} }></label>

                <input type="radio" name={ id } value="2" checked={(optionActive === "2")} readOnly={true}/>
                <label className="option option_2" htmlFor={ `${id}_2` } onClick={ e => {handleClickLabel(e,"2")} }></label>

                <input type="radio" name={ id } value="3" checked={(optionActive === "3")} readOnly={true}/>
                <label className="option option_3" htmlFor={ `${id}_3` } onClick={ e => {handleClickLabel(e,"3")} }></label>

                <input type="radio" name={ id } value="0" checked={(optionActive === "0")} readOnly={true}/>
                <label className="option neutral" htmlFor={ `${id}_0` } onClick={ e => {handleClickLabel(e,"0")} }></label>

                <input type="radio" name={ id } value="4" checked={(optionActive === "4")} readOnly={true}/>
                <label className="option option_4" htmlFor={ `${id}_4` } onClick={ e => {handleClickLabel(e,"4")} }></label>

                <input type="radio" name={ id }  value="5" checked={(optionActive === "5")} readOnly={true}/>
                <label className="option option_5" htmlFor={ `${id}_5` } onClick={ e => {handleClickLabel(e,"5")} }></label>

                <input type="radio" name={ id }  value="6" checked={(optionActive === "6")} readOnly={true}/>
                <label className="option option_6" htmlFor={ `${id}_6` } onClick={ e => {handleClickLabel(e,"6")} }></label>

                <div className="disaccord"> No estoy de acuerdo </div>
            </div>
        </div>
    )
}