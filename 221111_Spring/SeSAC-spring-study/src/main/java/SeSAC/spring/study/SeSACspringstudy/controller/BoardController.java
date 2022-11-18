package SeSAC.spring.study.SeSACspringstudy.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import SeSAC.spring.study.SeSACspringstudy.domain.Board;
import SeSAC.spring.study.SeSACspringstudy.dto.BoardDTO;
import SeSAC.spring.study.SeSACspringstudy.service.BoardService;
import SeSAC.spring.study.SeSACspringstudy.service.BoardService2;

import java.util.*;


@Controller
@RequiredArgsConstructor
public class BoardController {
    private static BoardService boardService = new BoardService();
    private final BoardService2 boardService2;


    /* BoardService */
    @GetMapping("board-write")
    public String getBoardWrite() {
        return "board-write";
    }

    @PostMapping("board-write")
    public String postBoardWrite(BoardDTO boardDTO) {
//        boardDTO = {name: d, content: d}
        Board board = new Board();      // 도메인 객체 생성
        board.setName(boardDTO.getName());
        board.setContent(boardDTO.getContent());

        // board = { name: d, content: d, ID: X }
        boardService.write(board);      // repository에 있는 map 에 전달받은 name, content로 board 저장

        return "redirect:/board-view";
    }

    @GetMapping("board-view")
    public String getBoardView(Model model) {
        List<Board> result = boardService.findBoards();
        model.addAttribute("list", result);
        return "board-view";
    }

    @PostMapping("board-search")
    @ResponseBody
    public Optional<Board> postBoardSearch(@RequestBody BoardDTO boardDTO) {
        return boardService.findOneByName(boardDTO.getName());  // return board;
    }


    /* BoardService2 */
    @GetMapping("board-write2")
    public String getBoardWrite2() {
        return "board-write2";
    }

    @PostMapping("board-write2")
    public String postBoardWrite2(BoardDTO boardDTO) {
        Board board = new Board();
        board.setName(boardDTO.getName());
        board.setContent(boardDTO.getContent());
        boardService2.write(board);

        return "redirect:/board-view2";
    }

    @GetMapping("board-view2")
    public String getBoardView2(Model model) {
        List<Board> result = boardService2.findBoards();
        model.addAttribute("list", result);
        return "board-view2";
    }

    @PostMapping("board-search2")
    @ResponseBody
    public Optional<Board> postBoardSearch2(@RequestBody BoardDTO boardDTO) {
        // return board;
        return boardService2.findOneByName(boardDTO.getName());
    }

}
