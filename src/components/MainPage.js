import React, { useReducer } from "react";
import { Guid } from "js-guid";
import PostboyTabs from "./PostboyTabs";
import PostboyContext from "../context/postboyContext";
import TabReducer from "../reducers/tab";
import { Container } from "react-bootstrap";

const MainPage = () => {
    const tabsDefaultState = [{ id: Guid.newGuid().toString(), method: "GET", title: "New request", isLoading: false }];
    const [tabs, dispatchTabs] = useReducer(TabReducer, tabsDefaultState);

    return (
        <PostboyContext.Provider value={{tabs, dispatchTabs}}>
            <Container>
                <div className="my-4">
                    <h3 className="mb-3">Online REST API client!</h3>
                    <hr></hr>
                    <PostboyTabs />
                </div>
            </Container>
        </PostboyContext.Provider>
    );
};

export default MainPage;