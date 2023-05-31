import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Loader from '../components/loader/loader';
import Video from '../components/video/video';
import UserCard from '../components/user-card/user-card';
import ColumnNames from '../components/column-names/column-names';
import styles from '@/styles/main.module.scss';
import { fetchData } from './api/api';

type User = {
  id: number;
  name: string;
  photo: string;
  online: boolean;
  registration: string;
  age: number;
};

type Video = {
  embed: string;
  text: string;
  link: string;
};

type ApiResponse = {
  video: Video;
  users: User[];
};

type IndexPageProps = {
  video: Video;
  users: User[];
};

const IndexPage: React.FC<IndexPageProps> = ({ video, users }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const columnNames = ['photo', 'name', 'status', 'registration', 'age', 'action'];

  return (
    <div className={styles.container}>
      <Head>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
          body {
            font-family: 'Poppins', sans-serif;
          }
        `}</style>
      </Head>
      <header className={styles.header}></header>
      <main className={styles.main}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className={styles.videoWrapper}>
              {video && <Video embed={video.embed} text={video.text} link={video.link} />}
            </div>
            <h2 className={styles.title}>our users</h2>
            <div className={styles.userWrapper}>
              <ColumnNames columnNames={columnNames} />
              {users.map((user, index) => (
                <UserCard key={index} user={user} isFirstUser={index === 0} />
              ))}
            </div>
          </>
        )}
      </main>
      <footer className={styles.footer}>Footer content</footer>
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const data: ApiResponse = await fetchData();
    return {
      props: {
        video: data.video,
        users: data.users,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        video: null,
        users: [],
      },
    };
  }
};

export default IndexPage;
