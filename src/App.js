import { Text, Flex, Box } from '@chakra-ui/react'
import AddTodo from './components/AddTodo'
import TodoCard from './components/TodoCard'
import './App.css';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function App() {

  // Queries
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      axios.get("https://long-ruby-hatchling-shoe.cyclic.app/get-todo"),
  });
  return (
    <div className="App">
      <Text textAlign={'center'} color={'secondary'} fontSize={44} fontWeight={700}>
        Todo App using Chakra UI & Tanstack-Query
      </Text>
      <Flex flexDirection='column' gap={10} mt={10}>
        <AddTodo refetch={refetch} />
        {data?.data?.todos?.length === 0 && (
          <Box p={10} border={'2px'} borderColor={'secondary'} borderRadius={10}>
            <Text textAlign={'center'} color={'secondary'}>
              No Todo Found!
            </Text>
          </Box>
        )}
        {isLoading && (
          <Box p={10} border={'2px'} borderColor={'secondary'} borderRadius={10}>
            <Text textAlign={'center'} color={'secondary'}>
              Loading...
            </Text>
          </Box>
        )}
        {isError && (
          <Box p={10} border={'2px'} borderColor={'secondary'} borderRadius={10}>
            <Text textAlign={'center'} color={'button'}>
              Oops! Error...
            </Text>
          </Box>
        )}
        {data?.data?.todos?.map((item, index) => {
          return (
            <div key={index} className="mb-5">
              <TodoCard item={item} refetch={refetch} />
            </div>
          );
        })}
      </Flex >
    </div >
  );
}

export default App;
