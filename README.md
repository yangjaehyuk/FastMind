<div align="center">

<img src="https://github.com/LeHiHo/FastMind/assets/37584686/6e7fe4ca-ff6d-4a4d-b572-20e799a8c2c7" width=300>

### 패스트캠퍼스 토이프로젝트2 한조팀의 FastMind 게임 💻 프론트엔드

<p align="center">
  <a href="https://fastmind.vercel.app/">
    <img src="https://img.shields.io/badge/FastMind-white?style=for-the-badge&logoColor=white" alt="wiki"/>
  </a>
</p>

</div>

<br/>

## 📝 프로젝트 소개

`FastMind`는 창의적이고 상호작용이 풍부한 웹 애플리케이션입니다. 이 프로젝트는 그림판과 게임, 채팅 기능을 통합하여 아래 두 가지 주요 방식으로 사용됩니다.  

1. 게임 모드: 사용자 중 한 명이 출제자가 되어, 퀴즈를 내고 관련된 그림을 그립니다. 그 후, 다른 참여자들이 그림을 바탕으로 퀴즈의 답을 맞추는 대화형 웹 게임입니다.
2. **협업 모드**: 사용자들은 그림판에 직접 그림을 그리며, 실시간으로 공유하고 채팅을 통해 아이디어를 교환합니다. 이 모드는 회의, 브레인스토밍, 또는 일반 대화에 이상적으로 활용됩니다.

게임 서버는 [이곳](https://github.com/seacrab808/Fastmind-server)을 클릭해 주세요.  
채팅 서버는 [이곳](https://github.com/GyoHeon/chat-back)을 클릭해 주세요.  
피그마는 [이곳](https://www.figma.com/file/Hqwygf0k7CoF0BloFTn729/%ED%95%9C%EC%A1%B0?type=design&node-id=0-1&mode=design&t=yNhmQ8W65uAUDQvI-0)을 클릭해 주세요.

<br/>

## 🛠️ 기술 스택

### FrontEnd  

#### Language
<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"> 

#### Development

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white) 
![Recoil](https://img.shields.io/badge/Recoil-007af4.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FscXVlXzEiIGRhdGEtbmFtZT0iQ2FscXVlIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1NS4yMSA2MjMuOTEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp3aGl0ZX08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im03NC42MiAyNzcuNDYgMS4yNC0uMTMgMzQuNzgtMy4yOC01My40Ny01OC42NkE5Ni40NyA5Ni40NyAwIDAgMSAzMiAxNTAuM0gzYTEyNS4zIDEyNS4zIDAgMCAwIDMyLjggODQuNTdaTTE3Ny4xMyAzNDdsLTM2IDMuNCA1My4zMiA1OC41MUE5Ni40MSA5Ni40MSAwIDAgMSAyMTkuNjMgNDc0aDI4LjkyYTEyNS4yOCAxMjUuMjggMCAwIDAtMzIuNzYtODQuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjUzLjY5IDIzMS42OGMtNi4zMy0zMS4zLTMwLjg5LTU0LjA5LTYyLjU3LTU4LjA3bC02LjM1LS43OWE0OS42MSA0OS42MSAwIDAgMS00My4zNS00OS4xM3YtMjBhNTIuNzUgNTIuNzUgMCAxIDAtMjguOTEtLjM2djIwLjM4YTc4LjU2IDc4LjU2IDAgMCAwIDY4LjY1IDc3LjgybDYuMzYuOGMyMy4yNCAyLjkyIDM0Ljc4IDIwIDM3LjgzIDM1LjFzLS45MyAzNS4zMi0yMS4yMiA0N2E3My44MSA3My44MSAwIDAgMS0zMC4wNiA5LjYybC05NS42NiA5YTEwMi40NSAxMDIuNDUgMCAwIDAtNDEuOCAxMy4zOEM5IDMzMi40NS00LjgxIDM2MyAxLjUyIDM5NC4yOXMzMC44OSA1NC4wOCA2Mi41NyA1OC4wNmw2LjM1LjhhNDkuNiA0OS42IDAgMCAxIDQzLjM1IDQ5LjEydjE4YTUyLjc1IDUyLjc1IDAgMSAwIDI4LjkxLjI2di0xOC4yNmE3OC41NSA3OC41NSAwIDAgMC02OC42NS03Ny44MWwtNi4zNi0uOGMtMjMuMjQtMi45Mi0zNC43OC0yMC4wNS0zNy44My0zNS4xMXMuOTMtMzUuMzIgMjEuMjItNDdhNzMuNjggNzMuNjggMCAwIDEgMzAuMDYtOS42M2w5NS42Ni05YTEwMi40NSAxMDIuNDUgMCAwIDAgNDEuOC0xMy4zOGMyNy42NS0xNi4wMiA0MS40LTQ2LjU0IDM1LjA5LTc3Ljg2WiIvPjwvc3ZnPg==&logoColor=white) 
![StyledComponents](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 
![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)


#### CI/CD
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

#### Design
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

<br>

### Chatting BackEnd

#### Language
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

#### Framework
![Express](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)


#### DB
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

#### Infra
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![Mongoose](https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=Mongoose&logoColor=white)

#### CI/CD
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) 
![Amazon EC2](https://img.shields.io/badge/Amazon%20EC2-FF9900.svg?style=for-the-badge&logo=Amazon-EC2&logoColor=white)

<br>

### Game BackEnd

#### Language
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

#### Framework
![Express](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)

#### Infra
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

#### CI/CD
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

<br/>

## 📚 주요 기능
<div align="center">
  <table>
    <tr align="center">
      <th>채팅/그림</th>
      <th>채팅/게임</th>
    </tr>
    <tr>      
      <td><img src="https://github.com/LeHiHo/FastMind/assets/134940630/589887ff-4530-484e-870e-29df2ec11271" alt="chatting/painting" width="370"></td>
      <td><img src="https://github.com/LeHiHo/FastMind/assets/134940630/98f4aa75-d96f-453d-8c3d-c51f26c1a129"alt="chatting/game" width="370"></td>      
    </tr>      
    <tr align="center">
      <th>1대1채팅</th>
      <th>리다이렉션</th>
    </tr>
    <tr>
      <td><img src="https://github.com/LeHiHo/FastMind/assets/134940630/f29dc190-4b3a-495e-be88-fa98cee49df9" alt="1:1chatting" width="370"></td>      
      <td><img src= "https://github.com/LeHiHo/FastMind/assets/134940630/d1babdca-960f-41e5-9588-9cc29ebbdd4e"alt="
redirection" width="370"></td>      
    </tr>
  </table>
</div>

<br>


## 🖌️ 프로젝트 아키텍처

<div align="center">
  
<img src="https://github.com/LeHiHo/FastMind/assets/37584686/1198325a-aefd-4749-a578-2f75e2ee2f18" />


</div>

<br/>

## 📂 폴더 구조
```
  📦src
 ┣ 📂api
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜socket.ts
 ┣ 📂components
 ┃ ┣ 📂layout
 ┃ ┗ 📂template
 ┃ ┃ ┣ 📂lobby
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┗ 📂room
 ┣ 📂hooks
 ┃ ┣ 📜useChatSocket.ts
 ┃ ┣ 📜useLoginSocket.ts
 ┃ ┗ 📜useleaveHandle.ts
 ┣ 📂interfaces
 ┣ 📂pages
 ┃ ┣ 📂lobby
 ┃ ┃ ┗ 📜gameLobby.tsx
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📜userJoin.tsx
 ┃ ┃ ┗ 📜userLogin.tsx
 ┃ ┗ 📂room
 ┃ ┃ ┗ 📜gameRoom.tsx
 ┣ 📂router
 ┃ ┗ 📜MainRouter.tsx
 ┣ 📂states
 ┃ ┗ 📜atom.ts
 ┣ 📂util
 ┣ 📜App.tsx
 ┣ 📜constant.ts
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

<br/>

## 🧑🏻‍💻 팀 소개 및 역할
| 장호진 (FE & BE)  <br> 팀장 | 양재혁 (FE & BE) <br> 팀원 | 신하연 (FE) <br> 팀원 | 소유나 (FE & BE)  <br> 팀원 | 이교헌 멘토님 (BE) <br> 멘토님|
|:---------------------:|:-----------------------:|:---------------------:|:-----------------------:|:---------------------:|
| <img height="100" src="https://avatars.githubusercontent.com/leHiHo" width="100"/> | <img height="100" src="https://avatars.githubusercontent.com/yangjaehyuk" width="100"/> | <img height="100" src="https://avatars.githubusercontent.com/gkdus2217" width="100"/> | <img height="100" src="https://avatars.githubusercontent.com/seacrab808" width="100"/> | <img height="100" src="https://avatars.githubusercontent.com/GyoHeon" width="100"/> |
| [leHiHo](https://github.com/leHiHo) | [yangjaehyuk](https://github.com/yangjaehyuk) | [gkdus2217](https://github.com/gkdus2217) | [seacrab808](https://github.com/seacrab808) | [GyoHeon](https://github.com/GyoHeon) |
|<ul><li>인증ㆍ인가</li><li>로그인</li><li>리다이렉션</li><li>게임 로직</li><li>게임 소켓</li><li>배포</li></ul> | <ul><li>REST API</li><li>로비 소켓</li><li>게임 로직</li><li>게임 소켓</li><li>게임방 유저 목록</li><li>방 만들기</li><li>폴링 로직</li><li>온라인 유저 목록</li></ul> | <ul><li>채팅 소켓</li><li>1대1 채팅</li><li>게임방 채팅</li><li>검색 기능</li><li>페이지네이션</li><li>로비 및 헤더 UI</li><li>방 목록 정렬</li><li>피그마 UI 제작</li></ul> | <ul><li>그림판 구현</li><li>그림판 소켓</li><li>게임 서버</li><li>게임방 UI</li></ul>  | <ul><li>로비 서버</li><li>채팅 서버</li></ul> |

<br/>

## 📆 기간
  `2023.11.06 ~ 2023.11.17`
