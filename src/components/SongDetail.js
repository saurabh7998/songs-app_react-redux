import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
    console.log(props);
    return (
        <div>
            <div>
                <h3>Song Details for:</h3>
                <br/>
                <p>Title: {props.selectedSong?.title}</p>
                <p> Duration: {props.selectedSong?.duration}</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {selectedSong : state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail)




