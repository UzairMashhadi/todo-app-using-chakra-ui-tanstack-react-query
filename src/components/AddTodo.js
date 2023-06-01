import { Box, Button, Flex, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function AddTodo({ refetch }) {
  const [todo, setTodo] = useState("");

  // Mutations
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(
        "https://long-ruby-hatchling-shoe.cyclic.app/add-todo",
        data
      );
    },
    onSuccess: () => {
      setTodo("");
      refetch();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ title: todo, status: false });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Flex flexDirection={'column'} alignItems={'center'}>
        <Input
          type='text'
          placeholder='Enter Title'
          value={todo}
          onChange={(e) => setTodo(e.target.value)} />
        <Button
          w={100}
          _hover={true}
          type='submit'
          mt={5}
          px={'10'}
          py={'5px'}
          fontSize={'14'}
          fontWeight={600}
          color="primary"
          bg={'secondary'}
        >
          Add Todo
        </Button>
      </Flex>
    </form>
  )
}
