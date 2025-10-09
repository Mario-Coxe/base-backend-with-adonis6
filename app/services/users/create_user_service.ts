import { inject } from '@adonisjs/core'
import User from '#models/user'

@inject()
export default class CreateUserService {
  public async handle(payload: { full_name: string; email: string; password: string }) {
    const user = await User.create(payload)
    return user
  }
}
