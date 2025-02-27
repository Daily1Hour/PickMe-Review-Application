import { createBrowserRouter } from "react-router-dom";
import ReviewPage from "@/pages/review";
import ReviewScreen from "@/features/review";
import { setRouter } from "@/shared/api/router";

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

setRouter(router); // fsd 레이어 접근 규칙을 위해 shared 레이어로 의존

export default router;
