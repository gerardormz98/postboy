import React, { useContext, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import PostboyContext from "../context/postboyContext";
import PostboyTabContext from "../context/postboyTabContext";
import { setTabTitle } from "../actions/tab";
import { defaultTabTitle } from "../utils/defaults";

const TabTitleForm = () => {
    const { dispatchTabs } = useContext(PostboyContext);
    const { tab } = useContext(PostboyTabContext);
    const [ localTitle, setLocalTitle ] = useState(tab.title);
    const editInput = useRef(null);

    useEffect(() => {
        setLocalTitle(tab.title);
    }, [tab.title]);

    const handleEditClick = () => {
        setLocalTitle(tab.title);
        editInput.current.focus();
        editInput.current.select();
    };

    const handleResetClick = () => {
        handleTitleCommit("");
    };

    const handleTitleChange = (title) => {
        setLocalTitle(title);
    };

    const handleTitleCommit = (title) => {
        title = title.trim();
        setLocalTitle(title || tab.request.url || defaultTabTitle);
        dispatchTabs(setTabTitle(tab.id, title, title && title !== tab.request.url));
        editInput.current.blur();
    };

    const handleTitleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleTitleCommit(e.target.value);
        }
    }

    return (
        <div>
            <div className="d-flex align-items-center justify-content-between">
                {
                    <input 
                        type="text" 
                        ref={editInput}
                        value={localTitle} 
                        spellCheck="false"
                        placeholder={defaultTabTitle}
                        className={`tab-title__edit-input text-dark flex-grow-1 mr-2 pl-2`}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        onBlur={(e) => handleTitleCommit(e.target.value)}
                        onKeyPress={handleTitleKeyPress} />
                }
                <div>
                    <FontAwesomeIcon icon={faEdit} className="tab-title__button" title="Edit tab title" onClick={() => handleEditClick()} />
                    {
                        tab.isCustomTitle &&
                        <FontAwesomeIcon icon={faRedo} className="tab-title__button ml-2" title="Reset tab title" onClick={() => handleResetClick()} />
                    }
                </div>
            </div>
            <hr className="tab-title__separator" />
        </div>
    );
};

export default TabTitleForm;
