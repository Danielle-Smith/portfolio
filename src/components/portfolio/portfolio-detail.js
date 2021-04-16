import React, { Component } from "react";
import axios from "axios";
import { ExternalLink } from 'react-external-link';

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: ""
    };
  }

  getPortfolioItem = () => {
    axios.get(`https://daniellesmith.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, { withCredentials: true }
    ).then(response => {
      console.log("getPortfolioDetails", response);
      this.setState({
        portfolioItem: response.data.portfolio_item
      });
    })
      .catch(error => {
        console.log("getPortfolioDetails", error);
      });
  }
  componentDidMount() {
    this.getPortfolioItem();
  }

  render() {
    const {
      banner_image_url,
      description,
      name,
      thumb_image_url,
      url
    } = this.state.portfolioItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    };


    return (
      <div className="portfolio-detail-wrapper">
        <div className="banner" style={bannerStyles}>

        </div>

        <div className="portfolio-detail-description-wrapper">
          <div className="description">{description}</div>
        </div>

        <div className="bottom-content-wrapper">
          <ExternalLink href={url} className="site-link" target="_blank" >
            Visit {name}
          </ExternalLink>
        </div>
      </div>
    );
  }
}