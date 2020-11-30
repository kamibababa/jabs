import { BASE_URL, handleFetchApiResponse } from "./helper";

const url = `${BASE_URL}/products`;

export default {
  async getAll() {
    const r = await fetch(`${url}`);
    return await handleFetchApiResponse(r);
  },
  async getById(id) {
    const r = await fetch(`${url}/${id}`);
    return await handleFetchApiResponse(r);
  },
  async createNew(data, authToken) {
    const r = await fetch(`${url}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: data,
    });
    return await handleFetchApiResponse(r);
  },
  async updateById(id, data, authToken) {
    const r = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: data,
    });
    return await handleFetchApiResponse(r);
  },
  async deleteById(id, authToken) {
    const r = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return await handleFetchApiResponse(r);
  },
};
