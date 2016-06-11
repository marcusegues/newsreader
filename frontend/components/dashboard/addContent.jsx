var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/apiUtil.jsx');

var AddContent = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {title: "", url: "", category: ""};
  },

  closeAddContent: function() {
    this.props.closeModal();
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
            <input type="text" name="title" id="addContentTitle" placeholder="Title" valueLink={this.linkState('username')} />
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
