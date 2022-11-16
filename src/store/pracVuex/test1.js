import axios from 'axios'

const test1 = {
    namespaced: true,
    state: {
        test1Data: []
    },
    actions: {
       loadT1Data ({commit}) {
           axios.get('https://jsonplaceholder.typicode.com/photos')
               .then(data => {
                 //  console.log(data.data)
                   let test1Data = data.data
                   commit('setTest1Data', test1Data)
               })
               .catch(error => {
                   console.log(error)
               })
       }
    },
    mutations: {
        setTest1Data (state, test1Data) {
            state.test1Data = test1Data
        }
    }
}

export default test1