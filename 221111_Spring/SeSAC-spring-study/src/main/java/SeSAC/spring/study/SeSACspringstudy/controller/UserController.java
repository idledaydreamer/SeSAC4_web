package SeSAC.spring.study.SeSACspringstudy.controller;

import SeSAC.spring.study.SeSACspringstudy.service.BoardService2;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import SeSAC.spring.study.SeSACspringstudy.domain.User;
import SeSAC.spring.study.SeSACspringstudy.dto.UserDTO;
import SeSAC.spring.study.SeSACspringstudy.service.UserService;

import java.util.*;

@Controller
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
//    private final UserService user;
//    public UserController(UserService user){
//        this.user = user;
//    }

    /* UserService */
    @GetMapping("signup")
    public String getSignup() {
        return "signup";
    }

    @PostMapping("signup")
    public String postSignup(UserDTO userDTO) {
//        User user = new User();
//        user.setUsername(userDTO.getUsername());
//        user.setPassword(userDTO.getPassword());
//        user.setNickname(userDTO.getNickname());
//        user.setEmail(userDTO.getEmail());

        userService.signup(userDTO);
        return "redirect:/login";
    }

    @GetMapping("login")
    public String getLogin() {
        return "login";
    }

    @PostMapping("login")
    public String postLogin(@RequestBody String inputID, String inputPW) {

        User user = this.userService.findUser(inputID, inputPW);
        Optional<User> userInfo = userService.findOneByUsername(userDTO.getUsername());

        model.addAttribute("userInfo", userInfo);
        return "redirect:/userInfo";
    }

    @GetMapping("userInfo")
    public String getUserInfo(Model model) {
        User<user> userInfo = userService.
        return "userInfo";
    }

    @PostMapping("userInfo")
    @ResponseBody
    public Optional<User> postUserInfo(@RequestBody UserDTO userDTO) {
        // return user;
        return userService.find
    }

}
