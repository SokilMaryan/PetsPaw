interface IAddChange {
  groupActionName: string,
  timeHours: {},
  timeMin: {},
  id: string,
  imgSate: string,
  imgStyle: string
}

export const useActionStore = defineStore('actionStore', () => {
  const addHistoriAction =  ref<IAddChange[]>([])
  const addLiked: IBreeds[] = [];
  const addDisliked: IBreeds[] = [];
  const addFavorited: IBreeds[] = [];
  
  return {
    addHistoriAction,
    addLiked,
    addDisliked,
    addFavorited,
  }
})
