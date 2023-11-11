import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Drawing from '../../components/template/drawing';
import CheckUsersInGameRoom from '../../components/layout/checkUsersInGameRoom';
import LeaveGameRoom from '../../components/layout/leaveGameRoom';
import { useRecoilState } from 'recoil';
import { chattingIdState } from '../../states/atom';

const GameRoom = () => {
  const { id } = useParams();
  const [chat, setChat] = useRecoilState(chattingIdState);

  useEffect(() => {
    if (id) {
      setChat(id.substring(1));
    }
  }, [id, setChat]);

  return (
    <>
      <LeaveGameRoom chatId={id?.substring(1)}></LeaveGameRoom>
      <div style={{ padding: 20, textAlign: 'center' }}>
        게임방{id}
        <Drawing />
        <CheckUsersInGameRoom chatId={id?.substring(1)}></CheckUsersInGameRoom>
      </div>
    </>
  );
};

export default GameRoom;
