import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'; //actionCreator


//hook the ActionCreator(fetchWeather) to Container(SearchBar) - add mapDispatchToProps
class SearchBar extends Component {

    //initialize state thru constructor
    constructor(props){
        super(props);


        this.state = {term: ''};

        //refer to eventHandler (this - instance of SearchBar)
        //new bound instance(override the local method) = this(instance) has function (bind to SearchBar) 
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        //Binding Context
    }

    //Event Handler with event object
    onInputChange(event){
        let value = event.target.value;
        this.setState({term:value});
        //cannot read property of setState if not inside fat arrow
        //if thru function(passing event handler)
        //the value of [this] will be mistery context(incorrect)
        //this - does not refer to the actual component
        //to fix - (add arrow function or)
        //update the constructor
        //bind the context of onInputChange
        //this.onInputChange = this.onInputChange.bind(this)

    }

    //Adding the preventDefault() using event object on form element (from submitting form)
    onFormSubmit(event){
        //using form - handles keyPressEnter/buttonClick
        event.preventDefault();
        //fetch weather data here
        /*
        openweathermap.org/forecast5
        check API call
        */
        let cityName = this.state.term;
        this.props.fetchWeather(cityName);
        this.setState({term: ''}); //clear search (state then input)
        //bind on constructor when using this

    }


    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    value={this.state.term}
                    onChange={this.onInputChange}
                    placeholder="Get a 5 day forecast in favorite cities"
                    className="form-control" />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </span>
            </form>
        );
    }
}

//to provide this.props.fetchWeather
function mapDispatchToProps(dispatch){
    return bindActionCreators( {fetchWeather}, dispatch );
}

//null - mapStateToProps
//2nd param - mapDispatchToProps
export default connect(null,mapDispatchToProps)(SearchBar);