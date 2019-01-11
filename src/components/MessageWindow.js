import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import MessageItem from './MessageItem';
import VideoItem from './VideoItem';
import { setError } from '../actions/video';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    fontSize: '15px',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    textAlign: 'center',
    flexFlow: 'column',
  }
};

Modal.setAppElement('#app');

export class MessageWindow extends React.Component {  
  closeModal = () => {
    this.props.setError(false);
  }

  videoMessageRender = () => {
    if (this.props.video.length > 0) {
      return this.props.video.map((videoItem) => {
        return (
          <div key={videoItem.messageId} className="messagebox-container">
          <MessageItem 
            key={videoItem.messageId}
            message={videoItem.message}
          />
          <VideoItem
            key={videoItem.videoId}
            videoId={videoItem.videoId}/>
          </div>
        )
      });
    }
  }

  render () {
    const { loadingStatus } = this.props;
    return (
      <div>
        <Modal
          isOpen={loadingStatus.showError}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <p>There was an error with fetching a song for you.</p>
          <p>Please try again.</p>
          <button className="modal-button" onClick={this.closeModal} autoFocus>Ok</button>
        </Modal>
        {this.videoMessageRender()}
        {loadingStatus.loading && <div className="loader-container"><img src="/images/loader.svg" /></div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  video: state.video,
  loadingStatus: state.loadingStatus,
});

MessageWindow.propTypes = {
  video: PropTypes.arrayOf(PropTypes.shape({
    messageId: PropTypes.string,
    message: PropTypes.string,
    videoId: PropTypes.string,
  })).isRequired,
  setError: PropTypes.func.isRequired,
  loadingStatus: PropTypes.shape({
    showError: PropTypes.bool,
    loading: PropTypes.bool,
  }),
};

export default connect(mapStateToProps, { setError })(MessageWindow);
