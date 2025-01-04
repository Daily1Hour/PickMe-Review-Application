import { createBrowserRouter } from "react-router-dom";
import ReviewPage from "@/pages/review";
import CreateReviewPage from "@/features/create";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ReviewPage />,
    },
    {
        path: "/create-review",
        element: <CreateReviewPage />,
    },
]);

export default router;
