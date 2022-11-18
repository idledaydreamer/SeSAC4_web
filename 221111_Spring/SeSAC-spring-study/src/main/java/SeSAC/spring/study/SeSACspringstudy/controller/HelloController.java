package SeSAC.spring.study.SeSACspringstudy.controller;

import SeSAC.spring.study.SeSACspringstudy.vo.PersonVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import SeSAC.spring.study.SeSACspringstudy.dto.PersonDTO;

import java.util.ArrayList;

/* @GetMapping */    // URL 매핑시켜주는 것으로, 해당경로로 get method 요청이 들어오면 getHi 함수 실행

@Controller
public class HelloController {
    @GetMapping("hi")
    public String getHi(Model model) { // 톰캣서버가 컨트롤러 안에서 파라미터로 model 객체에 정보를 담아서 view 로 값을 전달
        // Thymeleaf 문법
        model.addAttribute("text", "hihihi");
        model.addAttribute("utext", "<strong>utext</strong>");
        String[] names = {"kim", "lee", "park"};
        model.addAttribute("names", names);

        // 실습1. Thymeleaf
        model.addAttribute("age", 16);
        return "hi";
    }

    @GetMapping("hello")
    public String getHi2() {
        return "hi";
    }

    /* 실습2. Thymeleaf 반복문 */
//    @GetMapping("/people")
//    public String people(Model model){
//
//        List<Person> people = new ArrayList<>();
//        // constructor >> name,age
//        people.add(new Person("kim",10));
//        people.add(new Person("lee",20));
//        people.add(new Person("hong",30));
//        people.add(new Person("park",40));
//        people.add(new Person("shin",50));
//        // add data to view
//        model.addAttribute("people",people);
//
//        return "hi";
//    }
//

    /* REST API */
    @GetMapping("api")      // 변수명 변경시 키 명시해주기
    public String getApi(@RequestParam(value = "name", required = false) String n, Model model) {
        model.addAttribute("name", n);
        return "api";
    }

    @GetMapping("api2/{n}") // n으로 들어온 값을 name 변수에 대입
    public String getApi2(@PathVariable("n") String nn, Model model) {
        model.addAttribute("name", nn);
        return "api";
    }


    /* 실습3. API-GET */
//     @GetMapping("introduce")
//     public String introduce(@RequestParam(value = "ye",required = false)String y, Model model){
//         model.addAttribute("ye",y);
//     return "api";
// }
//     @GetMapping("introduce/{y}")
//     public String introduce2(@PathVariable("y")String yy, Model model){
//         model.addAttribute("y",yy);
//         return "api";
//     }
//
//     @GetMapping("/introduce2")
//     public String introduce2(@RequestParam String name, @RequestParam int age, Model model){
//         model.addAttribute("name",name);  // URL에 있는 name 값
//         model.addAttribute("age",age);   // URL에 있는 age 값
//         return "api";
//     }
    /* 실습4. API-POST */


    /*  @RequestMapping Handler Method : 클라이언트 요청을 객체에 바인딩 */

    /* ModelAttribute */
    // HTTP Body(multipart/form-data) & HTTP 파라미터 데이터를 Setter 통해 1:1 바인딩 (HttpMessageConverter)
    // 생성자/Setter 필요 (생성자,수정자 주입)

    /* RequestParam */  // query string
    // HTTP 파라미터(Query Parameter)를 컨트롤러의 메서드 인자로 1:1 바인딩  (전달받은 데이터를 URI 상에서 검색)
    // 파라미터 필요 : @RequestParam(required = false) 설정 시 매개변수 null 바인딩되어 없어도 실행됨
    // 객체 생성X, 변수별 데이터 저장O, 동적폼 전송X

    /* RequestBody */   // json
    // HTTP Body(JSON,XML) -> Java Object 변환 (HttpMessageConverter)
    // 생성자/setter 필요X : Jackson 라이브러리 내부적으로는 객체 생성, 필드를 찾아, Reflection 값 할당
    // 객체 생성O, 변수별 데이터 저장X, 동적 폼전송
    // 비동기 처리 -> @ResponseBody

    /* DTO */   // 외부시스템과 데이터 통신, JSON serialization
    // 계층 간 데이터 전송 객체(자바 빈)
    // 로직X : getter(), setter()

    /* VO */    // DB 에서 가져오는 데이터
    // 값 그 자체를 니티내는 객체
    // 로직O : getter(), setter() X
    // 불변성 : Read-Only 속성, 필드값 같으면 같은 객체
    // 객체 비교 : equals & hashcode 오버라이딩(재정의)


    @GetMapping("form")
    public String getForm() {
        return "form";
    }

    @PostMapping("form")
    public String postForm(
            @RequestParam String name,
            @RequestParam String gender,
            @RequestParam int year,
            @RequestParam int month,
            @RequestParam int day,
            @RequestParam String interest,  // 배열 형태로 오지만, 전체 문자열로 받음
            Model model
    ) {
        Person p = new Person();
        p.setName(name);
        p.setBirth(year + "-" + month + "-" + day);
        p.setGender(gender);
        p.setInterest(interest);
        model.addAttribute("p", p);
        return "result";
    }

    /* RequestParam */  // form-encoded 데이터만 처리 가능, JSON 데이터 X
    @PostMapping("form-param1") // 동적 form 전송
    public String postForm1(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String gender,
            Model model) {
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        return "result";
    }

    @PostMapping("form-param2") // 일반 form 전송
    public String postForm3(
            @RequestParam String name,
            @RequestParam String gender,
            Model model) {
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        return "result";
    }

    /* DTO */
    @PostMapping("form-dto1")
    @ResponseBody   //  결과 응답 & view 렌더링 X   res.send()와 동일
    public PersonDTO postDto1(
            @RequestBody PersonDTO person) {
//        model.addAttribute("name", person.getName());
//        model.addAttribute("gender", person.getGender());
//        return "result";
        return person;      // set 되어있는 객체 반환
    }

    @PostMapping("form-dto2")
    public String postDto2(
            PersonDTO person,
            Model model) {
        model.addAttribute("name", person.getName());
        model.addAttribute("gender", person.getGender());
        return "result";
    }

    /* VO */
    @PostMapping("form-vo1")
    @ResponseBody
    public PersonVO postVo1(
            @RequestBody PersonVO person) {
        //  model.addAttribute("name", person.getName());
        //  model.addAttribute("gender", person.getGender());
        //return "result";
        return person;
    }

    @PostMapping("form-vo2")
    public String postVo2(
            PersonVO person,
            Model model) {
        model.addAttribute("name", person.getName());
        model.addAttribute("gender", person.getGender());
        return "result";
    }
}
