const allNews = [
    {
        "headline": "India's budget aiming to revive economy with limited fiscal headroom", 
        "content": "New Delhi: India's ruling Bharatiya Janata Party (BJP) has promised a game-changing budget to revive the pandemic-hit economy, but a mountain of debt may force the finance minister to make tough choices when she delivers the package on Monday."
    },
    {
        "headline": "LDF shifts to poll mode, here's its blueprint for seat-sharing talks", 
        "content": "Thiruvananthapuram: The Left Democratic Front (LDF) is set to focus on identifying and earmarking the legislative assembly constituencies where each alliance partner would contest in the upcoming state polls. The coalition partners have urged the LDF leadership to complete the seat-sharing process before the ruling front's election rallies (jathas)."
    },
    {
        "headline": "5,771 new COVID cases in Kerala after 58K tests on Thursday", 
        "content": "Kerala reported 5,771 new COVID cases and 5,594 recoveries on Thursday. With this, the number of active COVID cases in the state soared to 72,392."
    },
    {
        "headline": "Sourav Ganguly undergoes another angioplasty", 
        "content": "Kolkata: Indian cricket board chief Sourav Ganguly underwent another angioplasty on Thursday when two more stents were implanted to clear his clogged coronary arteries, an official at the private hospital where he is admitted said."
    },
    {
        "headline": "IPL auction to be held in Chennai on Feb 18", 
        "content": "New Delhi: The Indian Premier League (IPL) auction ahead of the 2021 edition will be held in Chennai on February 18, the league organisers announced on Wednesday."
    }
];

let count = 0;
function getNews(initial){
    if (initial === undefined) {
        count +=1;
        if (count === allNews.length) {
            count = 0;
        }
    }
    document.querySelector('#content').textContent = allNews[count].content;
    document.querySelector('#headline').textContent = allNews[count].headline;
}

if(typeof exports !== 'undefined') {
    exports.allNews = allNews;
}