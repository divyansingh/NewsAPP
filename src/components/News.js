import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import "./NewsItems.css";



const News = (props) => {
    let [articles, setArticles] = useState([]);

    const getNews = async () => {
        let url;
        // console.log(props.sortValue);
        console.log(props.searchValue);
        if (props.searchValue.trim().length > 0) {

            const sValue = modifySearchValue(props.searchValue.trim());
            // %22stock%20market%22%20
            url = `https://webhose.io/filterWebContent?token=4aef0355-a465-42b2-a92e-3e34dca0ded7&format=json&ts=1630397207406&sort=${props.sortValue}&q=%22${sValue}%22%20language%3Aenglish`;
        }
        else {
            url = `https://webhose.io/filterWebContent?token=4aef0355-a465-42b2-a92e-3e34dca0ded7&format=json&ts=1630397207406&sort=${props.sortValue}&q=language%3Aenglish`;
        }

        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.posts);
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

            <div className="grid">
                {console.log(articles)}
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
    );
}
export default News;
