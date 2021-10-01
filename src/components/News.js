import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import "./NewsItems.css";
let getSortValue = {
    "crawled": "Crawl Date",
    "relevancy": "Relevancy",
    "published": "Published Date",
    "thread.published": "Thread Published",
    "social.facebook.likes": "Facebook Likes",
    "social.facebook.shares": "Facebook Shares",
    "social.facebook.comments": "Facebook Comments Count",
    "social.gplus.shares": "Google Plus Shares",
    "social.pinterest.shares": "Pinterest Shares",
    "social.linkedin.shares": "Linkedin Shares",
    "social.stumbledupon.shares": "Stumbledupon Shares",
    "social.vk.shares": "VK Shares",
    "replies_count": "Replies Count",
    "participants_count": "Participants Count",
    "spam_score": "Spam Score",
    "performance_score": "Performance Score",
    "domain_rank": "Domain Rank",
    "ord_in_thread": "Post Order in Thread",
    "rating": "Rating",
    "updated": "Updated"
};

const News = (props) => {
    let [articles, setArticles] = useState([]);
    let [sortValueMap, setSortValueMap] = useState(getSortValue);

    const getNews = async () => {
        let url;
        // console.log(props.sortValue);
        // console.log(props.searchValue);
        if (props.searchValue.trim().length > 0) {

            const sValue = modifySearchValue(props.searchValue.trim());

            url = `https://webhose.io/filterWebContent?token=4aef0355-a465-42b2-a92e-3e34dca0ded7&format=json&sort=${props.sortValue}&q=%22${sValue}%22%20language%3Aenglish%20thread.country%3AIN`;
        }
        else {
            url = `https://webhose.io/filterWebContent?token=4aef0355-a465-42b2-a92e-3e34dca0ded7&format=json&sort=${props.sortValue}&q=language%3Aenglish%20thread.country%3AIN`;
        }

        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.posts);
        setSortValueMap(getSortValue);
        console.log(url);
    };
    useEffect(() => {
        getNews();
    }, [props.searchValue, props.sortValue]);
    const modifySearchValue = (searchValue) => {

        for (var i = 0; i < searchValue.length; i++) {
            searchValue = searchValue.replace(" ", "%20");
        }
        return searchValue;
    }

    return (
        <div className="main-body">
            <div class="banner-area">
                <h2>Top News Based on:</h2>
                <h3 className="typewriter-text">{(sortValueMap[props.sortValue])}</h3>
            </div>
            <div className="content-area">
                <div className="grid wrapper">
                    {/* {console.log(articles)} */}
                    {articles.map((element) => {
                        return (
                            <NewsItems
                                key={`${element.url}+${Math.random()}`}
                                title={element.title ? element.title : ""}
                                description={element.text ? element.text.slice(0, 260) : ""}
                                imageUrl={
                                    element.thread.main_image ? element.thread.main_image :
                                        "https://t3.ftcdn.net/jpg/00/44/52/96/360_F_44529670_qw4OH0dlBAsZaLyOMuvrV1Ng8s31kGGR.jpg"
                                }
                                newsUrl={element.url}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default News;
