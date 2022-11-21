package SeSAC.spring.study.SeSACspringstudy.dto;

import SeSAC.spring.study.SeSACspringstudy.entity.UserEntity;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor      // 기본생성자 자동생성
@AllArgsConstructor     // 모든 필드를 매개변수로 하는 생성자 자동생성
@ToString               // DTO 객체의 필드값 출력시 ToString() 메서드 자동생성
public class UserDTO {
    private Long id;
    private String email;
    private String password;
    private String username;


    // entity -> dto
    public static UserDTO toUserDTO(UserEntity userEntity) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(userEntity.getId());
        userDTO.setEmail(userEntity.getEmail());
        userDTO.setPassword(userEntity.getPassword());
        userDTO.setUsername(userEntity.getUsername());
        return userDTO;
    }
}


