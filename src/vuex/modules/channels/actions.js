import ScratchChannel from '../../../models/ScratchChannel'
import * as types from './mutation-types'

export default {
  [types.SET_CURRENT_CHANNEL] ({commit}, channel) {
    commit(types.SET_CURRENT_CHANNEL, channel)
  },
  [types.SET_CHANNELS] ({commit}, data) {
    const channels = []

    data.forEach(channelData => {
      let channel = ScratchChannel()

      channel.id = channelData.id
      channel.label = channelData.content.label
      channel.icon = channelData.content.icon
      channel.type = channelData.content.type
      channel.speaking = []
      channel.typingMessage = ''
      channel.users = channelData.content.users

      channels.push(channel)
    })

    commit(types.SET_CHANNELS, channels)
  },
  [types.SET_PRIVATE_CHANNELS] ({commit}, data) {
    const privateChannels = []

    data.forEach(channelData => {
      let channel = ScratchChannel()

      channel.id = channelData.id
      channel.label = channelData.content.label
      channel.icon = channelData.content.icon
      channel.type = channelData.content.type
      channel.speaking = []
      channel.typingMessage = ''
      channel.users = channelData.content.users

      privateChannels.push(channel)
    })

    commit(types.SET_PRIVATE_CHANNELS, privateChannels)
  },
  [types.ADD_TO_CHANNELS] ({commit}, data) {
    let channel = ScratchChannel()

    channel.id = data.id
    channel.label = data.content.label
    channel.icon = data.content.icon
    channel.type = data.content.type
    channel.speaking = []
    channel.typingMessage = ''
    channel.users = data.content.users

    commit(types.ADD_TO_CHANNELS, channel)
  },
  [types.DELETE_FROM_CHANNELS] ({commit}, channel) {
    commit(types.DELETE_FROM_CHANNELS, channel.id)
  },
  [types.INCREMENT_UNREAD] ({commit}, channel) {
    commit(types.INCREMENT_UNREAD, channel)
  },
  [types.SET_SPEAKING] ({commit}, data) {
    commit(types.SET_SPEAKING, data)
  }
}
