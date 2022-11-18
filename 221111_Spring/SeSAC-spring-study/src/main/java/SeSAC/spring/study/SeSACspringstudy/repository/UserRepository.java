package SeSAC.spring.study.SeSACspringstudy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import SeSAC.spring.study.SeSACspringstudy.domain.User;
import org.springframework.data.jpa.repository.Query;

import java.util.*;

public interface UserRepository extends JpaRepository<User, Long> {
   
    Optional<User> findByUsername(String username);

    Optional<User> findByPassword(String password);

    Optional<User> findByNickname(String nickname);

    Optional<User> findByEmail(String email);

    List<User> findAll();
}
