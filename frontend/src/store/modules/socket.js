import constant from '../../constant'

const state = {
    msgData: [],
}

const getters = {}

const actions = {}

const mutations = {
    [constant.PUSH_MSG_DATA]: ($state, $payload) => {
        $state.msgData.push($payload)
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}
