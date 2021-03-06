import ScratchUser from '../../../models/ScratchUser'
import * as types from './mutation-types'

export default {
  [types.SET_USERS] ({commit}, data) {
    const users = []

    data.forEach(userData => {
      let user = ScratchUser()

      user.id = userData.id
      user.nickname = userData.content.nickname
      user.avatar = userData.content.avatar
      user.ido = userData.content.ido
      user.status = userData.content.status || false
      user.lastActive = userData.content.lastActive || 0

      users.push(user)
    })

    commit(types.SET_USERS, users)
  },
  [types.ADD_TO_USERS] ({commit}, data) {
    let user = ScratchUser()

    user.id = data.id
    user.nickname = data.content.nickname
    user.avatar = data.content.avatar
    user.ido = data.content.ido
    user.status = data.content.status || false
    user.lastActive = data.content.lastActive || 0

    commit(types.ADD_TO_USERS, user)
  },
  [types.UPDATE_USER] ({commit}, data) {
    let user = ScratchUser()

    user.id = data.id
    user.nickname = data.content.nickname
    user.avatar = data.content.avatar
    user.ido = data.content.ido
    user.status = data.content.status || false
    user.lastActive = data.content.lastActive || 0

    commit(types.UPDATE_USER, user)
  },
  [types.DELETE_USER] ({commit}, userId) {
    commit(types.DELETE_USER, userId)
  }
}
