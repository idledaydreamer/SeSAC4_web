import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom';

function Student() {
    const { id } = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    let style1 = { color: 'green' }
    let style2 = { color: 'red' }

    return (
        <div>
            <h3>학생의 이름은 <span style={style1}>{id}</span>입니다.</h3>
            {searchParams.get('name') && (<h3>실제 이름은 <span style={style2}> {searchParams.get('name')}</span></h3>)
            }

            <button onClick={() => navigate(-1)}>이전페이지로</button>
        </div >
    )
}

export default Student;