import request from 'superagent';

const URL = 'https://peaceful-forest-71026.herokuapp.com/';

export async function createResource(resourceData) {
  const { body } = await request
    .post(`${URL}/resources`)
    .send(resourceData);
  
  return body;
}

export async function getAllResources() {
  const { body } = await request
    .get(`${URL}/resources`);

  return body;
}

export async function getOneResource(id) {
  const { body } = await request
    .get(`${URL}/resources/${id}`);

  return body;
}

export async function updateResource(id, resourceData) {
  const { body } = await request
    .put(`${URL}/resources/${id}`)
    .send(resourceData);

  return body;
}

export async function getAllCities() {
  const { body } = await request
    .get(`${URL}/cities`);

  return body;
}

export async function getAllStates() {
  const { body } = await request
    .get(`${URL}/states`);

  return body;
}

export async function getAllCategories() {
  const { body } = await request
    .get(`${URL}/categories`);

  return body;
}

export async function deleteResource(id) {
  const { body } = await request
    .delete(`${URL}/resources/${id}`);

  return body;
}
