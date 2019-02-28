import React from 'react';
import ZestimateRow from './ZestimateRow.jsx';
import {
  Button, 
  DropDownArrow, 
  HomeDetails, 
  ZestimateHeaderContainer, 
  ZestimateTitle, 
  ZestimateValue, 
  CollapsibleContent
} from '../style.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyData: [{}],
      comparableHomesData: [{}],
      localHomesData: [{}], 
      isHidden: true
    };
  }

  componentDidMount () {
    fetch(`http://localhost:8081/api/properties/${this.props.propertyId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          propertyData: data.singlePropertyData
        });
      });
    fetch('http://localhost:8081/api/properties')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          comparableHomesData: data.comparableHomesData,
          localHomesData: data.localHomesData,
        });
      });
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render () {
    return (
      <div> 
        <Button onClick={this.toggleHidden.bind(this)}>
          Home Value
          <DropDownArrow>
            <i className="fas fa-angle-down"></i>
          </DropDownArrow>
        </Button>
        {!this.state.isHidden && 
          <Child 
            propertyData={this.state.propertyData} 
            comparableHomesData={this.state.comparableHomesData}
            localHomesData={this.state.localHomesData}
          />
        }  
      </div>
    );
  }
}

const Child = ({propertyData, comparableHomesData, localHomesData}) => {
  return (
    <div>
      <CollapsibleContent>
        <HomeDetails>
          <ZestimateHeaderContainer>
            <ZestimateTitle>
              Zestimate
            </ZestimateTitle>
            <ZestimateValue> 
              {`$${propertyData[0].zestimationPrice}`}
            </ZestimateValue>
          </ZestimateHeaderContainer>
        </HomeDetails>
      </CollapsibleContent>
      <ZestimateRow 
        propertyData={propertyData[0]}
        comparableHomesData={comparableHomesData}
        localHomesData={localHomesData}
      /> 
    </div>
  );
};

export default App; 