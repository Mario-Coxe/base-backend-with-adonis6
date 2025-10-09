import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    full_name: vine.string().trim().minLength(3),
    email: vine.string().trim().email(),
    password: vine.string().trim().minLength(6),
  })
)
