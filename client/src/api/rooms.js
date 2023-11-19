import axiosSecure from "."
//get all rooms from db
export const getAllRooms = async () => {
    const { data } = await axiosSecure('/rooms')
    return data
}

//get all rooms for host
export const getHostRooms = async (email) => {
    const { data } = await axiosSecure(`/rooms/${email}`)
    return data
}

//get single rooms data.
export const getRoom = async (id) => {
    const { data } = await axiosSecure(`/room/${id}`)
    return data
}

//save room details in db
export const addRoom = async (room) => {
    const { data } = await axiosSecure.post('/rooms', room);
    return data;
}
