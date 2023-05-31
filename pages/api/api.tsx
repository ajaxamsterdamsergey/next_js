export type User = {
  id: number;
  name: string;
  photo: string;
  online: boolean;
  registration: string;
  age: number;
};

export type Video = {
  embed: string;
  text: string;
  link: string;
};

export type ApiResponse = {
  video: Video;
  users: User[];
};

export const fetchData = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch('https://tz.smart-ui.pro/');
    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};
