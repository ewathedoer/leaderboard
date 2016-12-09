var Main = React.createClass({
  render: function() {
    return(
        <div>
          <div className="row top-bar">
            <h1 className="text-center">Free Code Camp Leaders</h1>
            <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <nav className="row">
                <ul className="nav nav-tabs col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2" role="tablist">
                  <li role="presentation" className="active"><a href="#last-30-days" data-toggle="tab" role="tab">Last 30 days</a></li>
                  <li role="presentation"><a href="#all-time" data-toggle="tab" role="tab">All times</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="tab-content col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <LastThirtyDaysContainer/>
              <AllTimeContainer/>
            </div>
          </div>
        </div>
    );
  }
});

var LastThirtyDaysContainer = React.createClass({
  render: function() {
    return (
      <div role="tabpanel" className="tab-pane active" id="last-30-days">
        <div className="row list-item">
          <a href="https://www.freecodecamp.com/ewathedoer" className="flex-parent col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
            <div className="col-xs-3">
              <div className="avatar-box">
                <img className="img-responsive img-circle" alt="user's avatar" src="http://theonewhodo.es/images/ewa" />
                <span className="badge">1</span>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="username">ewathedoer</div>
              <div className="secondary-text">Total: 555 points</div>
            </div>
            <div className="col-xs-3">
              <span className="badge">42 points</span>
            </div>
          </a>
        </div>
        <div className="row list-item">
          <a href="https://www.freecodecamp.com/ewathedoer" className="flex-parent col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
            <div className="col-xs-3">
              <div className="avatar-box">
                <img className="img-responsive img-circle" alt="user's avatar" src="http://theonewhodo.es/images/ewa" />
                <span className="badge">2</span>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="username">ewathedoer</div>
              <div className="secondary-text">Total: 455 points</div>
            </div>
            <div className="col-xs-3">
              <span className="badge">40 points</span>
            </div>
          </a>
        </div>
      </div>
    );
  }
});

/* <a href="https://www.freecodecamp.com/ewathedoer" className="flex-parent col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
            <div className="col-xs-3">
              <div className="avatar-box">
                <img className="img-responsive img-circle" alt="user's avatar" src="http://theonewhodo.es/images/ewa" />
                <span className="badge">1</span>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="username">ewathedoer</div>
              <div className="secondary-text">Last 30 days: 555 points</div>
            </div>
            <div className="col-xs-3">
              <span className="badge">42 points</span>
            </div>
          </a> */

var AllTimeContainer = React.createClass({
  getInitialState: function() {
    return {
      results: []
    };
  },
  
  componentDidMount: function() {
    var that = this;
    $.getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', function (data) {
      console.log(data);

      var results = [];
      for (var i = 0; i < data.length; i++) {
        results.push(data[i].img);
      }
      that.setState({
        results: results
      });
    });
  },
  
  render: function() {
    return (
      <div role="tabpanel" className="tab-pane" id="all-time">
        <div className="row list-item">
          {this.state.results}
        </div>
      </div>
    );
  }
});


ReactDOM.render(
  <Main/>, 
  document.getElementById('app')
);