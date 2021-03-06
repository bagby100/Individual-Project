import React from "react";
import { getNBAArticles } from "./api";
import { Container, Header } from "semantic-ui-react";
import ArticleList from "./ArticleList";
class Highlights extends React.Component {
  state = {
    articles: [],
    apiError: "",
  };

  render() {
    const { articles, apiError } = this.state;
    return (
      <Container>
        <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
          News and Highlights
        </Header>
        {articles.length > 0 && <ArticleList articles={articles} />}
        {apiError && <p>Could not fetch any articles. Please try again.</p>}
            <center>
     <img src="https://cdn.nba.com/manage/2020/10/NBA20Secondary20Logo-784x462.jpg" alt="alternatetext"></img>
     </center>
     < br/>
     < br/>
     < br/>
     < br/>
     < br/>
     < br/>
     < br/>
     < br/>
     < br/>
      </Container>
      
    );
  }

  async componentDidMount() {
    try {
      const response = await getNBAArticles();
      this.setState({ articles: response.articles });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
  }
}

export default Highlights;