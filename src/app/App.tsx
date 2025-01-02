import React from "react";
import { Provider as ChakraProvider } from "@/shared/chakra-ui/provider";
import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App(): React.ReactElement {
    return (
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    );
}
