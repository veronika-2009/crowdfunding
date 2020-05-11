var mockAPIData = [ 'Veronika']
   
export const update = (payload)=>dispatch=>{
    dispatch({ type: 'SET_NEW_COMPANY', payload })
}      
export const asyncGetTracks = () => dispatch =>{
        setTimeout(() => {
            dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockAPIData })
        }, 2000)
}