import { api } from '@/services/apiService';

export async function getCollaboratorsByName(name: string) {
    try {
        
        let sufix = "";
        if (name !== "") {
            sufix = "/" + name;
        }

        const response = await api.get('/user/collaborators/find' + sufix);
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