import React from "react";
import { Provider as ChakraProvider } from "@/widgets/chakra-ui/provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReviewPage from "@/pages/review";
import CreateReviewPage from "@/pages/review/ui/CreateReviewPage";

export default function App(): React.ReactElement {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<ReviewPage />}></Route>
                    <Route
                        path="/create-review"
                        element={<CreateReviewPage />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
}
