import React, { useState } from 'react'
import "./Navbar.css";

const Navbar = (props) => {
    const [searchedValue, setSearchedValue] = useState('');
    const [sortedValue, setsortedValue] = useState('crawled');
    const [date, setDateValue] = useState();
    const [isValid, setIsValid] = useState(true);
    const searchInputHandler = event => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }


        setSearchedValue(event.target.value);
    }
    const sortInputHandler = event => {

        console.log("sorted");
        setsortedValue(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAddSort(sortedValue);
        if (searchedValue.trim().length === 0 && isValid) {
            setIsValid(false);
            return;
        }
        props.onAddSearch(searchedValue);
    }
    return (
        <header>
            <div className="nav">

                <div className="nav-header">
                    <div className="nav-title">
                        News Heading
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>


                <div className="nav-links">
                    <form onSubmit={submitHandler}>


                        <label htmlFor="sort-by">Sort By: </label>
                        <select
                            name="sort-by"
                            id="sort-by"
                            onChange={sortInputHandler}
                        >
                            <option value="crawled">Crawl Date</option>
                            <option value="relevancy">Relevancy</option>
                            <option value="published">Published</option>
                            <option value="thread.published">Thread Published</option>
                            <option value="social.facebook.likes">Facebook Likes</option>
                            <option value="social.facebook.shares">Facebook Shares</option>
                            <option value="social.facebook.comments">Facebook Comments Count</option>
                            <option value="social.gplus.shares">Google Plus Shares</option>
                            <option value="social.pinterest.shares">Pinterest Shares</option>
                            <option value="social.linkedin.shares">Linkedin Shares</option>
                            <option value="social.stumbledupon.shares">Stumbledupon Shares</option>
                            <option value="social.vk.shares">VK Shares</option>
                            <option value="replies_count">Replies Count</option>
                            <option value="participants_count">Participants Count</option>
                            <option value="spam_score">Spam Score</option>
                            <option value="performance_score">Performance Score</option>
                            <option value="domain_rank">Domain Rank</option>
                            <option value="ord_in_thread">Post Order in Thread</option>
                            <option value="rating">Rating</option>
                            <option value="updated">Updated</option>
                        </select>
                        <input type="text" placeholder="Search.." id="search" onChange={searchInputHandler} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Navbar
