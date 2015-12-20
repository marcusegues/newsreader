var React = require('react');

var SiteFeatures = React.createClass({
  render: function() {
    return (
      <div className="row text-center">
        <h1>Meet the team</h1>
        <div className="col-xs-3">
          <img src="/Pilatus.jpg" className="img-responsive img-rounded" alt="Matterhorn" />
          <h2>Matterhorn</h2>
          <p>

          </p>
        </div>

        <div className="col-xs-3">
          <img src="/Pilatus.jpg" className="img-responsive img-rounded" alt="Pilatus" />
          <h2>Pilatus</h2>
          <p>
            Lucerne...
          </p>
        </div>

        <div className="col-xs-3">
          <img src="/Rigi.jpg" className="img-responsive img-rounded" alt="Rigi" />
          <h2>Rigi</h2>
          <p>
            Dunno this one
          </p>
        </div>

        <div className="col-xs-3">
          <img src="/Weisshorn.jpg" className="img-responsive img-rounded" alt="Weisshorn" />
          <h2>Weisshorn</h2>
          <p>
            Not this one either
          </p>
        </div>
      </div>
    );
  }

});

module.exports = SiteFeatures;
