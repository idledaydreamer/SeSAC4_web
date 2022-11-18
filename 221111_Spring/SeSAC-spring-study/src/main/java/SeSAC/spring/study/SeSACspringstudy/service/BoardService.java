package SeSAC.spring.study.SeSACspringstudy.service;

import java.util.*;

import SeSAC.spring.study.SeSACspringstudy.domain.Board;
import SeSAC.spring.study.SeSACspringstudy.repository.BoardRepository;
import SeSAC.spring.study.SeSACspringstudy.repository.MemoryRepository;

public class BoardService {
    private final BoardRepository memoryRepository = new MemoryRepository();

    public int write(Board board) {
        // 이름 중복 검사
        memoryRepository.save(board);
        return board.getID();
    }

    /* Optional */
    //Null 될 수 있는 객체를 감싸는 Wrapper 클래스, 객체를 감싸는 컨테이너
    // NullPointError 방지

    public Optional<Board> findOneById(int id) {
        return memoryRepository.findById(id);
    }

    public Optional<Board> findOneByName(String name) {
        return memoryRepository.findByName(name);
    }

    public List<Board> findBoards() {
        return memoryRepository.findAll();
    }
}
