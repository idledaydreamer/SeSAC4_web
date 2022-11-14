package SeSAC.spring.study.SeSACspringstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Controller
public class HelloController {

// URL 매핑시켜주는 것으로, 해당경로로 get method 요청이 들어오면 getHi 함수 실행
// hi 라는 이름의 템플릿 파일(hi.html) 검색 (Thymeleaf 템플릿 엔진 처리)
    @GetMapping("/hi")
    public String getHi(Model model){   // 톰캣서버가 컨트롤러 안에서 파라미터로 model 객체에 정보를 담아서 view 로 값을 전달
        model.addAttribute("msg","메세지는 유후~");

       // Thymeleaf 문법
        model.addAttribute("text","hihihi");
        model.addAttribute("utext","hi하이hi");

        String[] names = {"kim", "lee", "hong", "park", "shin"};
        model.addAttribute("names", names);
        // 실습1. Thymeleaf
        model.addAttribute("age",16);

        return "hi";
    }
//    @GetMapping("/hello")
//    public String getHi2(){
//        return "hi";
//    }
//
// 실습2. Thymeleaf 반복문
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
//    @GetMapping("api")  // 변수명 변경시 키 명시해주기
//    public String getApi(@RequestParam(value="name",required = false) String n, Model model){
//        model.addAttribute("name",n);
//        return "api";
//    }
//    @GetMapping("api/{n}")  // n으로 들어온 값을 name 변수에 대입하겠다
//    public String getApi2(@PathVariable("n") String nn, Model model){
//        model.addAttribute("name",nn);
//        return "api";
//    }

// 실습3. API-GET
//    @GetMapping("introduce")
//    public String introduce(@RequestParam(value = "ye",required = false)String y, Model model){
//        model.addAttribute("ye",y);
//    return "api";
//}
//    @GetMapping("introduce/{y}")
//    public String introduce2(@PathVariable("y")String yy, Model model){
//        model.addAttribute("y",yy);
//        return "api";
//    }
//
//    @GetMapping("/introduce2")
//    public String introduce2(@RequestParam String name, @RequestParam int age, Model model){
//        model.addAttribute("name",name);  // URL에 있는 name 값
//        model.addAttribute("age",age);   // URL에 있는 age 값
//        return "api";
//    }

    // 실습4. API-POST
    @GetMapping("api-post")
    public String getMVC(Model model) {
        model.addAttribute("form", new form());

        Map<String,String> hobby = new LinkedHashMap<>();
        hobby.put("여행","여행");
        hobby.put("패션", "패션");
        hobby.put("음식","음식");
        model.addAttribute("hobby",hobby);

        return "api-post";
    }
    @PostMapping("mvc-post")
    public String postMVC(
            @RequestParam(value="name", required = false) String name,
            @RequestParam(value="gender", required = false) String gender,
            @RequestParam(value = "year") int year,
            @RequestParam(value="month") int month,
            @RequestParam(value="day") int day,
            @RequestParam(value="hobby") ArrayList<String> hobby,
            @ModelAttribute("form")
            Model model){

        form ff = new form();
        ff.setName(name);
        ff.setGender(gender);
        ff.setBirth(String.valueOf(year) + '-' + month + '-' + day);
        ff.setHobby(hobby);
        model.addAttribute("ff",ff);

        return "api";
    }


}
