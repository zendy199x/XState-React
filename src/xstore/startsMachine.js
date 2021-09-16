import { Machine, assign } from "xstate";
import { STATS_API } from "../constants";

export const statsMachine = Machine({
  id: 'statsMachine',
  initial: 'fetchStats',
  context: {
    stats: null
  },
  states: {
    fetchStats: {
      invoke: {
        src: () => new Promise( async (resolve, reject) => {
          try {
            const stats = 
              await fetch(STATS_API)
                .then(response => response.json())

            return resolve(stats)
          } catch (error) {
            console.log('Error in fetching stats: ', error)
            return reject(error)
          }
        }),
        onDone: { target: 'ready', actions: 'assignStats' },
        onError: 'error',
      }
    },
    ready: {},
    error: {}
  }
},
{
  actions: {
    assignStats: assign((_context, event) => ({
      stats: event.data
    }))
  }
})
