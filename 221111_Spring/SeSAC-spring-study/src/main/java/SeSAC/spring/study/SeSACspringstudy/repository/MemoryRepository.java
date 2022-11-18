package SeSAC.spring.study.SeSACspringstudy.repository;

import SeSAC.spring.study.SeSACspringstudy.domain.Board;

import java.util.*;


public class MemoryRepository implements BoardRepository {// 구현체 짜기

    // Board 객체가 들어오는 맵 선언 & 초기화
    private static final Map<Integer, Board> store = new HashMap<>();   // HashMap 구현체
    private static int id = 0;


    @Override
    public Board save(Board board) {
        // board = { name: d, content: d, ID: X }
        board.setID(++id);  // Autoincrement 직접 구현
        // board = { name: d, content: d, ID: 1 }
        store.put(board.getID(), board);     // (key: board id, value: board 객체 그 자체)
        return board;
    }

    /* Optional */
    //Null 될 수 있는 객체를 감싸는 Wrapper 클래스, 객체를 감싸는 컨테이너
    // NullPointError 방지
    @Override
    public Optional<Board> findById(int id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public Optional<Board> findByName(String name) {
        return store.values().stream()  // store에서 board 객체들 하나씩 검색
                .filter(board -> board.getName().equals(name))  // board name 같은 객체
                .findAny();     // stream에서 가장 먼저 탐색되는 요소를 Optional로 감싸서 return
    }

    @Override
    public List<Board> findAll() {
        // Map(store) 에서 value 값들을 모두 찾고 ArrayList 로 생성
        return new ArrayList<>(store.values()); // ArrayList<Board>
    }
}
