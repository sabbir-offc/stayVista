import axiosSecure from '.';

//save user data in database.
export const saveUser = async (user) => {

    const currentUser = {
        email: user?.email,
        role: 'guest',
        status: 'Verified'
    }
    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data
};


//get token from server.
export const getToken = async (email) => {
    const { data } = await axiosSecure.post('/jwt', { email });
    console.log('token recieved----->', data)
    return data
}

//Clear token from cookie.
export const clearCookie = async () => {
    const { data } = await axiosSecure.get('/logout');
    console.log(data)
    return data
}

//get user role.
export const getRole = async (email) => {
    const { data } = await axiosSecure(`/user/${email}`);
    return data;
}