import { createBrowserRouter } from "react-router-dom";
import Review from "@/pages/review";
import ReviewPage from "@/features/review";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Review />,
        children: [
            {
                path: ":reviewId",
                element: <ReviewPage />,
            },
        ],
    },
]);

export default router;
