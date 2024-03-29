package first_pkg;
import java.util.*;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
/* 기본 실습 */
//		String name;
//		int age;
//		
//		// 스캐너 객체 생성 
//		Scanner scanner = new Scanner(System.in);
//		
//		System.out.println("이름을 입력하셈 ");
//		name = scanner.next();
//		System.out.println("나이를 입력하셈 ");
//		age = scanner.nextInt();
//		
//		System.out.println("안녕하세요! " + name + "님("+age+"세)");
		
		
/* 조건문 실습 */	
//		int age;
//		System.out.println("나이를 입력하셈 ");
//		age = scanner.nextInt();
//		
//		if ( age <= 8) { System.out.println("유아"); }
//		else if (age<14) {System.out.println("초등학생");}
//		else if (age<17) {System.out.println("중학생"); }
//		else if (age<20) {System.out.println("고등학생"); }
//		else {System.out.println("성인"); }
//		
//		String name;
//		System.out.println("이름을 입력하셈 ");
//		name = scanner.next();
//		
//		if (name.equals("홍길동")) {System.out.println("남자");}
//		else if (name.equals("성춘향")) {System.out.println("여자");}
//		else {System.out.println("모르겠어요");}
		
/* 반복문 실습 */			
//		int num;
//		System.out.println("숫자를 입력하세요");
//		num = scanner.nextInt();
//		
//		for ( int i=1; i<=num; i++) {
//			System.out.print(i + " ");
//		}
/* 메소드 실습 */	
//		float num1, num2;
//		System.out.println("숫자 두 개를 입력하세요");
//		num1 = scanner.nextFloat();
//		num2 = scanner.nextFloat();
//		
//		System.out.println("덧셈 결과 : " + (num1+num2));
//		System.out.println("뺄셈 결과 : " + (num1-num2));
//		System.out.println("나눗셈 결과 : " + (num1/num2));
//		System.out.println("곱셈 결과 : " + (num1*num2));
		
/* 배열 실습 */	
//		int[] intArray = new int[5];
//		int sum = 0;
//		System.out.println("5개의 정수를 입력하세요");
//		
//		for(int value: intArray) {
//			value = scanner.nextInt();
//			sum += value;
//		}
//		System.out.println("평균은 "+ (double)sum/intArray.length);
/* ArrayList 실습 */
//		ArrayList<String> str = new ArrayList<>();
//		while(true) {
//			System.out.println("문자를 입력해주세요 : ");
//			String st = scanner.nextLine();
//			if (st.equals("exit")) break;
//			
//			str.add(st);
//		}
//		for (String value: str) {
//			System.out.println(value);
//		}

/* 에러 처리 */
	/* 숫자를 0으로 나누는 경우 (ArithmeticException) */
//		int num1 = 5;
//		int num2 = 0;
//		
//		try {
//			System.out.println(num1/num2);
//		}
//		catch(ArithmeticException e) {
//			System.out.println("0으로 나눌 수 없습니다!");
//		}
//		finally {
//			System.out.println("finally~");
//		}
	/* 배열의 인덱스 범위를 벗어나는 경우 ArrayIndexOutOfBoundsException */
//		int[] intArray = {1,2,3,4};
//		
//		try {
//			for(int i=0; i<intArray.length+1; i++) {
//				System.out.println(intArray[i]);
//			}
//		}
//		catch (ArrayIndexOutOfBoundsException e) {
//			System.out.println("인덱스가 범위를 벗어났습니다!");
//		}
	/* 정수를 입력받도록 작성한 코드에 문자열을 입력한 경우 (InputMismatchException) */
//		// 스캐너 객체 생성 
//		Scanner scanner = new Scanner(System.in);
//		System.out.println("숫자를 입력해주세요");
//		
//		int num = 0;
//		
//		try {
//			num = scanner.nextInt();
//		}
//		catch ( InputMismatchException e){
//				System.out.println("!!숫자를 입력해야해요!!");
//		}
//		
//		System.out.println("숫자: " + num);
//		
//		scanner.close();
		
		
/* 클래스 */
//		// test라는 이름으로 객체(Test 클래스의 인스턴스) 생성 
//		Test test = new Test(3);		
//		
//		// 객체의 인스턴스 변수 출력 
//		System.out.println(test.num);
//		
//		// 객체의 메소드 호출 
//		test.testMethod();
		
/* 클래스 실습 */
//		Scanner scanner = new Scanner(System.in);
//		System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력하셈 ");
		
//		int width = scanner.nextInt();
//		int height = scanner.nextInt();
//		
//		
		// rec 객체 생성 
//		Rectangle rec = new Rectangle(width,height);
//		
		
		// 필드가 public인 경우 
//		System.out.println(rec.width);
//		System.out.println(rec.height);
		
		
		// getter
//		System.out.println(rec.getWidth());
//		System.out.println(rec.getHeight());
		
		// 객체 메소드 호출
//		System.out.println(rec.recMethod());
		

		// setter
//		rec.setWidth(10);
//		rec.setHeight(10);

		// 객체 메소드 호출
//		System.out.println(rec.recMethod());

				
/* 클래스 실습 upgrade */			
//		// rect 인스턴스의 배열 rects 생성 
//		ArrayList<Rectangle> rects = new ArrayList<>();
//
//		// 반복문으로 가로 세로 길이 입력
//		while (true) {
//			System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력하셈 ");
//			int width = scanner.nextInt();
//			int height = scanner.nextInt();
//		
//			if (width == 0 && height==0) break;
//			
//			// rect 객체 생성해 rects 배열에 삽입 
//			rects.add(new Rectangle(width,height));
//			// Rectangle rect = new Rectangle(width);
//			// rect.setHeight(height);
//			// rects.add(rect);
//		}
//		
//		// 각 객체의 가로,세로,넓이 출력 
//		for (Rectangle value: rects) {
//			System.out.println("가로 길이는: "+ value.getWidth());
//			System.out.println("세로 길이는: "+ value.getHeight());
//			System.out.println("넓이는 : "+ value.recMethod());
//			System.out.println("-------------------------------");
//		}
		
/* static 멤버 */			
//		Rectangle.getPi();	// 객체 생성 안해도 사용 가능 
						
/* 클래스 실습 upupgrade */	
//		System.out.println("Rectangle 인스턴스의 개수는: "+ Rectangle.getCOUNT());
//		System.out.println("Rectangle 인스턴스의 개수는: " + rects.size()  );

	
		scanner.close();
		
	}

}
