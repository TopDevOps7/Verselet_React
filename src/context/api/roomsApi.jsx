import instance from "../axios";

const roomsApi = {
  // Create Room with roomType=public/private roomCount=0-5 difficultyLevel=easy,medium,hard
  createRoom: ({ token, roomCount, roomType, difficultyLevel }) => {
    return instance.post(
      `api/rooms/create`,
      { roomCount, roomType, difficultyLevel },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

//   Room id to be passed as a query
  joinRoom: ({ token, roomId }) => {
    return instance.get(`api/rooms/join?roomId${roomId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

//   Room id to be passed as query
leaveRoom: ({ token, roomId }) => {
    return instance.get(`api/rooms/leave?roomId${roomId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

//   This will return the data about room. Room id is optional if room id is not provided it will check which room the user is in
getMyRoomData: ({ token, roomId }) => {
    return instance.get(`api/rooms/me?roomId${roomId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getRoomDataList: ({token}) => {
    return instance.get(`api/rooms/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  }

};


export default roomsApi;