package SeSAC.spring.study.SeSACspringstudy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import SeSAC.spring.study.SeSACspringstudy.entity.UserEntity;

import java.util.Optional;

// Spring Data JPA : DB 테이블을 자바 객체처럼 활용할 수 있도록
// Repository : DB에 반드시 Entity 객체로 넘겨주기
// extends JpaRepository< 엔티티클래스명,PK타입>

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    /* 추가 메서드는 추상 메서드로 정의 */

    // @Optional : Null 방지를 위한 Wrapper 클래스
    // 이메일로 회원 정보 조회
    Optional<UserEntity> findByEmail(String email);
}


//    Optional<User> findByEmail(String email);
//
//    Optional<User> findByUsername(String username);
//
//    Optional<User> findByPassword(String password);
//
//    List<User> findAll();


