import React, { useEffect, useReducer } from "react";
import { Container } from "react-bootstrap";
import PostboyTabs from "./PostboyTabs";

import PostboyContext from "../context/postboyContext";
import TabReducer from "../reducers/tab";
import { getTabDefaultState, getTabResponseDefaultState } from "../utils/defaults";

const MainPage = () => {
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

    useEffect(() => {
        const persistTabs = tabs.map((tab) => {
            return {
                ...tab,
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