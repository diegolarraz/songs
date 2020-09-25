const songsReducer = () => {
    return [
        { title: 'No scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '3:15' },
        { title: 'All star', duration: '2:55' },
        { title: 'hey jude', duration: '3:25' },
        { title: 'Revolution', duration: '3:05' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    };

    return selectedSong;
};