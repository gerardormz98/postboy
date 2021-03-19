import React, { useReducer } from "react";
import { Container } from "react-bootstrap";
import PostboyTabs from "./PostboyTabs";

import PostboyContext from "../context/postboyContext";
import TabReducer from "../reducers/tab";
import { getTabDefaultState } from "../utils/defaults";

const MainPage = () => {
    const [tabs, dispatchTabs] = useReducer(TabReducer, [getTabDefaultState()]);

    return (
        <PostboyContext.Provider value={{
            tabs, dispatchTabs
        }}>
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