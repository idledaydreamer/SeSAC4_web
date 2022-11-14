package SeSAC.spring.study.SeSACspringstudy.controller;
import lombok.Getter;
import lombok.Setter;

import java.util.*;

public class form {

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBirth() {
        return birth;
    }

    public void setBirth(String birth) {
        this.birth = birth;
    }

    public ArrayList<String> getHobby() {
        return hobby;
    }

    public void setHobby(ArrayList<String> hobby) {
        this.hobby = hobby;
    }

    // 필드
//    @Getter
//    @Setter
    private String name;
    private String gender;         // 성별


    private String birth;
    private ArrayList<String> hobby;     // 관심사

    // 생성자
    public form(){}
}
