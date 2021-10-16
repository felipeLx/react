export const geniusApiSearch = 'api.genius.com/search?q'

export const payload={
    'genius_client_id' : process.env.CLIENT_ID,
    'genius_secret_id' : process.env.CLIENT_SECRET,
    'genius_client_access_token' : process.env.CLIENT_TOKEN}

export const listArtistSongs = (artistName) => {
   let artistSongs = new ArrayBuffer()
    
   return(
       <div>
           {artistSongs}
       </div>
   ) 
}    
  