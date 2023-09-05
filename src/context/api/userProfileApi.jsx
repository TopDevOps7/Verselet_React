import instance from "../axios";

const userProfileApi = {
    // To Get A Particular User's Data containing username, organization, twitter, instagram, github, dateOfBirth, profilePic, wins, games, link, run, event, isFriend, isOutgoing, isIncoming, friends
    getProfileData: ({token, username}) => {
        return instance.get(`api/profile/view?username=${username}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    },
    // To create a profile
    createProfile: ({token, organization, twitter, instagram, github, dateOfBirth}) => {
        return instance.post("api/profile/create", { organization, twitter, instagram, github, dateOfBirth }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    },
    // To send a friend request
    sendFriendRequest: ({token, friend}) => {
        return instance.get(`api/profile/friends/send?friend=${friend}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    },
    // To accept a friend request
    acceptFriendRequest: ({token, friend}) => {
        return instance.get(`api/profile/friends/accept?friend=${friend}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    },
    // To reject a friend request
    rejectFriendRequest: ({token, friend}) => {
        return instance.get(`api/profile/friends/reject?friend=${friend}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    },
    // To upload a profile picture
    uploadProfilePic: ({token, profilePic}) => {
        // profilePic is a file and should be send as multipart/form-data
        // Convert the profilePic to a form data
        const formData = new FormData();
        formData.append("profilePicture", profilePic);
        return instance.post("api/profile/upload-profile-pic", formData, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });
    },
};

export default userProfileApi;