package SeSAC.spring.study.SeSACspringstudy.repository;

import SeSAC.spring.study.SeSACspringstudy.domain.Board;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.*;
import java.util.*;

@Repository
@RequiredArgsConstructor
public class JPARepository implements BoardRepository {

    private final EntityManager em;

    @Override
    public Board save(Board board) {
        this.em.persist(board);
        return board;
    }

    @Override
    public Optional<Board> findById(int id) {
        return Optional.empty();
    }

    @Override
    public Optional<Board> findByName(String name) {
        return Optional.empty();
    }

    @Override
    public List<Board> findAll() {
        // Select * from board as b;
        return em.createQuery("select b from Board b", Board.class)
                .getResultList();   // List<Board>
    }
}

