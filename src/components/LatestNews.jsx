import CardList from "./CardList";
import news from "../data/news";

const LatestNews = () => {
    return <CardList title="Latest News" data={news} type="news" />;
};

export default LatestNews;
