import router from '@adonisjs/core/services/router'

const CreateUserController = () => import('#controllers/users/create_users_controller')

router
  .group(() => {
    router.post('/', [CreateUserController, 'handle'])
  })
  .prefix('/users')
