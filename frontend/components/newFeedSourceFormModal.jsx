var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/apiUtil');

var NewFeedSourceFormModal = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {title: "", url: "", category: ""};
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var newFeedSource = Object.assign({}, this.state);
    ApiUtil.createFeedSource(newFeedSource);
  },

  render: function() {
    return (
      <div className="modal is-open">

        <form className="modal-form" onSubmit={this.handleSubmit}>
          <span className="modal-close" onClick={this.props.closeModal}>&times;</span>

          <h1>Add a new feed</h1>

          <div className="input">
            <label htmlFor="form-title">Title</label>
            <input type="text" id="form-title" valueLink={this.linkState('title')} />
          </div>

          <div className="input">
            <label htmlFor="form-url">URL</label>
            <input type="text" id="form-url" valueLink={this.linkState('url')} />
          </div>

          <div className="input">
            <label htmlFor="form-category">Category</label>
            <input type="text" id="form-category" valueLink={this.linkState('category')} />
          </div>

          <div className="submit">
            <button>Add Feed</button>
            <span className="button-alternative">or <strong onClick={this.props.closeModal}>Cancel</strong></span>
          </div>

        </form>

        <div className="modal-screen" onClick={this.closeModal}>

        </div>

      </div>
    );
  }
});

module.exports = NewFeedSourceFormModal;
