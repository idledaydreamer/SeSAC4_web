package first_pkg;

public class Rectangle {
	
/* static 멤버 : 클래스 생성시 메모리 할당, non-static 멤버접근 X */
	private static double pi = 3.14;
	public static double getPi() {return pi;}	// getter
	
	private static int COUNT = 0;
	public static int getCOUNT() {return COUNT;}	// getter
	
	
/* non-static 멤버: 객체 생성시 메모리 공간 할당, static 멤버접근 O */
	
	// 필드 : 클래스에서 필드(변수)는 일반적으로 private로 지정
	private int width;
	private int height;

	// 생성자
	public Rectangle(int num1, int num2) {
		COUNT++;				// 생성시마다 static변수 COUNT값 +1
		this.width = num1;		// 전역변수width에 지역변수num1 대입 
		this.height = num2;
		
	}
	
	// 메소드
	public int recMethod() {return this.width * this.height;}

	
	// getter : 외부 클래스에서 필드 접근 허용
	public int getWidth() { return width; }
	public int getHeight() { return height;	}
	
	// setter : 외부 클래스에서 필드 변경 허용 
	public void setWidth(int width) { this.width = width;}
	public void setHeight(int height) {	this.height = height;}

	
	
}
