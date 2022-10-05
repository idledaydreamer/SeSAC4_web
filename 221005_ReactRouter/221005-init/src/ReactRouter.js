import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Product from './Product';

import Test64 from './ex/Test64';
import Student from './ex/Student';

const ReactRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/' element={<Main />}></Route> */}
                    <Route path='/product/:id' element={<Product />}></Route>


                    <Route path='/' element={<Test64 />}></Route>
                    <Route path='/student/:id' element={<Student />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter;