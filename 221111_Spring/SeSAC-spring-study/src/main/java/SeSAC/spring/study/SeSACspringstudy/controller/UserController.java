package SeSAC.spring.study.SeSACspringstudy.controller;

import SeSAC.spring.study.SeSACspringstudy.dto.UserDTO;
import SeSAC.spring.study.SeSACspringstudy.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;


@Controller                 // controller 클래스 객체를 스프링 빈(스프링이 관리하는 객체)으로 등록
@RequiredArgsConstructor    // userService 필드를 매개변수로 하는 생성자 자동생성
public class UserController {
    // 생성자 주입 : controller 클래스가 service 클래스의 자원(메서드,필드)을 사용할 권한 생김
    private final UserService userService;


    // 기본페이지 요청 메서드
    @GetMapping("/")
    public String index() {
        return "index";     // templates 폴더의 index.html 탐색
    }


    // 회원가입
    @GetMapping("/user/save")
    public String saveForm() {
        return "save";
    }

    @PostMapping("/user/save")
    public String save(@ModelAttribute UserDTO userDTO) {
        // DTO 객체클래스 타입을 매개변수로 지정시 form name == DTO 필드명이 같다면 알아서 객체에 값 담아줌
        System.out.println("UserController.save");
        System.out.println("userDTO = " + userDTO);

        userService.save(userDTO);

        return "login";     // return "redirect:/login";
    }


    // 로그인
    @GetMapping("/user/login")
    public String loginForm() {
        return "login";
    }

    @PostMapping("/user/login")
    public String login(@ModelAttribute UserDTO userDTO, HttpSession session) {
        UserDTO loginResult = userService.login(userDTO);
        if (loginResult != null) {
            // login 성공
            session.setAttribute("loginEmail", loginResult.getEmail());
            return "main";
        } else {
            // login 실패
            return "login";
        }
    }


    // query string : /user?id=1 -> @RequestParam
    // rest api : /user/1 -> @PathVariable

    // 회원목록 출력하기
    @GetMapping("/user/")
    public String findAll(Model model) {

        List<UserDTO> userDTOList = userService.findAll();

        // Model 객체 : html로 가져갈 데이터가 있을 때 사용
        // request 데이터를 JSP 템플릿엔진으로 화면에 출력할 때 실어나르는 역할
        model.addAttribute("userList", userDTOList);
        return "list";

    }

    // 회원정보 상세조회
    @GetMapping("/user/{id}")
    public String findById(@PathVariable Long id, Model model) {
        UserDTO userDTO = userService.findById(id);
        model.addAttribute("user", userDTO);
        return "detail";
    }


    // 회원정보 수정하기
    @GetMapping("/user/update")
    public String updateForm(HttpSession session, Model model) {
        String myEmail = (String) session.getAttribute("loginEmail");
        UserDTO userDTO = userService.updateForm(myEmail);
        model.addAttribute("updateUser", userDTO);
        return "update";
    }

    @PostMapping("/user/update")
    public String update(@ModelAttribute UserDTO userDTO) {
        userService.update(userDTO);
        return "redirect:/user/" + userDTO.getId();
    }


    @GetMapping("/user/delete/{id}")
    public String deleteById(@PathVariable Long id) {
        userService.deleteById(id);
        return "redirect:/list/";
    }
//    @PostMapping("login")
//    public String postLogin(@RequestBody String inputID, String inputPW) {
//
//        User user = this.userService.findUser(inputID, inputPW);
//        Optional<User> userInfo = userService.findOneByUsername(userDTO.getUsername());
//
//        model.addAttribute("userInfo", userInfo);
//        return "redirect:/userInfo";
//    }

//    @GetMapping("userInfo")
//    public String getUserInfo(Model model) {
//        User<user> userInfo = userService.
//        return "userInfo";
//    }

//    @PostMapping("userInfo")
//    @ResponseBody
//    public Optional<User> postUserInfo(@RequestBody UserDTO userDTO) {
//        // return user;
//        return userService.find
//    }

}
