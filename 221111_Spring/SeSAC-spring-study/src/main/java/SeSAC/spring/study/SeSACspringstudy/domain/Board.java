package SeSAC.spring.study.SeSACspringstudy.domain;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "board")
public class Board {
    @Id
    @GeneratedValue     // AutoIncrement
    private int ID;

    @Column(length = 20, nullable = false)  // @Column(name=userName)
    private String name;        // name varchar(20) not null
    @Column
    private String content;     // content varchar(255)
}
