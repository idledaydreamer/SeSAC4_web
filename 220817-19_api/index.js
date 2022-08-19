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


app.get("/test", async function (req, res) {
    try {
        var { nx, ny } = req.query;
        Number(nx); Number(ny);

        function reqURL(nx, ny) {
            var today = new Date();
            var yyyy = today.getFullYear();
            var mm = today.getMonth() + 1;
            var dd = today.getDate();
            var hours = today.getHours();
            var minutes = today.getMinutes();

            //basetime: 0200, 0500, 0800, 1100, 1400, 1700, 2000, 2300
            if (hours < 2 || (hours == 2 && minutes < 10)) {    //새벽2시 이전은 전날로 계산
                today.setDate(today.getDate() - 1);
                yyyy = today.getFullYear();
                mm = today.getMonth() + 1;
                dd = today.getDate();
                hours = 23;
            } else if (hours < 5 || (hours == 5 && minutes < 10)) {
                hours = 2;
            } else if (hours < 8 || (hours == 8 && minutes < 10)) {
                hours = 5;
            } else if (hours < 11 || (hours == 11 && minutes < 10)) {
                hours = 8;
            } else if (hours < 14 || (hours == 14 && minutes < 10)) {
                hours = 11;
            } else if (hours < 17 || (hours == 17 && minutes < 10)) {
                hours = 14;
            } else if (hours < 20 || (hours == 20 && minutes < 10)) {
                hours = 17;
            } else if (hours < 23 || (hours == 23 && minutes < 10)) {
                hours = 20;
            } else { hours = 23; }

            if (mm < 10) { mm = '0' + mm }
            if (dd < 10) { dd = '0' + dd }
            if (hours < 10) { hours = '0' + hours }


            var serviceKey = "Su%2FjD4AQWu0vPPnQkcm0dVbiPxWqLgUu6AN6Snk4oK0JGGr38kehRNwGQtPIWP9iZ7BzO%2FQccEWTlb5yAxsUPw%3D%3D",
                numOfRows = 12,
                base_date = yyyy + "" + mm + "" + dd,
                base_time = hours + "00",
                _nx = nx, _ny = ny;
            let requrl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";
            requrl += "?serviceKey=" + serviceKey;
            requrl += "&pageNo=1&numOfRows=" + numOfRows;
            requrl += "&dataType=JSON";
            requrl += "&base_date=" + base_date;
            requrl += "&base_time=" + base_time;
            requrl += "&nx=" + _nx + "&ny=" + _ny;

            return requrl;
        }

        var reqMSG = await reqURL(nx, ny);
        console.log(reqMSG);

        await axios({
            method: "get",
            url: reqMSG,
        }).then((result) => {
            return result.data.response.body;
        }).then((data) => {
            console.log(data.items);
            res.json(data.items);
        })
    } catch (error) {
        if (error.response) {
            //요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        else if (error.request) {
            //요청이 이루어 졌으나 응답을 받지 못했습니다.
            //`error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는 Node.js의 http.ClientRequest 인스턴스입니다.
            console.log(error.request);
        }
        else {
            //오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
            console.log('Error', error.message);
        }
        console.log(error.config);
    };
})

app.listen(port, () => {
    console.log("Server Port : ", port);
})


 // await axios({
    //     method: "get",
    //     url: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=Su%2FjD4AQWu0vPPnQkcm0dVbiPxWqLgUu6AN6Snk4oK0JGGr38kehRNwGQtPIWP9iZ7BzO%2FQccEWTlb5yAxsUPw%3D%3D&numOfRows=10&pageNo=2&dataType=JSON&base_date=20220818&base_time=2000&nx=55&ny=127"
    // }).then((result) => {
    //     return result.data;
    // }).then((data) => {
    //     // console.log(data);
    //     console.log(data.response.body.items);
    //     // console.log("items - item : ", data.items.item);

    //     let item = data.response.body.items;
    //     res.json(item);
    // })
