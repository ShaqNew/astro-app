

export interface IAstronomyData {
    astro: IAstroData
}
  
 export interface IAstroData {
    is_moon_up:number
    is_sun_up:number
    moon_illumination:string
    moon_phase:string
    moonrise:string
    moonset:string
    sunrise:string
    sunset:string
}

export interface IAstroError {
    error : IError
}

export interface IError {
    code: number
    message: string
}

// export type TItemList = IItem[]
  
// export interface IState {
//     wishlistItems: TItemList,
//     basketListItems: TItemList
//   }