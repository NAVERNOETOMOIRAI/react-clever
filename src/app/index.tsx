import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";
import { withHocs } from "./hocs";
import { useSidebarQuery } from "@/entities/sidebar/api";

import items from "./mocks";

/**
 * Entry-point приложения
 * @remark Содержит в HOC-обертке инициализирующую логику приложения
 * @see withHocs
 */

const App = () => {
    const test = useSidebarQuery();
    return (
        <RouterProvider router={appRouter(items)}/>
    );
};

export default withHocs(App);