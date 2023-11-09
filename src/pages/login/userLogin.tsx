import React, { useState } from 'react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  Link,
  Input,
  Button,
  Img,
  Switch,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { accessTokenState } from '../../states/atom';
import { postLogin } from '../../api/index';
import { io } from 'socket.io-client';
import { SERVER_ID, SERVER_URL } from '../../constant';
import { useRecoilState, useRecoilValue } from 'recoil';
import { onlineUserState } from '../../states/atom';

function UserLogin() {
  const navigate = useNavigate();
  const accessToken = useRecoilValue(accessTokenState);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const setAccessToken = useSetRecoilState(accessTokenState);
  const [onlineUsers, setOnlineUsers] = useRecoilState(onlineUserState);
  const [showAlert, setShowAlert] = useState(false);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await postLogin(id, password);
      const { accessToken, refreshToken } = res.data;
      setAccessToken(accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      alert('로그인에 성공했습니다.');
      const socket = io(`${SERVER_URL}/server`, {
        extraHeaders: {
          Authorization: `Bearer ${accessToken}`,
          serverId: SERVER_ID,
        },
      });
      socket.on('connect', () => {
        socket.emit('users-server');
      });
      socket.on('users-server-to-client', (data) => {
        setOnlineUsers(data);
      });

      socket.on('message-to-client', (messageObject) => {
        console.log(messageObject);
      });
      navigate('/lobby');
    } catch (e: any) {
      setShowAlert(true);
      // if (e.message === 'Request failed with status code 401') {
      //   alert('비밀번호를 일치하지않습니다.');
      // } else if (e.message === 'Request failed with status code 400') {
      //   alert('일치하는 아이디가 없습니다.');
      // } else {
      //   alert(`로그인에 실패했습니다. 오류코드: ${e.message}`);
      // }
    }
  };

  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      backgroundColor="#f8fafc"
      height={'100vh'}>
      <Img
        src="public/assets/fastMind.svg"
        position={'relative'}
        bottom={-140}
        alt="fastMind"
      />
      <Center
        marginBottom={200}
        backgroundColor={'white'}
        borderRadius={10}
        boxShadow="lg"
        flexDirection={'column'}
        minHeight={550}
        width={450}
        justifyContent={'flex-end'}>
        <form onSubmit={handleLoginSubmit}>
          <FormControl>
            <FormLabel marginLeft={7}>아이디</FormLabel>
            <Input
              placeholder="아이디를 입력해주세요"
              _placeholder={{ fontSize: 'sm' }}
              borderColor="gray.400"
              autoComplete="on"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              marginBottom={5}
              marginLeft={7}
              width={250}
            />
          </FormControl>
          <FormControl>
            <FormLabel marginLeft={7}>비밀번호</FormLabel>
            <Input
              placeholder="비밀번호를 입력해주세요"
              _placeholder={{ fontSize: 'sm' }}
              borderColor="gray.400"
              autoComplete="current-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              marginBottom={7}
              marginLeft={7}
              width={250}
            />
          </FormControl>
          <FormControl
            marginLeft={7}
            display="flex"
            alignItems="center"
            marginBottom={7}>
            <Switch id="email-alerts" marginRight={3} colorScheme="teal" />
            <FormLabel htmlFor="email-alerts" mb="0">
              계정 정보 기억하기
            </FormLabel>
          </FormControl>
          <Button
            width={300}
            height={50}
            type="submit"
            colorScheme="teal"
            size="lg"
            isDisabled={!id || !password}>
            로그인
          </Button>
        </form>

        <Flex justifyContent={'center'} gap="10px" padding="10">
          회원이 아니신가요?
          <Link
            as={ReactRouterLink}
            to="/join"
            marginRight={2}
            color="teal.500"
            fontWeight={700}>
            회원가입
          </Link>
        </Flex>
      </Center>
      {showAlert && (
        <Alert status="error" marginBottom={4}>
          <AlertIcon />
          <AlertTitle mr={2}>로그인 실패!</AlertTitle>
          <AlertDescription>
            아이디 혹은 비밀번호를 확인해주세요.
          </AlertDescription>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={() => setShowAlert(false)}
          />
        </Alert>
      )}
    </Flex>
  );
}

export default UserLogin;
