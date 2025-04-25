import { ApiResponse, CommonListQuery, ResponseData } from '../../common/interface';
import apiClient from './apiClient';

class BaseService<T> {
    private endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    async _getAll(params?: CommonListQuery): Promise<ResponseData<T[]>> {
        try {
            const response = await apiClient.get<ResponseData<T[]>>(`${this.endpoint}`, { params });
            return response.data;
        } catch (error) {
            console.log('Error fetching data:', error);
            throw error;
        }
    }

    async _create(data: T): Promise<ApiResponse<T>> {
        try {
            const response = await apiClient.post<ApiResponse<T>>(`${this.endpoint}`, data);
            return response.data;
        } catch (error) {
            console.log('Error creating data:', error);
            throw error;
        }
    }

    async _update(id: string | number, data: T): Promise<ApiResponse<T>> {
        try {
            const response = await apiClient.put<ApiResponse<T>>(`${this.endpoint}/${id}`, data);
            return response.data;
        } catch (error) {
            console.log('Error updating data:', error);
            throw error;
        }
    }

    async _delete(id: string | number): Promise<ApiResponse<T>> {
        try {
            const response = await apiClient.delete<ApiResponse<T>>(`${this.endpoint}/${id}`);
            return response.data;
        } catch (error) {
            console.log('Error deleting data:', error);
            throw error;
        }
    }

    async _getById(id: string | number): Promise<ApiResponse<T>> {
        try {
            const response = await apiClient.get<ApiResponse<T>>(`${this.endpoint}/${id}`);
            return response.data;
        } catch (error) {
            console.log('Error fetching data by ID:', error);
            throw error;
        }
    }

    async _getListAll(): Promise<ResponseData<T[]>> {
        try {
            const response = await apiClient.get<ResponseData<T[]>>(`${this.endpoint}/list`);
            return response.data;
        } catch (error) {
            console.log('Error fetching list:', error);
            throw error;
        }
    }
}
export default BaseService;
