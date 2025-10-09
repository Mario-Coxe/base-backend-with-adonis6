import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import CreateUserService from '#modules/users/services/create_user_service.js'
import { createUserValidator } from '#modules/users/validators/create_user_validator.js'

@inject()
export default class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  public async handle({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)

    const user = await this.createUserService.handle(payload)

    return response.created({
      message: 'User created successfully',
      data: user,
    })
  }
}
