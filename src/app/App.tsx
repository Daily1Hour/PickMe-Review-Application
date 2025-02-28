import React from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraUiSystem } from "@styleguide/react";

import router from "./router";

const queryClient = new QueryClient();

export default function App(): React.ReactElement {
    return (
        <ChakraProvider value={chakraUiSystem}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </ChakraProvider>
    );
}
