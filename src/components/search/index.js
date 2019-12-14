import React, { useState, Suspense } from "react";
import styled from "styled-components";
import ListImages from "../list-images";
import { fetchSearchData } from "../../services/search";

const Container = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FetchButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  border-bottom: 1px solid gray;
  padding: 8px 0px;
  width: 70%;
`;

const Input = styled.input`
  font-size: 40px;
  width: 100%;
  background: transparent;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const Content = ({resource, fetchMore}) => {
  const search = resource.search.read();
  return (
    <ContentWrapper>
      <ListImages data={search.data} />
      {search.data.length ? <FetchButton onClick={fetchMore}>Fetch More</FetchButton> : null}
    </ContentWrapper>
  )
}

const Search = () => {
  const [{ query, resource }, { handleChange, fetchMore }] = useSearchHook();
  return (
    <Container>
      <InputWrapper>
        <Input
          value={query}
          placeholder="Start searching for images!"
          onChange={handleChange}
        />
      </InputWrapper>
      <Suspense fallback="Loading...">
        <Content resource={resource}  fetchMore={fetchMore} />
      </Suspense>
    </Container>
  );
};

const initialQuery = "";
const initialLimit = 8;
const initialResource = fetchSearchData({ q: initialQuery });

const useSearchHook = () => {
  const [query, setQuery] = useState(initialQuery);
  const [limit, setLimit] = useState(initialLimit);
  const [resource, setResource] = useState(initialResource);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
    setResource(fetchSearchData({ q: value, limit }));
  }

  const fetchMore = () => {
    const newLimit = limit + 8
    setLimit(newLimit)
    setResource(fetchSearchData({ q: query, limit: newLimit  }));
  }

  return [{ query, resource }, { handleChange , fetchMore}];
};

export default Search;
