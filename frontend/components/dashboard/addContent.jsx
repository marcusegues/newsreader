var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/apiUtil.jsx');
var ApiActions = require('./../../actions/apiActions');
var FeedSourceStore = require('./../../stores/feedSourceStore');

var AddContent = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {title: "", url: "", category: ""};
  },

  componentDidMount: function() {
    this.feedStoreListener = FeedSourceStore.addListener(this.handleAddedFeedSource);
  },

  componentWillUnMount: function() {
    this.feedStoreListener.remove();
  },

  closeAddContent: function() {
    this.props.closeModal();
  },

  handleAddedFeedSource: function() {
    if (FeedSourceStore.addingNewFeedSourceData().addedFeedSource === true) {
      var payload = FeedSourceStore.addingNewFeedSourceData().payload;
      // This setTimeout is a hack to prevent message
      // Flux Dispatch.dispatch(…): Cannot dispatch in the middle of a dispatch
      // http://stackoverflow.com/questions/26581587/flux-dispatch-dispatch-cannot-dispatch-in-the-middle-of-a-dispatch
      window.setTimeout(function() {
        ApiActions.updateFeedItemStoreAfterAddedNewFeedSource(payload);
        FeedSourceStore.resetAddingNewFeedSourceData();
      }, 1000);
      this.closeAddContent();
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var newUserFeedSource = Object.assign({}, this.state);
    ApiUtil.addUserFeedSource(newUserFeedSource);
  },

  render: function() {
    return (
      this.props.visible === false ? null :
      <div className="addContentForm">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div className="addContentFormTitleContainer">
            <span className="halfSeparator"></span><span id="addContentFormTitle">Add Feedsource</span><span className="halfSeparator"></span>
          </div>
          <div className="inputIcon">
            <span className="fa fa-caret-right"></span>
            <input type="text" name="title" id="addContentTitle" placeholder="Title" valueLink={this.linkState('title')} />
          </div>
          <div className="inputIcon">
            <span className="fa fa-rss"></span>
            <input type="text" name="url" id="addContentUrl" placeholder="Url" valueLink={this.linkState('url')} />
          </div>
          <div className="inputIcon">
            <span className="fa fa-folder"></span>
            <input type="text" name="category" id="addContentCategory" placeholder="Category" valueLink={this.linkState('category')} />
          </div>
          <input className="formSubmit" type="submit" value="Add Feedsource" />
        </form>
        <div className="modal-screen" onClick={this.closeAddContent} ></div>
      </div>
    );
  }
});

module.exports = AddContent;
