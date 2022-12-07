import React, {useEffect,useState}  from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

const News = (props)=>{
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  // document.title = `${capitalizeFirstLetter(props.category)} - News Monkey`

  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=990719a81ea64b7ea957b0186994a8f5&page=${page}&pageSize=${props.pageSize}`
    setloading(true)
    // this.setState({loading:true});
    let data =await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    setarticles(parsedData.articles)
    setloading(false)
    settotalResults(parsedData.totalResults)
  }

  useEffect(() => {
      document.title = `${capitalizeFirstLetter(props.category)} - News Monkey`
     updateNews()
      // eslint-disable-next-line
  }, [])

    // async componentDidMount(){
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=990719a81ea64b7ea957b0186994a8f5&page=${this.state.page}&pageSize=${props.pageSize}`
  //   // this.setState({loading:true})
  //   // let data =await fetch(url);
  //   // let parsedData = await data.json()
  //   // console.log(parsedData)
  //   // this.setState({
  //   //   articles:parsedData.articles,
  //   //   loading:false
  //   // })
  //   this.updateNews();

  // } 

  

   const handlePreClick = async ()=>{
    console.log("prebious botton")
    // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=990719a81ea64b7ea957b0186994a8f5&page=${this.state.page - 1}&pageSize=${props.pageSize}`
    // this.setState({loading:true});
    // let data =await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData)
    // this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    // this.setState({
    //   page:this.state.page-1,
    //   loading:false
    // })
    setpage(page-1)
    // this.setState({page:this.state.page-1})
    updateNews();
    // this.updateNews();
  }
  
 const  handleNextClick = async()=>{
    // if(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)){

    // }
    // else{
    //   console.log("Next button")
    //   let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=990719a81ea64b7ea957b0186994a8f5&page=${this.state.page+1}&pageSize=${props.pageSize}`
    //   this.setState({loading:true});
    //   let data =await fetch(url);
    //   let parsedData = await data.json()
    //   console.log(parsedData)
    //   this.setState({articles:parsedData.articles})
  
    //   this.setState ({
    //     page:this.state.page + 1 ,
    //     articles:parsedData.articles,
    //     loading:false

    //   })
    // }
    setpage(page+1)
    // this.setState({page:this.state.page+1})
    updateNews();
    // this.updateNews();
  } 

    return (
      <div className="container my-2">
      <h1 className="text-center" style={{margin:'36px 0px',marginTop: '70px'}}>NewsMonkey - Top {props.category} headlines</h1>
      {loading && <Spinner/>}
        <div className="row">
       {!loading && articles.map((e)=>{
        return <div className="col-md-4"   key = {e.url}>
            <NewsItem
              title = {e.title?e.title.slice(0,45):""}
              description={e.description?e.description.slice(0,70):""}
              ImgUrl={e.urlToImage}
              newsUrl = {e.url}
              author = {e.author}
              date = {e.publishedAt}
              source = {e.source.name}
            />
          </div>
       })}
       </div>
            <div className="container d-flex justify-content-between">
            <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePreClick}> &#8592; Previous</button>
            <button disabled={page + 1> Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &#8594;</button>
              
            </div>
      </div>
    );
  }
 News.defaultProps = {
  country:'us',
  pageSize: 8,
  category : 'general'

}
  News.propTypes = {
 country: PropTypes.string,
 pageSize:PropTypes.number,
 category : PropTypes.string
}

export default News;
