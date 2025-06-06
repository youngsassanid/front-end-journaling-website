import React from 'react';
import { useParams } from "react-router";

export const Conversation = () => {
    let params = useParams();
    return (
        <div>
            <h1>Conversation {params.conversationId}</h1>
        </div>
    );
};