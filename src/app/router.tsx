import { createBrowserRouter } from "react-router-dom";
import ReviewPage from "@/pages/review";
import ReviewScreen from "@/features/review";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ReviewPage />,
        children: [
            {
                path: ":reviewId",
                element: <ReviewScreen />,
            },
        ],
    },
]);

export default router;
