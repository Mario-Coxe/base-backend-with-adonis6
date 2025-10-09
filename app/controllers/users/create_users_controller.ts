import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import CreateUserService from '#services/users/create_user_service'
import { createUserValidator } from '#validators/users/create_user_validator'

@inject()
export default class CreateUserController {
  public async handle({ request, response }: HttpContext, createUserService: CreateUserService) {
    const payload = await request.validateUsing(createUserValidator)

    const user = await createUserService.handle(payload)

    return response.created({
      message: 'User created successfully',
      data: user,
    })
  }
}
