import axios from 'axios';
import GetToDo from './getTodo';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Call API By Axios", () => {
    it("Calls axios and return todo item", async () => {
        mockedAxios.get.mockRejectedValue('Network error: Something went wrong');
        mockedAxios.get.mockResolvedValue({
            data: {
                results: [{
                    id: 1,
                    value: 'Learn ReactJs',
                    isDone: false
                }]
            }
        });
        const todoList = await GetToDo();
        todoList.forEach((todo: any) => {
            expect(todo.value).toContain("Learn ReactJs");
        });
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });
});