import { supabase } from '../supabase/supabase.config'

// SELECT
const selectUser = async(email) => {
    let { data: user, error } = await supabase
    .from('user')
    .select('*')
    .eq('email', email)

    if(user) {
        return user;
    }
    else {
        console.log(error)
        return null;
    };
}

const selectSearchs = async(idUser) => {
    let { data: searchs, error } = await supabase
    .from('search')
    .select('*')
    .eq('user_id', idUser)

    if(searchs) return searchs;
    else {
        console.log(error); 
        return [];
    };
}

const selectListsReproduction = async(id) => {
    
    let { data: lists_reproduction, error } = await supabase
    .from('lists_reproduction')
    .select('*')
    .eq('user_id', id)

    if(lists_reproduction) return lists_reproduction;
    else {
        console.log(error); 
        return [];
    };
}

const selectFavorite = async(id) => {
    
    let { data: favorite, error } = await supabase
    .from('favorite')
    .select('*')
    .eq('user_id', id)

    if(favorite) return favorite;
    else {
        console.log(error);
        return [];
    };
}

// INSERT
const insertUser = async(user) => {
    
    const { data, error } = await supabase
    .from('user')
    .insert([
      { 
        email: user.email,
        avatar_url: user.avatar_url,
        full_name: user.full_name
      },
    ])

    if(data) return data;
    else {
        console.log(error);
        return null;
    };
}

const insertListReproduction = async(listReproduction) => {
    
    const { data, error } = await supabase
    .from('search')
    .insert([
      { 
        name: listReproduction.name,
        description: listReproduction.description,
        user_id: listReproduction.idUser
      }
    ])

    if(data) return data;
    else {
        console.log(error);
        return null;
    };
}

const insertFavorite = async(userId) => {
    
    const { data, error } = await supabase
    .from('search')
    .insert([
      { user_id: userId }
    ])

    if(data) return data;
    else {
        console.log(error);
        return null;
    };
}

const insertSearch = async(idSong, idUser) => {
    
    const { data, error } = await supabase
    .from('search')
    .insert([
      { 
        song_id: idSong,
        user_id: idUser
      }
    ])

    if(data) return data;
    else {
        console.log(error);
        return null;
    };
}

const insertSong = async(song) => {
    
    const { data, error } = await supabase
    .from('song')
    .insert([
      { 
        song_id: song.song_id,
        name: song.name,
        image_url: song.image_url,
        preview_url: song.preview_url,
        artists: song.artists,
        list_reproduction_id: song.list_reproduction,
        favorite_id: song.favorite_id
      }
    ])

    if(data) return data;
    else {
        console.log(error);
        return null;
    };
}

// UPDATE
const updateListReproduction = async(listReproduction) => {
    
    const { data, error } = await supabase
    .from('lists_reproduction')
    .update(
        { name: listReproduction.name },
        { description: listReproduction.description }
    )
    .eq('id', listReproduction.id)

    if(data) return data;
    else {
        console.log(error);
        return null;
    };
}

const updateSong = async(song) => {
    
    const { data, error } = await supabase
    .from('lists_reproduction')
    .update(
        { list_reproduction_id: song.list_reproduction_id },
        { favorite_Id: song.favorite_id }
    )
    .eq('id', song.id)

    if(data) return data;
    else {
        console.log(error);
        return null;
    };
}

export {
    selectUser,
    selectSearchs,
    selectListsReproduction,
    selectFavorite,
    insertUser,
    insertSong,
    insertSearch,
    insertListReproduction,
    updateListReproduction,
    updateSong
}