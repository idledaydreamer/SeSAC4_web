package SeSAC.spring.study.SeSACspringstudy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import SeSAC.spring.study.SeSACspringstudy.domain.Board;

import java.util.Optional;

// extends JpaRepository<객체, PK타입>
public interface SD_BoardRepository extends JpaRepository<Board, Integer> {
    Optional<Board> findByName(String name);
}
