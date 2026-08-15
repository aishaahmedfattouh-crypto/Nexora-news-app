import { Link } from "react-router-dom";

import Button from "../../components/common/Button/Button";
import SectionHeader from "../../components/common/SectionHeader/Header";
import NewsGrid from "../../components/NewsGrid/NewsGrid";
import LoadingState from "../../components/common/LoadingState/LoadingState";
import ErrorState from "../../components/common/ErrorState/ErrorState";

import useNews from "../../hooks/useNews";

import "./Home.css";

function Home() {
  const {
    articles,
    status,
    error,
  } = useNews("technology");

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container hero__container">

          <div className="hero__content">

            <span className="hero__eyebrow">
              The future, happening now
            </span>

            <h1 className="hero__title">
              Stay ahead of
              <span> technology.</span>
            </h1>

            <p className="hero__description">
              Discover the stories, ideas, and innovations
              shaping the digital world.
            </p>

            <div className="hero__actions">

              <Link to="/category/technology">
                <Button>
                  Explore latest news
                </Button>
              </Link>

              <Link
                to="/saved"
                className="your-saved-stories-button"
              >
                Your saved stories
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* Latest Stories */}
      <section className="container section">

        <SectionHeader
          eyebrow="Latest stories"
          title="What's happening in tech"
          description="Fresh stories from across the technology ecosystem."
        />

        {status === "loading" && (
          <LoadingState />
        )}

        {status === "error" && (
          <ErrorState message={error} />
        )}

        {status === "success" && (
          <NewsGrid articles={articles} />
        )}

      </section>
    </main>
  );
}

export default Home;