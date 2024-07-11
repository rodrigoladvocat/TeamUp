import { api } from '@/services/apiService';

export async function getCollaboratorsByName(name: string, token: string) {
    try {

        let sufix = "";
        if (name !== "") {
            sufix = "/" + name;
        }

        const response = await api.get(
            '/user/collaborators/find' + sufix,
            { headers: { 'jwt': token } }
        );
        console.log(response.data);
        return response.data;
    }
    catch (error) {
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
