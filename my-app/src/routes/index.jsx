import { Routes, Route } from "react-router-dom";

import { CHART } from "constant";
import Main from "./app";
import ChartInfo from "./app/ChartInfo";
import FormInfo from "./app/FormInfo";
import NotFound from "./NotFound";

const RoutesPage = () => {
    return <Routes>
        <Route element={<Main />}>
            <Route index element={<FormInfo />}/>
            <Route path={CHART} element={<ChartInfo />}/>
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
}

export default RoutesPage;