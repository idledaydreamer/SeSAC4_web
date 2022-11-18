package SeSAC.spring.study.SeSACspringstudy.repository;

import SeSAC.spring.study.SeSACspringstudy.domain.Board;

import java.util.*;


public interface BoardRepository {// 인터페이스로 생성

    Board save(Board board);

    // Optional : Null이 될 수 있는 객체를 감싸는 Wrapper 클래스, 객체를 감싸는 컨테이너
    Optional<Board> findById(int id);

    Optional<Board> findByName(String name);

    List<Board> findAll();

}
