const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const axios = require("axios")
const cors = require("cors");
const { request } = require("express");

app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.render("test");
})


app.get("/test", function (req, res) {

    var { nx, ny } = req.query;
    Number(nx); Number(ny);

    // CurrentWth(nx, ny);
    // async function CurrentWth(nx, ny) {
    //     try {
    //         var today = new Date();
    //         var yyyy = today.getFullYear();
    //         var mm = today.getMonth() + 1;
    //         var dd = today.getDate();
    //         var hours = today.getHours();
    //         var minutes = today.getMinutes();

    //         if (minutes < 30) {
    //             // 30분보다 작으면 한시간 전 값
    //             hours = hours - 1;
    //             if (hours < 0) {
    //                 // 자정 이전은 전날로 계산
    //                 today.setDate(today.getDate() - 1);
    //                 yyyy = today.getFullYear();
    //                 mm = today.getMonth() + 1;
    //                 dd = today.getDate();
    //                 hours = 23;
    //             }
    //         }
    //         if (mm < 10) { mm = '0' + mm }
    //         if (dd < 10) { dd = '0' + dd }
    //         if (hours < 10) { hours = '0' + hours }

    //         var _nx = nx,
    //             _ny = ny,
    //             serviceKey = "Su%2FjD4AQWu0vPPnQkcm0dVbiPxWqLgUu6AN6Snk4oK0JGGr38kehRNwGQtPIWP9iZ7BzO%2FQccEWTlb5yAxsUPw%3D%3D",
    //             base_date = yyyy + "" + mm + "" + dd,
    //             base_time = hours + "00";
    //         let requestName = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0";
    //         requestName += "?ServiceKey=" + serviceKey;
    //         requestName += "&pageNo=1&numOfRows=5";
    //         requestName += "&datatype=JSON";
    //         requestName += "&base_date=" + base_date;
    //         requestName += "&base_time=" + base_time;
    //         requestName += "&nx=" + _nx + "&ny=" + _ny;

    //         await axios({
    //             method: "get",
    //             url: requestName,
    //         }).then((result) => {
    //             return result.data.response.body;
    //         }).then((data) => {
    //             console.log("data : ", data);
    //             res.send(data);
    //         })
    //     } catch (error) {
    //         if (error.response) {
    //             // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
    //             console.log(error.response.data);
    //             console.log(error.response.status);
    //             console.log(error.response.headers);
    //         }
    //         else if (error.request) {
    //             // 요청이 이루어 졌으나 응답을 받지 못했습니다.
    //             // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
    //             // Node.js의 http.ClientRequest 인스턴스입니다.
    //             console.log(error.request);
    //         }
    //         else {
    //             // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
    //             console.log('Error', error.message);
    //         }
    //         console.log(error.config);
    //     };
    // }
    // //     // let items = data.items.item;
    // //     // for (let i = 0; i < items.length; i++) {
    // //     //     console.log(items[1]);
    // //     // }
    // //     // res.json(data);
    // // });

    // // $.ajax({
    // //     url: fileName,
    // //     // dataType: "jsonp",
    // //     type: 'GET',
    // //     cache: false,
    // //     success: function (data) {
    // //         var myXML = rplLine(data.responseText);
    // //         var indexS = myXML.indexOf(" "),
    // //             indexE = myXML.indexOf(" "),
    // //             result = myXML.substring(indexS + 3, indexE);
    // //         var jsonObj = $.parseJSON('[' + result + ']'),
    // //             rainsnow = jsonObj[0].response.body.items.item[0].obsrValue,
    // //             sky = jsonObj[0].response.body.items.item[4].obsrValue,
    // //             temp = jsonObj[0].response.body.items.item[5].obsrValue;
    // //         var contentText = document.getElementById('content');
    // //         contentText.innerHTML = sky + " / " + rainsnow + " / " + temp;
    // //     },
    // //     error: function (request, status, error) {
    // //         alert("다시 시도해주세요.\n" + "code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
    // //     }
    // // });
    // function rplLine(value) {
    //     if (value != null && value != "") {
    //         return value.replace(/\n/g, "\\n");
    //     } else {
    //         return value;
    //     }
    // }

    axios({
        method: "get",
        url: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=Su%2FjD4AQWu0vPPnQkcm0dVbiPxWqLgUu6AN6Snk4oK0JGGr38kehRNwGQtPIWP9iZ7BzO%2FQccEWTlb5yAxsUPw%3D%3D&numOfRows=10&pageNo=1&base_date=20220817&base_time=0600&nx=55&ny=127"
    }).then((result) => {
        return result.data.response.body;
    }).then((data) => {
        console.log("data : ", data);
        console.log("items : ", data.items);
        console.log("items - item : ", data.items.item);

        let items = data.items.item;
        for (let i = 0; i < items.length; i++) {
            console.log(items[1]);
        }
        res.send(true);
    });
})

app.listen(port, () => {
    console.log("Server Port : ", port);
})
