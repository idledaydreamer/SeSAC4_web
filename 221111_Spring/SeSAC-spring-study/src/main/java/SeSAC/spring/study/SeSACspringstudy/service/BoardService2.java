package SeSAC.spring.study.SeSACspringstudy.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import javax.transaction.Transactional;

import SeSAC.spring.study.SeSACspringstudy.domain.Board;
import SeSAC.spring.study.SeSACspringstudy.repository.BoardRepository;
import SeSAC.spring.study.SeSACspringstudy.repository.JPARepository;
import SeSAC.spring.study.SeSACspringstudy.repository.SD_BoardRepository;


@Service
@RequiredArgsConstructor
@Transactional
public class BoardService2 {
    private final SD_BoardRepository boardRepository;
//    boardRepository = new MemoryRepository;
//    boardRepository = new JPARepository;

    public int write(Board board) {
        // 이름 중복 검사
        boardRepository.save(board);
        return board.getID();
    }

    public Optional<Board> findOneById(int id) {
        return boardRepository.findById(id);
    }

    public Optional<Board> findOneByName(String name) {
        return boardRepository.findByName(name);
    }

    public List<Board> findBoards() {
        return boardRepository.findAll();
    }
}
