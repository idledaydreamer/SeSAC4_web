import { Link } from 'react-router-dom';

function Main() {
    return (
        <div>
            <h1>Main</h1>
            <div>
                <Link to='/product/1'>1번 상품</Link>
                <br />
                <Link to='/product/2'>2번 상품</Link>
                <br />
                <Link to='/product/1?search=productName&1=demo#test'>a번 상품</Link>
            </div>
        </div>
    )
}

export default Main;