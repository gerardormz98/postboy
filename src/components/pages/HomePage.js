import React, { useState, useEffect, useReducer } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PostboyTabs from "../PostboyTabs";
import Modal from "../Modal";
import PostboyContext from "../../context/postboyContext";
import TabReducer from "../../reducers/tab";
import { getTabDefaultState, getTabResponseDefaultState } from "../../utils/defaults";
import { resetTabs } from "../../actions/tab";

const HomePage = () => {
    const getTabsInitialState = () => {
        const cachedTabs = localStorage.getItem('postboyTabs');
        try {
            if (cachedTabs) {
                return JSON.parse(cachedTabs);
            }
        }
        catch {
            return [getTabDefaultState()];
        }
        return [getTabDefaultState()];
    }

    const [tabs, dispatchTabs] = useReducer(TabReducer, getTabsInitialState());
    const [closeTabsModalShow, setCloseTabsModalShow] = useState(false);

    useEffect(() => {
        const persistTabs = tabs.map((tab) => {
            return {
                ...tab,
                isLoading: false,
                bodyParams: tab.bodyParams.map((param) => ({
                    ...param,
                    value: "",
                    file: null
                })),
                response: getTabResponseDefaultState()
            };
        });

        localStorage.setItem('postboyTabs', JSON.stringify(persistTabs));
    }, [tabs]);

    const handleResetTabs = () => {
        dispatchTabs(resetTabs());
        setCloseTabsModalShow(false);
    };

    return (
        <PostboyContext.Provider value={{
            tabs, dispatchTabs
        }}>
            <Container>
                <div className="my-4">
                    <div className="d-flex align-items-center justify-content-between">
                        <h3 className="mb-0">Online REST API client!</h3>
                        <Button type="submit" variant="outline-primary" size="sm" onClick={() => setCloseTabsModalShow(true)}>
                            Reset tabs
                        </Button>
                    </div>
                    <hr></hr>
                    <PostboyTabs />
                </div>
            </Container>

            <Modal 
                show={closeTabsModalShow} 
                handleClose={() => setCloseTabsModalShow(false)} 
                title={
                    <React.Fragment>
                        <h5 className="m-0">Confirm reset</h5>
                    </React.Fragment>
                }
                body={
                    <React.Fragment>
                        <span>This will remove all your opened tabs, headers and body parameters. Are you sure you want to continue?</span>
                    </React.Fragment>
                }
                footer={
                    <React.Fragment>
                        <Button variant="link" size="sm" onClick={() => setCloseTabsModalShow(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" size="sm" onClick={handleResetTabs}>
                            Continue
                        </Button>    
                    </React.Fragment>
                }
            />
        </PostboyContext.Provider>
    );
};

export default HomePage;