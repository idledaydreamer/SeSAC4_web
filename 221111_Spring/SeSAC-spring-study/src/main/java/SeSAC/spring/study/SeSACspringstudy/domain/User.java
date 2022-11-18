package SeSAC.spring.study.SeSACspringstudy.domain;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 30, unique = true)
    private String username;    // 로그인할 회원 아이디

    @Column(length = 100)
    private String password;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = false, length = 50, unique = true)
    private String email;

}
