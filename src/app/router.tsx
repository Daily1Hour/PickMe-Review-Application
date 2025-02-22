import { createBrowserRouter } from "react-router-dom";
import ReviewPage from "@/pages/review";
import ReviewScreen from "@/features/review";

const basename = import.meta.env.VITE_PUBLIC_URL || "/";

const router = createBrowserRouter(
    [
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
    ],
    {
        basename,
    },
);

export default router;
