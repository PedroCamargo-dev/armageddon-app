import { getRequest } from "../http/axios"

export const teste = async () => {
  return await getRequest('teste')
}