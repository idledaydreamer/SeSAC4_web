package SeSAC.spring.study.SeSACspringstudy.controller;
import java.util.*;

public class Person {
    // 필드
    private int age;
    private String name;

    // 생성자
    public Person(String name,int age ){
        this.age = age;
        this.name = name;
    }

    // getter & setter
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

}
