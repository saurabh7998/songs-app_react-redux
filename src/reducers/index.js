import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {title: 'Channa Merya', duration: '4:05'},
        {title: 'Dooriyan', duration: '2:30'},
        {title: 'Kaise Hua', duration: '3:45'},
        {title: 'Kaala Chashma', duration: '4:02'}
    ];
};


const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});