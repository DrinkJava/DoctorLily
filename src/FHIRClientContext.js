import React from "react";

const context = {
    client: null,
    setClient: function(client) {
        context.client = client;
    }
};

export const FHIRClientContext = React.createContext(context);
