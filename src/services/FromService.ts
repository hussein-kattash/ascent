import axios  from 'axios';
import type { AxiosResponse } from 'axios';
import type { Form } from '@/models/FormModel';

interface ApiResponse{
    message: string;
    status:number
}

const apiClient = axios.create({
    baseURL: 'https://backend.kholoudalnajdi.com/api',  
    headers: {
      'Content-Type': 'application/json',
    },
});

export const FormService = {
    async post (url: string, data: Form): Promise<number> {
        const response: AxiosResponse<ApiResponse> = await apiClient.post(url, data);
        return response.status;
    },
}
