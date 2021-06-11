const base_url = 'https://js-todo-list-9ca3a.df.r.appspot.com';

const option = {
    post: (contents) => ({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contents),
    }),
    
    put: (contents) => ({
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contents),
    }),

    delete: () => ({
        method: 'DELETE',
    }),

};

const request = async (url, option = {}) => {
    try{
        const response = await fetch(`${base_url}${url}`, option);
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.json()
        .then(function(json){
            console.log(json);
            return json;
        });
    } catch(err){
        alert(`Error: ${err}`);
    }

    // fetch(`${base_url}${url}`, option)
    // .then(res => {
    //     if(!res.ok) throw new Error(data.status);
    //     return res.json();
    // })
    // .catch((err) => console.log(err));
};

export const teamAPI = {
    getTeamList: () => {return request(`/api/teams`)},
    
    // getTeams: () => {
    //     return request('/api/teams');
    // },
};

export const memberAPI = {

};