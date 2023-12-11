import { AxiosResponse } from 'axios'
import axios from './global'

export async function getRequest<T>(URL: string): Promise<AxiosResponse<T>> {
  const response = await axios.get(`/${URL}`)
  return response
}

export async function postRequest<T>(
  URL: string,
  payload: any
): Promise<AxiosResponse<T>> {
  const response = await axios.post(`/${URL}`, payload)
  return response
}

export async function patchRequest<T>(
  URL: string,
  payload: any
): Promise<AxiosResponse<T>> {
  const response = await axios.patch(`/${URL}`, payload)
  return response
}

export async function putRequest<T>(
  URL: string,
  payload: any
): Promise<AxiosResponse<T>> {
  const response = await axios.putForm(`/${URL}`, payload)
  return response
}

export async function deleteRequest<T>(URL: string): Promise<AxiosResponse<T>> {
  const response = await axios.delete(`/${URL}`)
  return response
}