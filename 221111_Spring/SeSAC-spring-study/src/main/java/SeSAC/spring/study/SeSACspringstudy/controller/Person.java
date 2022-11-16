package SeSAC.spring.study.SeSACspringstudy.controller;

import java.util.*;

public class Person {

    // 필드
    private String name;
    private String gender;
    private String birth;
    private ArrayList<String> interest;


    // getter & setter
    public String getName() {
        return name;
    }

    public String getGender() {
        return gender;
    }

    public String getBirth() {
        return birth;
    }

    public ArrayList<String> getInterest() {
        return interest;
    }


    public void setName(String name) {
        this.name = name;
    }


    public void setGender(String gender) {
        this.gender = gender;
    }


    public void setBirth(String birth) {
        this.birth = birth;
    }


    public void setInterest(ArrayList<String> interest) {
        this.interest = interest;
    }

}
