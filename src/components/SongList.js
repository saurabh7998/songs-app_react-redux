import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = (props) => {

    const renderList = () => {
        return props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" 
                        onClick={() => props.selectSong(song)}
                        >
                            SELECT
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    // console.log(props);
    return(
        <div>
            <div className="ui divided list">
                {renderList()}
            </div>
        </div>
        
        
    );
};

//By doing this, Song List component gets the state as "props" without actually having to pass them to it!
const mapStateToProps = (state) => {
    // console.log(state);
    return {songs: state.songs} //state is basically all the data inside the our defined reducers!
}

// Tell me (i.e. SongList component) about the changes to the List of Songs - (connect)
export default connect(mapStateToProps, {selectSong})(SongList);