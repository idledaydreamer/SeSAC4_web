package SeSAC.spring.study.SeSACspringstudy.service;


import SeSAC.spring.study.SeSACspringstudy.domain.Board;
import SeSAC.spring.study.SeSACspringstudy.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import javax.transaction.Transactional;

import SeSAC.spring.study.SeSACspringstudy.domain.User;
import SeSAC.spring.study.SeSACspringstudy.repository.UserRepository;


@RequiredArgsConstructor
@Service
@Transactional
public class UserService {
    private final UserRepository userRepository;

    public Long signup(User user) {
        userRepository.save(user);
        return user.getId();
    }

    public User findUser(String username, String password) {
        if (findOneById(username) == findOneByPW(password)) {
            return findOneByPW(password);
        } else

    }

    public Optional<User> findOneById(String username) {
        return userRepository.findByUsername(username);
    }

    public Optional<User> findOneByPW(String password) {
        return userRepository.findByPassword(password);
    }

    public Optional<User> findOneByName(String nickname) {
        return userRepository.findByNickname(nickname);
    }

    public Optional<User> findOneByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public List<User> findUsers() {
        return userRepository.findAll();
    }
}
