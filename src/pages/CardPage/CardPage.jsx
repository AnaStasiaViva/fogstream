import React, { useEffect, useCallback, useState } from "react";
import Card from "../../components/Card";
import { useSelector, useDispatch } from "react-redux";
import NDate from "../../components/NDate/index";
import { getNewsList } from "../../redux/thunk/main.thunk";
import { LoadingGrid } from "../../components/LoadingPlaceholder";
import { Box } from "@mui/system";
import { CardPageCardItemContainer, NewsItemLink } from "./styles";
import InfiniteScroll from "react-infinite-scroll-component";

function CardPage() {
  const { list, page, canLoadMore, pageSize } = useSelector(
    (state) => state.mainReducer
  );
  const dispatch = useDispatch();

  const [date, setDate] = useState(null);

  const onDateChange = useCallback((date) => {
    setDate(date);
  }, []);

  const loadNews = useCallback((params = {}) => {
    dispatch(getNewsList(params));
  }, []);

  useEffect(() => {
    loadNews({ date });
  }, [date, pageSize]);

  return (
    <Box>
      <Box>
        <NDate
          date={date}
          onChange={onDateChange}
          onSearch={() => loadNews({ date, page })}
        />
      </Box>

      <InfiniteScroll
        dataLength={list.length}
        next={() => loadNews({ date, page: page + 1, loadMore: true })}
        hasMore={canLoadMore}
      >
        <CardPageCardItemContainer>
          {!list.length && <LoadingGrid />}

          {list.map((data, index) => (
            <NewsItemLink to={`/news/${index}`} key={index}>
              <Card data={data} />
            </NewsItemLink>
          ))}
        </CardPageCardItemContainer>
      </InfiniteScroll>
    </Box>
  );
}

export default React.memo(CardPage);

// //FETCH MORE NEWS CHANGED PAGE COUNT
// const fetchMoreNewsPageSizeQuery = useCallback(() => {
//   setCurrentPage((prevState) => prevState + 1);
//   setTimeout(() => {
//     if (loadMoreNews) {
//       fetchNews(dispatch, setCurrentLoadedData, currentPage);
//       checkIfLoadMoreNews();
//     }
//   }, 1000);
// }, [currentPage, dispatch]);
