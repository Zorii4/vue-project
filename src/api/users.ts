import axios, { AxiosError } from 'axios'
import { type IUsers } from '@/types/users'

export const getUsers = async(): Promise <IUsers[] | AxiosError> => {
  try {
    const { data } = await axios.get('BASE_URL')
    return data
  } catch (error) {
    return error as AxiosError
  }
}