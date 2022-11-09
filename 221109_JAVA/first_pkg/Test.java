package first_pkg;

public class Test {
	
/* 클래스 */
	
	// 필드
	public int num;	// num이라는 정수 필드 선언
	public String str = "문자열";	// str이라는 문자열 필드 선언 & 초기화 
	
	// 생성자 
	public Test(int num) {// 매개변수 있을 때 
		this.num = num;	// 클래스의 전역변수 num에 매개변수로 받은 num 대입 
//		num = 1;
	}
	
	// 메소드
	public void testMethod() {
		System.out.println("test-Method!");
	}
}
