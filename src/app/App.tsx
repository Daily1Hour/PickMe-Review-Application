import React from "react";
import { Provider as ChakraProvider } from "@/widgets/chakra-ui/provider";
import ReviewPage from "@/pages/review";

export default function App(): React.ReactElement {
    return (
        <ChakraProvider>
            <ReviewPage />
        </ChakraProvider>
    );
}
