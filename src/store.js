import create from 'zustand';

/**
 * Setup Store
 * @type {UseStore<{removeAllBears: function(): *, bears: number, increasePopulation: function(): *}>}
 */
export const useStore = create(set => ({
  rooms: [
    { room: 'start', index: 0 },
    { room: 'tati', index: 1 },
    { room: 'mountains', index: 2 },
    { room: 'martialarts', index: 3 },
    { room: 'japan', index: 4 },
    { room: 'movies-books', index: 5 },
    { room: 'thank-you', index: 6 }
  ],
  currentRoomIndex: 0,
  audioIsPlaying: false,

  // actions
  changeRoom: roomIndex => set({ currentRoomIndex: roomIndex }),
  toggleAudio: toggle => set({ playAudio: toggle })
  // increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 })
}));
