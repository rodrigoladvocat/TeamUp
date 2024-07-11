import axios from "axios";

export async function getCollaboratorsById(id: string, token: string) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${id}`,
      { headers: { 'jwt': token } }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// user has:
// id;
// name;
// role;
// email;
// imgUrl;
// isManager;
// age;
// [...]
