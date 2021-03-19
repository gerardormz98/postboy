import React, { useContext } from "react";
import ReactJson from 'react-json-view';
import PostboyTabContext from "../context/postboyTabContext";
import { httpStatusCodes } from "../utils/constants";

const PostboyTabContent = () => {
    const { tab } = useContext(PostboyTabContext);

    const getStatusCodeColorClass = () => {
        switch (String(tab.response.statusCode).charAt(0)) {
            case "2":
                return "bg-success";
            case "4":
            case "5":
                return "bg-danger";
            default:
                return "bg-secondary";
        };
    };
    
    return (
        <div>   
            {
                !!tab.response.statusCode &&
                <div className={`response-status-code py-2 px-3 text-white border-top border-left border-right rounded-top ${getStatusCodeColorClass()}`}>
                    <span>
                        Status code: <b>{tab.response.statusCode}</b>  
                        {
                            httpStatusCodes[tab.response.statusCode] && 
                            <span> ({httpStatusCodes[tab.response.statusCode]})</span>
                        }
                    </span>
                </div>
            }

            {
                tab.response.errorMessage &&
                <div className="py-2 px-3 text-danger small border-top border-left border-right">
                    <span>
                        {tab.response.errorMessage}
                    </span>
                </div>
            }

            <div className={`p-2 border ${tab.response.statusCode ? "rounded-bottom" : "rounded"}`}>
                <ReactJson 
                    src={tab.response.responseData}
                    name={false}
                    collapsed={1}
                    iconStyle="square"
                    enableClipboard={false}
                    displayDataTypes={false}
                />
            </div>
        </div>
    );
};

export default PostboyTabContent;