import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


const playedHistory = (set, get) => ({

    // Initial state
    historyData: [],
    // isLoading: false,
    // error: null,


    // Actions and async Actions
    addToHistory: (songInfo) => {

        set((state) => ({
            historyData: [songInfo, ...state.historyData]
        }))
        console.log(historyData)
    }
})


const usePlayedHistory = create(
    devtools(
        persist(playedHistory, {
            name: 'playedSongsHistory'
        })
    )
)


export default usePlayedHistory