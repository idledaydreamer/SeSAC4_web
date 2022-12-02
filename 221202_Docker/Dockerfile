## mysql-sesac
# 부모 이미지 지정
# FROM mysql
# 환경변수
# ENV MYSQL_ROOT_PASSWORD=1234
# 사용포트
# EXPOSE 3309

## node-project
# 부모 이미지 지정
FROM node:alpine
# 작업 디렉토리 생성
WORKDIR /app
# 소스 추가 (현재 위치 소스를 컨테이너의 /app에 추가하겠다)
COPY . /app
# 패키지 설치 (컨테이너 생성시 실행되는 명령어)
RUN npm install
# 포트 매핑
EXPOSE 8000
# 실행 명령 (컨테이너 생성&실행시 명령어)
CMD [ "node", "index.js" ]
