export function getTasks(data) {
    // return axios.post(`${API}/tasks`)
    return {
        tasks: [
            {
                id: "1",
                title: "task 1",
                description: "some description",
                done: false,
            },
            {
                id: "2",
                title: "task 2",
                description: "some description",
                done: false,
            },
        ],
    };
}