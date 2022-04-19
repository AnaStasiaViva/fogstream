import React, { useState, useEffect, useCallback } from "react";
import Card from "../../components/Card";
import { useSelector, useDispatch } from "react-redux";
import NDate from "../../components/NDate/index";
import { getNewsList } from "../../redux/thunk/main.thunk";
import { LoadingGrid } from "../../components/LoadingPlaceholder";
import { Box } from "@mui/system";
import NPagination from "../../components/NPagination/";
import { CardPaginationContainer, NewsItemLink } from "./styles";

function CardPaginationPage() {
  const { list, page, pageSize, totalResults } = useSelector(
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

      <CardPaginationContainer>
        {!list.length && <LoadingGrid />}

        {list.map((data, index) => (
          <NewsItemLink to={`/news/${index}`} key={index}>
            <Card data={data} />
          </NewsItemLink>
        ))}
      </CardPaginationContainer>

      <Box sx={{ p: 2 }}>
        <NPagination
          count={Math.ceil(totalResults / pageSize)}
          page={page}
          setCurrentPage={(page) => loadNews({ date, page })}
        />
      </Box>
    </Box>
  );
}

export default React.memo(CardPaginationPage);
