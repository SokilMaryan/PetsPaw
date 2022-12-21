export const useInfoStore = defineStore('infoStore', () => {
  const addInfoStore =  ref <IBreeds[]>([])

  return {
    addInfoStore,
  }
})