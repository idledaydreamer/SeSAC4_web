import { Link } from 'react-router-dom';

function Test64() {
    return (
        <div className='main'>

            <Link to='/'> <h2>ReactRouter 실습</h2></Link>
            <nav>
                <ul>
                    <li><Link to='/student/sesac'>학생SeSAC</Link></li>
                    <li><Link to='/student/codingon'>코딩온</Link></li>
                    <li><Link to='/student/new?name=sesac&key=id#codingon'>searchParams</Link></li>
                </ul>
            </nav>
        </div >
    )
}

export default Test64;



// <div>
//     <Link to='/product/1'>1번 상품</Link>
//     <br />
//     <Link to='/product/2'>2번 상품</Link>
//     <br />
//     <Link to='/product/1?search=productName&1=demo#test'>a번 상품</Link>
// </div>