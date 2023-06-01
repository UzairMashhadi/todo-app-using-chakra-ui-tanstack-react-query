import React from 'react'
import { Box, Button, Checkbox, Flex, Text } from '@chakra-ui/react'
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
export default function TodoCard({ item, refetch }) {

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.patch(
        `https://long-ruby-hatchling-shoe.cyclic.app/update/${item?._id}`,
        data
      );
    },
    onSuccess: () => {
      refetch();
    },
  });

  const handleOnChange = (e) => {
    mutation.mutate({ status: e.target.checked });
  };

  const deleteMutation = useMutation({
    mutationFn: () => {
      return axios.delete(
        `https://long-ruby-hatchling-shoe.cyclic.app/delete/${item?._id}`
      );
    },
    onSuccess: () => {
      refetch();
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate();
  };
  return (
    <Box border={'2px'} padding={4} borderColor={'gray.200'} borderRadius={10}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Flex gap={10} alignItems={'center'}>
          <Checkbox
            defaultChecked={item?.status}
            checked={item?.status}
            onChange={handleOnChange} />
          <Text textDecoration={`${item?.status && 'line-through'}`} fontSize={16} fontWeight={600} color={`${item?.status ? 'secondary' : 'black'}`} >{item?.title}</Text>
        </Flex>
        <Button
          _hover={true}
          fontSize={'14'}
          fontWeight={600}
          color="primary"
          bg={'button'}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Flex>
    </Box>
  )
}
