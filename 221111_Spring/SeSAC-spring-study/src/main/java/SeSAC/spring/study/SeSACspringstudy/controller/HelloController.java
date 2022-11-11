package SeSAC.spring.study.SeSACspringstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class HelloController {

// URL 매핑시켜주는 것으로, get method로 해당경로로 요청 들어오면 getHi 함수 실행
// hi 라는 이름의 템플릿 파일(hi.html) 검색 (Thymeleaf 템플릿 엔진 처리)
    @GetMapping("/hi")
    public String getHi(Model model){   // 톰캣서버가 컨트롤러 안에서 파라미터로 model 객체에 정보를 담아서 view 로 값을 전달
        model.addAttribute("text","hihihi");
        model.addAttribute("msg","유후~");
        return "hi";
    }
    @GetMapping("/hello")
    public String getHi2(){
        return "hi";
    }
}
