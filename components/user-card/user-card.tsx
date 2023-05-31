import React from 'react';
import styles from '@/components/user-card/user-card.module.scss';
import Button from  '../button/button';


type User = {
  id: number;
  name: string;
  photo: string;
  online: boolean;
  registration: string;
  age: number;
};

type UserCardProps = {
  user: User;
  isFirstUser: boolean;
};

const UserCard: React.FC<UserCardProps> = ({ user, isFirstUser }) => {
  return (
    <div className={`${styles.userCard} ${isFirstUser ? styles.firstUserCard : ''}`}>
      <div className={styles.imgWrapper}>
        <img src="/img/Ellipse 1.png" alt="User Photo" className={styles.userPhoto} />
      </div>
      <div className={styles.userAge}>{user.age} year</div>
      <div className={styles.userName}>{user.name}</div>
      <div className={styles.userStatus}>{user.online ? 'Online' : 'Offline'}</div>
      <div className={styles.wrapperButton}>
         <Button disabled={!user.online}>Chat</Button>
      </div>
      <div className={styles.userRegistration}>{user.registration}</div>
    </div>
  );
};

export default UserCard;
