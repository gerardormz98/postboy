import React, { useContext, useEffect, useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Badge from "react-bootstrap/Badge";
import PostboyTabContent from "./PostboyTabContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';
import PostboyContext from "../context/postboyContext";
import PostboyTabContext from "../context/postboyTabContext";
import { addTab, removeTab } from "../actions/tab";

const PostboyTabs = () => {
    const { tabs, dispatchTabs } = useContext(PostboyContext);
    const [ activeTab, setActiveTab ] = useState(tabs[0].id);
    const [ status, setStatus ] = useState(null);

    useEffect(() => {
        if (tabs.length === 1) {
            setActiveTab(tabs[0].id);
        }
        else if (status === "Adding") {
            setActiveTab(tabs[tabs.length - 1].id);
        }

        setStatus(null);
    }, [tabs, status]);

    const getRequestMethodVariant = (method) => {
        switch (method) {
            case "GET":
                return "success";
            case "POST":
                return "primary";
            case "PUT":
                return "info";
            case "PATCH":
                return "warning";
            case "DELETE":
                return "danger";
            default:
                return "secondary";
        }
    };

    const handleTabClick = (tabId, e) => {
        const isCloseTabButton = e.target.tagName === 'svg' || e.target.tagName === 'path';

        if (tabId === "addTab") {
            setStatus("Adding");
            dispatchTabs(addTab());
        }
        else if (!isCloseTabButton) {
            setActiveTab(tabId);
        }
    };

    const handleCloseTab = (tabIndex) => {
        if (activeTab === tabs[tabIndex].id) {
            setActiveTab(tabs[tabIndex === 0 ? 1 : tabIndex - 1].id);
        }
        
        dispatchTabs(removeTab(tabs[tabIndex].id));
    };

    return (
        <Tabs 
            transition={false} 
            onSelect={(tabId, e) => handleTabClick(tabId, e)}
            activeKey={activeTab}
        >
            {
                tabs.map((tab, idx) => (
                    <Tab 
                        key={tab.id} 
                        eventKey={tab.id}
                        title={
                            <div className="d-flex align-items-center">
                                {
                                    tab.isLoading &&
                                    <FontAwesomeIcon icon={faSpinner} spin className={`mr-2 text-${getRequestMethodVariant(tab.request.method)}`} />
                                }

                                <div className="tab-title d-flex align-items-center justify-content-between">
                                    <Badge pill variant={getRequestMethodVariant(tab.request.method)} className="mr-1">{tab.request.method}</Badge> - <span className="ml-1 title-text">{tab.title}</span>
                                </div>

                                {
                                    tabs.length > 1 &&
                                    <FontAwesomeIcon icon={faTimes} className="ml-2 btn-close-tab" onClick={() => handleCloseTab(idx)} />
                                }
                            </div>
                        } 
                        tabClassName="text-secondary"
                    >
                        <PostboyTabContext.Provider value={{ tab }}>
                            <PostboyTabContent tab={tab} />
                        </PostboyTabContext.Provider>
                    </Tab>
                ))
            }

            <Tab
                key="addTab" 
                eventKey="addTab" 
                title={<FontAwesomeIcon icon={faPlus}/>} 
                tabClassName="nav-add-tab"
            >
            </Tab>
        </Tabs>
    );
};

export default PostboyTabs;