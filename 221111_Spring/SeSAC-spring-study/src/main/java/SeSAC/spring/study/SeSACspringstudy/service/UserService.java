package SeSAC.spring.study.SeSACspringstudy.service;

import SeSAC.spring.study.SeSACspringstudy.dto.UserDTO;
import SeSAC.spring.study.SeSACspringstudy.entity.UserEntity;
import SeSAC.spring.study.SeSACspringstudy.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service                    // 스프링 빈 등록
@RequiredArgsConstructor    // userRepository 필드를 매개변수로 하는 생성자 자동생성
public class UserService {
    // 생성자 주입
    private final UserRepository userRepository;

    public void save(UserDTO userDTO) {
        // repository.save() 호출 (조건: entity 객체를 넘겨줘야 함)
        // 1. dto -> entity 객체로 변환
        // 2. repository 의 save 메서드 호출

        UserEntity userEntity = UserEntity.toUserEntity(userDTO);
        userRepository.save(userEntity);    // JPA 제공 메서드
    }

    public UserDTO login(UserDTO userDTO) {
        /*
            1. 회원이 입력한 이메일로 DB에서 조회
            2. DB 조회한 비밀번호와 사용자가 입력한 비밀번호 일치하는지 판단
         */
        Optional<UserEntity> byEmail = userRepository.findByEmail(userDTO.getEmail());
        if (byEmail.isPresent()) {
            // 조회 결과 존재 (해당 이메일 가진 회원 정보 있음)
            UserEntity userEntity = byEmail.get();      // Optional객체.get() : 그 속의 객체(Entity 객체) 리턴
            if (userEntity.getPassword().equals(userDTO.getPassword())) {
                // 비밀번호 일치
                return UserDTO.toUserDTO(userEntity);   // entity -> dto 1:1 변환
            } else {
                // 비밀번호 불일치 (로그인 실패)
                return null;
            }
        } else {
            // 조회 결과 없음
            return null;
        }


    }

    public List<UserDTO> findAll() {
        List<UserEntity> userEntityList = userRepository.findAll();

        // List : entity -> dto 여러 개 변환
        List<UserDTO> userDTOList = new ArrayList<>();
        for (UserEntity userEntity : userEntityList) {    // for-each 문법
//            UserDTO userDTO = UserDTO.toUserDTO(userEntity);
//            userDTOList.add(userDTO);
            userDTOList.add(UserDTO.toUserDTO(userEntity));
        }
        return userDTOList;
    }

    public UserDTO findById(Long id) {

        // Optional : entity -> dto 1:1 변환
        Optional<UserEntity> optionalUserEntity = userRepository.findById(id);

//        return optionalUserEntity.map(UserDTO::toUserDTO).orElse(null);
        if (optionalUserEntity.isPresent()) {
//            UserEntity userEntity = optionalUserEntity.get();
//            UserDTO userDTO = UserDTO.toUserDTO(userEntity);
//            return userDTO;
            return UserDTO.toUserDTO(optionalUserEntity.get());
        } else {
            return null;
        }
    }


    public UserDTO updateForm(String myEmail) {
        Optional<UserEntity> optionalUserEntity = userRepository.findByEmail(myEmail);
        return optionalUserEntity.map(UserDTO::toUserDTO).orElse(null);
    }

    public void update(UserDTO userDTO) {
        // save() => insert / update
        userRepository.save(UserEntity.toUpdateUserEntity(userDTO));
    }

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
//    public Optional<User> findOneByEmail(String email) {
//        return userRepository.findByEmail(email);
//    }
//
//    public Optional<User> findOneByPW(String password) {
//        return userRepository.findByPassword(password);
//    }
//    public List<User> findUsers() {
//        return userRepository.findAll();
//    }

}
