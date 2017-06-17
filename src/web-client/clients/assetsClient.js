import { create } from 'axios';

// TODO: Change, configure or something..
const BASE_URL = "http://localhost:3000/";

const instance = create({
    baseURL: BASE_URL
})

export const getAvailableHeightMaps = async () => {
    const result = await instance.get("api/v1/height-map/list");
    return result.data;
}

export const generateHeightMap = async ({ id }) => {
    const result = await instance.get(`api/v1/height-map/${id}/generate`);
    return result.data;
}