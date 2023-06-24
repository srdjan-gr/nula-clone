import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { songsData } from "../data";


const currentSong = (set, get) => ({

    // Initial state
    currentSongData: { song: "" },


    // Actions 
    addCurrentSong: (song) => {

        set((state) => ({
            currentSongData: { song }
        }))
    },
})


const useCurrentSong = create(
    devtools(
        persist(currentSong, {
            name: 'playedSongsHistory'
        })
    )
)


export default useCurrentSong