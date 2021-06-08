import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
            data: []
        };
    }

    getPortfolioItems = () => {
        this.setState({
            isLoading: true
        });
        axios
            .get('https://daniellesmith.devcamp.space/portfolio/portfolio_items')
            .then(response => {
                this.setState({
                    data: response.data.portfolio_items,
                    isLoading: false
                });
            })
            .catch(error => {
                console.log("error", error);
            });
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return (<PortfolioItem key={item.id} item={item} />
            );
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div className="loading">Loading...</div>;
        }

        return (
            <div className="homepage-wrapper">
                <div className="portfolio-items-wrapper">{this.portfolioItems()} </div>
            </div>
        );
    }
}