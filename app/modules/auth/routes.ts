import router from '@adonisjs/core/services/router'

const CreateUserController = () => import('#modules/users/controllers/create_users_controller.js')
router
  .group(() => {
    router.post('/', [CreateUserController])
  })
  .prefix('/users')
