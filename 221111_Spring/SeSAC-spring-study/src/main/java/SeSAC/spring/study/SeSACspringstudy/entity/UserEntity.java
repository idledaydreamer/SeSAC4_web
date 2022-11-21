package SeSAC.spring.study.SeSACspringstudy.entity;

import SeSAC.spring.study.SeSACspringstudy.dto.UserDTO;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity         // Entity Class : 일종의 테이블
@Table(name = "user")
public class UserEntity {
    @Id         // PK 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY)     // auto_increment
    private Long id;

    @Column(unique = true)  // unique 제약조건 추가
    private String email;

    @Column
    private String password;

    @Column
    private String username;


    // dto -> entity
    public static UserEntity toUserEntity(UserDTO userDTO) {
        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(userDTO.getEmail());
        userEntity.setPassword(userDTO.getPassword());
        userEntity.setUsername(userDTO.getUsername());
        return userEntity;
    }
    
    public static UserEntity toUpdateUserEntity(UserDTO userDTO) {
        UserEntity userEntity = new UserEntity();
        userEntity.setId(userDTO.getId());      // id 값도 넘어오기 때문에 세팅
        userEntity.setEmail(userDTO.getEmail());
        userEntity.setPassword(userDTO.getPassword());
        userEntity.setUsername(userDTO.getUsername());
        return userEntity;
    }
}
