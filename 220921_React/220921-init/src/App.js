// import logo from './logo.svg';
import './App.css';

function App() {
  // const flag = true;
  // var name = '';
  // if (flag) name = true;
  // else name = '문래';

  // const style = {
  //   backgroundColor: "yellow",
  //   color: "blue"
  // };
  let name = '뽀비';
  let animal = '코브라';

  let a = 7;
  let b = 4;

  let title = "Hello World";



  return (  // JSX
    <div>
      {/* {name}
      {flag && (<h1>True</h1>)} */}

      이것은 div입니다
      <h3>이것은 div 안에 있는 h3태그 입니다.</h3>

      <h2>
        제 반려 동물의 이름은 <u>{name}</u>입니다.<br></br>
        <u>{name}</u>는 <u>{animal}</u>입니다.
      </h2>

      {3 + 5 == 8 ? "정답입니다" : "오답입니다!"}
      <p></p>

      {a > b && "a가 b보다 큽니다"}

      <div className="test">{title}</div>

      <div className='input'>
        <label for="input">아이디 : </label>
        <input type="text" className='input'>
        </input>
        <br></br>
        <label for="input">비밀번호 : </label>
        <input type="text" className='input'>
        </input>
      </div>

      <div className='color'>
        <div className='red'></div>
        <div className='orange'></div>
        <div className='yellow'></div>
        <div className='green'></div>
        <div className='blue'></div>
        <div className='navy'></div>
        <div className='purple'></div>
      </div>
    </div>
  );
}

export default App;
