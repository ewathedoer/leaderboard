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
  getInitialState: function() {
    return {
      results: []
    };
  },
  
  componentDidMount: function() {
    var that = this;
    $.getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/recent', function (data) {

      var results = [];
      for (var i = 0; i < data.length; i++) {
        var link = "https://www.freecodecamp.com/" + data[i].username;
        var points = "";
        if(data[i].alltime == 1) {
          points = "point"
        } else {
          points = "points"
        }
        results.push(
          <a key={i} href={link} className="flex-parent col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
            <div className="col-xs-3">
              <div className="avatar-box">
                <img className="img-responsive img-circle" alt="user's avatar" src={data[i].img} />
                <span className="badge">{i+1}</span>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="username">{data[i].username}</div>
              <div className="secondary-text">Total: {data[i].alltime} {points}</div>
            </div>
            <div className="col-xs-3">
              <span className="badge">{data[i].recent} points</span>
            </div>
          </a>
        );
      }
      that.setState({
        results: results
      });
    });
  },
  
  render: function() {
    return (
      <div role="tabpanel" className="tab-pane active" id="last-30-days">
        <div className="row list-item">
          {this.state.results}
        </div>
      </div>
    );
  }
});

var AllTimeContainer = React.createClass({
  getInitialState: function() {
    return {
      results: []
    };
  },
  
  componentDidMount: function() {
    var that = this;
    $.getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', function (data) {

      var results = [];
      for (var i = 0; i < data.length; i++) {
        var link = "https://www.freecodecamp.com/" + data[i].username;
        var points = "";
        if(data[i].recent == 1) {
          points = "point"
        } else {
          points = "points"
        }
        results.push(
          <a key={i} href={link} className="flex-parent col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
            <div className="col-xs-3">
              <div className="avatar-box">
                <img className="img-responsive img-circle" alt="user's avatar" src={data[i].img} />
                <span className="badge">{i+1}</span>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="username">{data[i].username}</div>
              <div className="secondary-text">Last 30 days: {data[i].recent} {points}</div>
            </div>
            <div className="col-xs-3">
              <span className="badge">{data[i].alltime} points</span>
            </div>
          </a>
        );
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