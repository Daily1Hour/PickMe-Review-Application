import React from "react";
import { Provider as ChakraProvider } from "@/shared/chakra-ui/provider";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./router";

const queryClient = new QueryClient();

export default function App(): React.ReactElement {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <RouterProvider router={router} />
            </ChakraProvider>
        </QueryClientProvider>
    );
}
