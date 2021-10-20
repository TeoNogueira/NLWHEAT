import axios from 'axios';
/*
Mapear >> 
1 - Receber o código via string
2 - recuperar o access_token do github;
3 - Verificar se o usuário existe no banco de dados;
3.B - Se Sim, gerar um token pra ele, se não criar no banco de dados gerar um token.
4 - Retornar o Token com as infos do usuário logado.
-x---x-----------------x-------------x-
*/

interface IAccessTokenResponse {
access_token: string;

}


class AuthenticateUserService {

async execute(code: string) {

const url = "https://github.com/login/oauth/access_token"

const {data: accessTokenResponse} = await axios.post<IAccessTokenResponse>(url, null, {

    params: {

        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
    },
    headers: {

        "Accept": "application/json"
    }
})

const response = await axios.get("https://api.github.com/user", {

headers: {
    authorization: `Bearer ${accessTokenResponse.access_token}`
}

})

return response.data;
}

};



export {AuthenticateUserService};
