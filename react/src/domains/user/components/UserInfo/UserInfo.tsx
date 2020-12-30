import React from 'react';

import * as T from './UserInfo.types';
import * as S from './UserInfo.styles';

function UserInfo(props: T.UserInfoProps) {
  const { user } = props;

  if (!user) {
    return null;
  }

  return (
    <div>
      <S.Avatar src={user.avatar_url} alt="avatar" />
      <S.Name>{user.name}</S.Name>
      <S.Text>{user.login}</S.Text>
      <S.Text>{user.bio}</S.Text>
      <S.Text>
        {user.location} / since {new Date(user.created_at).toDateString()}
      </S.Text>
    </div>
  );
}

export default UserInfo;
